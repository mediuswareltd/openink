import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { build, SpecError } from "./build.js";
import { devErrorPage } from "./render/page.js";

const MIME = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".gif": "image/gif", ".svg": "image/svg+xml",
  ".webp": "image/webp", ".ico": "image/x-icon", ".woff2": "font/woff2", ".pdf": "application/pdf",
};

const MAX_PORT_TRIES = 10;

/** A failed build as plain text, for the overlay in the browser. */
const describe = (e) => [e.message, ...(e.issues || []).map((i) => `  ${i.loc ? `${i.loc} ` : ""}${i.path || "spec"}: ${i.message}`)].join("\n");

/**
 * Serve the project with live reload: rebuilds when files change and the browser refreshes itself.
 * @param {{ dir?: string, out?: string, port?: number, theme?: string, log?: (msg: string) => void, onIssues?: (e: SpecError) => void, onWarnings?: (warnings: {path:string,message:string}[]) => void }} [opts]
 */
export async function dev({ dir = ".", out = ".openink-dev", port = 3000, theme, log = console.log, onIssues = () => {}, onWarnings = () => {} } = {}) {
  const projectDir = path.resolve(dir);
  const outDir = path.resolve(projectDir, out);
  let version = String(Date.now());
  let error = null; // the last build's failure, shown in the browser until a build succeeds

  const rebuild = async () => {
    try {
      const { warnings } = await build({ dir, out, dev: true, theme });
      version = String(Date.now());
      error = null;
      log(`✓ built${warnings.length ? ` (${warnings.length} warning${warnings.length > 1 ? "s" : ""})` : ""}`);
      if (warnings.length) onWarnings(warnings);
    } catch (e) {
      error = describe(e);
      if (e instanceof SpecError) onIssues(e);
      else log(`✗ ${e.message}`);
    }
  };
  await rebuild();

  const server = http.createServer((req, res) => {
    const url = decodeURIComponent(new URL(req.url, "http://x").pathname);
    if (url === "/__version") {
      return void res.writeHead(200, { "Content-Type": MIME[".json"], "Cache-Control": "no-store" }).end(JSON.stringify({ version, error }));
    }
    const file = path.join(outDir, url === "/" ? "index.html" : url);
    // no good build yet: a page that shows the errors and reloads once the spec builds
    if (url === "/" && !fs.existsSync(file)) return void res.writeHead(200, { "Content-Type": MIME[".html"], "Cache-Control": "no-store" }).end(devErrorPage());
    if (!file.startsWith(outDir) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) return void res.writeHead(404).end("Not found");
    res.writeHead(200, { "Content-Type": MIME[path.extname(file)] || "application/octet-stream", "Cache-Control": "no-store" });
    fs.createReadStream(file).pipe(res);
  });
  // If the port is taken, try the next ones (3000 → 3001 → …) before giving up.
  const wanted = port;
  for (let attempt = 0; ; attempt++, port++) {
    try {
      await new Promise((resolve, reject) => server.once("error", reject).listen(port, () => { server.off("error", reject); resolve(); }));
      break;
    } catch (e) {
      if (e.code !== "EADDRINUSE" || attempt >= MAX_PORT_TRIES - 1) {
        fs.rmSync(outDir, { recursive: true, force: true });
        throw e.code === "EADDRINUSE" ? new Error(`Ports ${wanted}–${port} are all in use. Pick another with --port.`) : e;
      }
    }
  }
  if (port !== wanted) log(`Port ${wanted} is in use, using ${port} instead.`);

  let timer;
  const watcher = fs.watch(projectDir, { recursive: true }, (_, name) => {
    const changed = path.resolve(projectDir, name || "");
    if (changed.startsWith(outDir) || changed.includes(`${path.sep}node_modules`)) return;
    clearTimeout(timer);
    timer = setTimeout(rebuild, 150);
  });

  const close = () => { watcher.close(); server.close(); fs.rmSync(outDir, { recursive: true, force: true }); };
  return { url: `http://localhost:${server.address().port}`, close };
}
