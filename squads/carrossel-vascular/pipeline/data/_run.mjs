/**
 * VascularCare Slide Runner — Linux WSL2 compatible
 * Usage: node _run.mjs <roteiro.md> <output-slides-dir>
 */
import { generateSlides } from "./generate-slides.mjs";
import { createServer } from "node:http";
import { readFileSync, existsSync } from "node:fs";
import { join, resolve, extname } from "node:path";

const MIME = { ".html":"text/html",".png":"image/png",".jpg":"image/jpeg",".css":"text/css" };

const [,, roteiroPath, outDir] = process.argv;
if (!roteiroPath || !outDir) {
  console.error("Usage: node _run.mjs <roteiro.md> <output-slides-dir>");
  process.exit(1);
}

const absOut = resolve(outDir);
const absRoteiro = resolve(roteiroPath);

console.log("🎨 Generating HTML slides...");
const htmlFiles = await generateSlides(absRoteiro, absOut);
console.log(`✓ ${htmlFiles.length} HTML slides generated`);

// Start local HTTP server
const server = createServer((req, res) => {
  const filePath = join(absOut, req.url === "/" ? "/index.html" : req.url);
  try {
    const data = readFileSync(filePath);
    res.writeHead(200, { "Content-Type": MIME[extname(filePath)] || "text/plain" });
    res.end(data);
  } catch {
    res.writeHead(404); res.end("Not found");
  }
});

await new Promise(r => server.listen(8765, "127.0.0.1", r));
console.log("🌐 HTTP server on :8765");

// Screenshot with Playwright — uses local node_modules (stable path)
const { chromium } = await import("playwright");

const browser = await chromium.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] });
const page = await browser.newPage();
await page.setViewportSize({ width: 1080, height: 1440 });

for (const { html: htmlPath, png: pngPath, num } of htmlFiles) {
  const fname = `slide-${String(num).padStart(2,"0")}.html`;
  await page.goto(`http://127.0.0.1:8765/${fname}`);
  try { await page.waitForLoadState("networkidle", { timeout: 5000 }); } catch {}
  await page.waitForTimeout(800);
  await page.screenshot({ path: pngPath, fullPage: false });
  console.log(`  📸 slide-${String(num).padStart(2,"0")}.png`);
}

await browser.close();
server.close();
console.log("✅ All slides rendered!");
