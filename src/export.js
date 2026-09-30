import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "./build.js";

const BROWSERS = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
  "/usr/bin/microsoft-edge",
].filter(Boolean);

export const findBrowser = () => BROWSERS.find((p) => fs.existsSync(p));
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "wireframe";

/**
 * Build the project, then export a PDF (one screen per A4 landscape page) or PNG screenshots.
 * Needs Chrome, Chromium or Edge installed (set CHROME_PATH to point at one).
 * @param {{ dir?: string, out?: string, png?: boolean, theme?: string }} [opts]
 * @returns {Promise<{ files: string[] }>}
 */
export async function exportFiles({ dir = ".", out = "dist", png = false, theme } = {}) {
  const executablePath = findBrowser();
  if (!executablePath) throw new Error("No Chrome, Chromium or Edge found. Install one, or set CHROME_PATH to its executable.");

  const { outDir, spec } = await build({ dir, out, theme });
  const { default: puppeteer } = await import("puppeteer-core");
  const browser = await puppeteer.launch({ executablePath, headless: true });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1100, height: 800 });
    await page.goto(pathToFileURL(path.join(outDir, "index.html")).href, { waitUntil: "networkidle0" });
    await wait(500); // let wired-elements finish drawing

    if (png) {
      const dir = path.join(outDir, "png");
      fs.mkdirSync(dir, { recursive: true });
      const files = [];
      for (const id of await page.$$eval(".screen", (s) => s.map((x) => x.id))) {
        await page.evaluate((i) => { location.hash = i; }, id);
        await wait(400);
        const file = path.join(dir, `${id}.png`);
        await page.screenshot({ path: file, fullPage: true });
        files.push(file);
      }
      return { files };
    }

    // Print media shows every screen; the ones that were hidden have never been drawn, so force a render.
    await page.emulateMediaType("print");
    await page.evaluate(() => document.querySelectorAll("*").forEach((e) => e.wiredRender?.(true)));
    await wait(500);
    const file = path.join(outDir, `${slug(spec.name)}.pdf`);
    await page.pdf({ path: file, format: "A4", landscape: true, printBackground: true, preferCSSPageSize: true });
    return { files: [file] };
  } finally {
    await browser.close();
  }
}
