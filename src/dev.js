import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { build, SpecError } from "./build.js";

const MIME = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".gif": "image/gif", ".svg": "image/svg+xml",
  ".webp": "image/webp", ".ico": "image/x-icon", ".woff2": "font/woff2", ".pdf": "application/pdf",
};

/**
 * Serve the project with live reload: rebuilds when files change and the browser refreshes itself.
 * @param {{ dir?: string, out?: string, port?: number, theme?: string, log?: (msg: string) => void, onIssues?: (e: SpecError) => void }} [opts]
 */
export async function dev({ dir = ".", out = ".openink-dev", port = 3000, theme, log = console.log, onIssues = () => {} } = {}) {
  const projectDir = path.resolve(dir);
  const outDir = path.resolve(projectDir, out);
  let version = String(Date.now());

  const rebuild = async () => {
    try {
      const { warnings } = await build({ dir, out, dev: true, theme });
      version = String(Date.now());
      log(`✓ built${warnings.length ? ` (${warnings.length} warning${warnings.length > 1 ? "s" : ""})` : ""}`);
    } catch (e) {
      if (e instanceof SpecError) onIssues(e);
      else log(`✗ ${e.message}`);
    }
  };
  await rebuild();

  const server = http.createServer((req, res) => {
    const url = decodeURIComponent(new URL(req.url, "http://x").pathname);
    if (url === "/__version") return void res.writeHead(200, { "Cache-Control": "no-store" }).end(version);
    const file = path.join(outDir, url === "/" ? "index.html" : url);
    if (!file.startsWith(outDir) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) return void res.writeHead(404).end("Not found");
    res.writeHead(200, { "Content-Type": MIME[path.extname(file)] || "application/octet-stream", "Cache-Control": "no-store" });
    fs.createReadStream(file).pipe(res);
  });
  await new Promise((resolve, reject) => server.once("error", reject).listen(port, resolve));

  let timer;
  const watcher = fs.watch(projectDir, { recursive: true }, (_, name) => {
    const changed = path.resolve(projectDir, name || "");
    if (changed.startsWith(outDir) || changed.includes(`${path.sep}node_modules`)) return;
    clearTimeout(timer);
    timer = setTimeout(rebuild, 150);
  });

  const close = () => { watcher.close(); server.close(); fs.rmSync(outDir, { recursive: true, force: true }); };
  return { url: `http://localhost:${port}`, close };
}
