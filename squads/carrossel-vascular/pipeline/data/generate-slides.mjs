/**
 * VascularCare Carousel Generator — Revista Edition v2
 *
 * Supported layouts (set via `layout:` field in roteiro.md):
 *   standard        — headline + supporting text (default)
 *   statement       — large centered quote, headline bold + supporting_text italic
 *   checklist       — headline + ✓ checkmark item list
 *   photo_checklist — centered grayscale photo + ✓ checklist below
 *   two_section     — top: headline + checklist | bottom: two-column (text + photo)
 *
 * Usage:
 *   node generate-slides.mjs <roteiro.md path> <output dir>
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { resolve, join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dir = fileURLToPath(new URL(".", import.meta.url));

// ─── CONFIG ──────────────────────────────────────────────────────────────────

const LOGO_LIGHT = resolve(__dir, "assets/logo-light.png");
const LOGO_DARK  = resolve(__dir, "assets/logo-dark.png");
const PHOTOS_DIR = resolve(__dir, "photos");

// Fallback: editorial photos from the Fotos-Regis archive
// Used when the squad's photos/ folder is empty or has no images
const PHOTOS_FALLBACK = "/Users/pedromandelli/Documents/Vascular Care/Fotos-Regis/album-d413429452-downloads-pt1";

const COLORS = {
  primary:   "#A0522D",
  dark:      "#111111",
  white:     "#FFFFFF",
  body:      "#333333",
  bodyLight: "#444444",
  bodyDark:  "#DDDDDD",
  rule:      "#D8C8BC",
  ruleDark:  "#2E2E2E",
  accentBg:  "#F2F2F2",
};

// ─── PHOTO HELPERS ───────────────────────────────────────────────────────────

function getPhotos() {
  const exts = [".jpg", ".jpeg", ".png", ".webp"];
  const collect = (dir) => {
    if (!existsSync(dir)) return [];
    const items = readdirSync(dir, { withFileTypes: true });
    let files = [];
    for (const item of items) {
      const full = join(dir, item.name);
      if (item.isDirectory()) files = files.concat(collect(full));
      else if (exts.includes(item.name.slice(item.name.lastIndexOf(".")).toLowerCase()))
        files.push(full);
    }
    return files;
  };

  // Primary: squad's own photos/ folder
  const primary = collect(PHOTOS_DIR);
  if (primary.length > 0) return primary;

  // Fallback: editorial archive (used until photos/ is populated)
  return collect(PHOTOS_FALLBACK);
}

function fileToDataURL(path) {
  const buf  = readFileSync(path);
  const ext  = path.split(".").pop().toLowerCase();
  const mime = ext === "png" ? "image/png" : ext === "webp" ? "image/webp" : "image/jpeg";
  return `data:${mime};base64,${buf.toString("base64")}`;
}

// ─── INLINE BOLD PARSER ──────────────────────────────────────────────────────
// Converts **text** → <strong>text</strong> for use inside HTML strings

function parseBold(text, dark = false) {
  const color = dark ? "#FFFFFF" : COLORS.body;
  return String(text).replace(/\*\*(.+?)\*\*/g, `<strong style="font-weight:700;color:${color};">$1</strong>`);
}

// ─── FONT + GOOGLE FONTS ─────────────────────────────────────────────────────

const FONT_LINK = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600;1,700&display=swap" rel="stylesheet">`;

// ─── BASE CSS ─────────────────────────────────────────────────────────────────

const BASE_CSS = `
  * { margin:0; padding:0; box-sizing:border-box; }
  body { width:1080px; height:1440px; overflow:hidden; font-family:'Montserrat',sans-serif; }
  .slide { width:1080px; height:1440px; display:flex; flex-direction:column; justify-content:space-between; padding:64px 72px 56px; position:relative; overflow:hidden; background:#F2F2F2; }
  /* header */
  .sh { display:flex; justify-content:space-between; align-items:center; padding-bottom:22px; border-bottom:1.5px solid ${COLORS.rule}; position:relative; z-index:2; flex-shrink:0; }
  .sh span { font-size:24px; font-weight:600; letter-spacing:3px; text-transform:uppercase; color:${COLORS.primary}; }
  /* body */
  .sb { flex:1; display:flex; flex-direction:column; justify-content:center; gap:30px; padding:24px 0; position:relative; z-index:2; min-height:0; }
  .hl { font-size:66px; font-weight:700; line-height:1.05; color:${COLORS.primary}; }
  .bt { font-size:36px; font-weight:400; line-height:1.55; color:${COLORS.body}; }
  .bt strong { font-weight:700; color:#222; }
  .bt em { font-style:italic; }
  /* footer */
  .sf { display:flex; align-items:center; gap:0; padding-top:22px; border-top:1.5px solid ${COLORS.rule}; position:relative; z-index:2; flex-shrink:0; }
  .logo { height:46px; width:auto; }
  /* dark */
  .dark { background:${COLORS.dark}; }
  .dark .sh { border-bottom-color:${COLORS.ruleDark}; }
  .dark .sh span { color:#999; }
  .dark .hl { color:#fff; }
  .dark .bt { color:${COLORS.bodyDark}; }
  .dark .sf { border-top-color:${COLORS.ruleDark}; }
  /* accent */
  .accent { background:${COLORS.accentBg}; }
  /* cover */
  .cover-wrap { position:absolute; inset:0; z-index:0; }
  .cover-photo { position:absolute; inset:0; background-size:cover; background-position:center; filter:grayscale(100%) brightness(0.6); }
  .cover-gradient { position:absolute; bottom:0; left:0; right:0; height:58%; background:linear-gradient(to top, rgba(0,0,0,0.93) 55%, transparent 100%); }
  .cover-header { position:absolute; top:0; left:0; right:0; display:flex; justify-content:space-between; padding:52px 72px 0; z-index:3; }
  .cover-header span { font-size:22px; font-weight:600; letter-spacing:3px; text-transform:uppercase; color:rgba(255,255,255,0.82); }
  .cover-brand { position:absolute; top:44px; left:72px; font-size:192px; font-weight:900; line-height:0.9; letter-spacing:-6px; text-transform:uppercase; color:rgba(255,255,255,0.88); z-index:2; }
  .cover-doctor { position:absolute; top:196px; right:72px; font-size:22px; font-weight:600; letter-spacing:2px; text-transform:uppercase; color:rgba(255,255,255,0.78); text-align:right; line-height:1.5; z-index:3; }
  .cover-bottom { position:absolute; bottom:58px; left:72px; right:72px; z-index:4; }
  .cover-hl { font-size:96px; font-weight:800; line-height:0.93; color:#fff; }
  .cover-sub { margin-top:18px; font-size:38px; font-weight:400; line-height:1.3; color:rgba(255,255,255,0.84); }
  .cover-sub em { font-style:italic; font-weight:600; }
  /* checklist items */
  .check-list { list-style:none; display:flex; flex-direction:column; gap:18px; }
  .check-item { display:flex; align-items:flex-start; gap:20px; font-size:38px; font-weight:500; line-height:1.3; color:${COLORS.body}; }
  .check-mark { color:${COLORS.primary}; font-weight:700; font-size:44px; line-height:1; flex-shrink:0; margin-top:2px; }
  /* statement */
  .statement-body { flex:1; display:flex; align-items:center; justify-content:center; padding:24px 0; }
  .statement-text { font-size:72px; font-weight:700; line-height:1.12; color:${COLORS.primary}; text-align:center; }
  .statement-text em { font-style:italic; color:#555; font-weight:600; }
  /* two-section */
  .section-divider { width:100%; height:2px; background:${COLORS.rule}; flex-shrink:0; margin:16px 0; }
  .two-col { display:flex; align-items:center; gap:28px; }
  .two-col-text { flex:1; display:flex; flex-direction:column; gap:14px; }
  .two-col-photo { width:380px; flex-shrink:0; }
  .two-col-photo img { width:380px; height:380px; object-fit:cover; filter:grayscale(100%) brightness(0.85); border-radius:3px; display:block; }
  .sub-hl { font-size:54px; font-weight:700; line-height:1.1; color:${COLORS.primary}; }
  .bullet-list { list-style:none; display:flex; flex-direction:column; gap:12px; }
  .bullet-item { display:flex; align-items:flex-start; gap:16px; font-size:32px; font-weight:500; line-height:1.35; color:${COLORS.body}; }
  .bullet-dot { color:${COLORS.primary}; font-weight:700; font-size:36px; line-height:1; flex-shrink:0; }
`;

// ─── HTML WRAPPER ─────────────────────────────────────────────────────────────

function html(body) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  ${FONT_LINK}
  <style>${BASE_CSS}</style>
</head>
<body>${body}</body>
</html>`;
}

// ─── HEADER / FOOTER HELPERS ──────────────────────────────────────────────────

function header(dark = false) {
  return `<header class="sh${dark ? " dark" : ""}"><span>Abril 26</span><span>Vol. 14</span></header>`;
}

function footer(dark = false) {
  const logo    = dark ? LOGO_DARK : LOGO_LIGHT;
  const logoData = existsSync(logo) ? fileToDataURL(logo) : null;
  const img = logoData
    ? `<img class="logo" src="${logoData}" alt="VascularCare">`
    : `<span style="font-size:28px;font-weight:700;color:${dark ? "#fff" : "#222"}">VascularCare<sup style="font-size:16px">®</sup></span>`;
  return `<footer class="sf${dark ? " dark" : ""}"> ${img} </footer>`;
}

// ─── COVER SLIDE ─────────────────────────────────────────────────────────────

function coverSlide(slide, photo) {
  const headline      = slide.headline;
  const supportingTxt = slide.supporting_text || "";

  const photoTag = photo
    ? `<img src="${fileToDataURL(photo)}"
         style="height:1440px;width:auto;position:absolute;right:-60px;top:0;
                filter:grayscale(100%) brightness(0.9) contrast(1.05);
                z-index:2;display:block;object-fit:cover;">`
    : "";

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  ${FONT_LINK}
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { width:1080px; height:1440px; overflow:hidden; font-family:'Montserrat',sans-serif; background:#111; }
  </style>
</head>
<body>
<div style="position:relative;width:1080px;height:1440px;background:#1a1a1a;overflow:hidden;">

  <!-- Photo -->
  ${photo ? photoTag : ""}

  <!-- Top fade so header is readable -->
  <div style="position:absolute;top:0;left:0;right:0;height:200px;
              background:linear-gradient(to bottom,rgba(0,0,0,0.55) 0%,transparent 100%);
              z-index:3;pointer-events:none;"></div>

  <!-- Bottom fade — lighter so photo stays visible -->
  <div style="position:absolute;bottom:0;left:0;right:0;height:52%;
              background:linear-gradient(to top,rgba(0,0,0,0.88) 40%,transparent 100%);
              z-index:3;pointer-events:none;"></div>

  <!-- "VASCULAR" display word -->
  <div style="position:absolute;top:36px;left:64px;
              font-family:'Montserrat',sans-serif;font-size:172px;font-weight:900;
              color:rgba(255,255,255,0.18);letter-spacing:-4px;text-transform:uppercase;
              white-space:nowrap;line-height:1;z-index:4;">VASCULAR</div>

  <!-- Header: date + vol -->
  <div style="position:absolute;top:0;left:0;right:0;padding:48px 72px 0;
              display:flex;justify-content:space-between;align-items:flex-start;z-index:6;">
    <span style="font-family:'Montserrat',sans-serif;font-size:20px;font-weight:700;
                 letter-spacing:4px;text-transform:uppercase;color:rgba(255,255,255,0.85);">ABRIL 26</span>
    <span style="font-family:'Montserrat',sans-serif;font-size:20px;font-weight:700;
                 letter-spacing:4px;text-transform:uppercase;color:rgba(255,255,255,0.85);">VOL. 14</span>
  </div>

  <!-- Doctor label top-right -->
  <div style="position:absolute;top:180px;right:72px;
              font-family:'Montserrat',sans-serif;font-size:19px;font-weight:600;
              letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.70);
              text-align:right;line-height:1.5;z-index:6;">DR. MARCELO<br>MANDELLI</div>

  <!-- Bottom content: headline + supporting -->
  <div style="position:absolute;bottom:72px;left:72px;right:72px;z-index:6;">
    <!-- Headline: large bold -->
    <h1 style="font-family:'Montserrat',sans-serif;font-size:88px;font-weight:900;
               color:#fff;line-height:0.95;letter-spacing:-2px;
               max-width:640px;margin-bottom:20px;">${headline}</h1>
    <!-- Supporting text: smaller, italic, left-aligned below -->
    ${supportingTxt ? `<p style="font-family:'Montserrat',sans-serif;font-size:30px;font-weight:400;
               color:rgba(255,255,255,0.78);line-height:1.3;font-style:italic;
               max-width:500px;">${supportingTxt}</p>` : ""}
  </div>

</div>
</body>
</html>`;
}

// ─── STANDARD SLIDE (headline + supporting text) ─────────────────────────────

function standardSlide(slide, photo) {
  const bg      = slide.background || "light";
  const dark    = bg === "dark";
  const variant = bg === "accent" ? " accent" : dark ? " dark" : "";

  let photoBlock = "";
  if (photo) {
    const src = fileToDataURL(photo);
    photoBlock = `<div style="width:100%;max-height:420px;overflow:hidden;border-radius:4px;margin-bottom:8px;">
      <img src="${src}" style="width:100%;height:420px;object-fit:cover;filter:grayscale(100%) brightness(0.85);">
    </div>`;
  }

  const ctaBlock = slide.cta_action
    ? `<p class="bt" style="font-weight:700;color:${COLORS.primary};font-size:38px;margin-top:4px;">${slide.cta_action}</p>`
    : "";

  return html(`
<section class="slide${variant}">
  ${header(dark)}
  <main class="sb">
    ${photoBlock}
    <h2 class="hl">${slide.headline}</h2>
    <p class="bt">${parseBold(slide.supporting_text, dark)}</p>
    ${ctaBlock}
  </main>
  ${footer(dark)}
</section>`);
}

// ─── STATEMENT SLIDE (large centered quote) ───────────────────────────────────
// Uses headline as bold part, supporting_text as italic continuation.

function statementSlide(slide) {
  const bg      = slide.background || "light";
  const dark    = bg === "dark";
  const variant = bg === "accent" ? " accent" : dark ? " dark" : "";

  // If supporting_text exists, it becomes an italic continuation inside the same statement
  const italicPart = slide.supporting_text
    ? ` <em>${slide.supporting_text}</em>`
    : "";

  return html(`
<section class="slide${variant}">
  ${header(dark)}
  <div class="statement-body">
    <p class="statement-text" style="${dark ? "color:#fff;" : ""}">
      ${slide.headline}${italicPart}
    </p>
  </div>
  ${footer(dark)}
</section>`);
}

// ─── CHECKLIST SLIDE (headline + ✓ item list) ────────────────────────────────

function checklistSlide(slide) {
  const bg      = slide.background || "light";
  const dark    = bg === "dark";
  const variant = bg === "accent" ? " accent" : dark ? " dark" : "";
  const items   = slide.items || [];

  const itemsHtml = items.map(item =>
    `<li class="check-item">
       <span class="check-mark" style="${dark ? "color:#E0875A;" : ""}">✓</span>
       <span style="${dark ? "color:#eee;" : ""}">${parseBold(item, dark)}</span>
     </li>`
  ).join("\n");

  return html(`
<section class="slide${variant}">
  ${header(dark)}
  <main class="sb">
    <h2 class="hl" style="${dark ? "color:#fff;" : ""}">${slide.headline}</h2>
    <ul class="check-list">${itemsHtml}</ul>
    ${slide.supporting_text ? `<p class="bt" style="${dark ? "color:#ccc;font-size:32px;" : "font-size:32px;color:#555;"}">${parseBold(slide.supporting_text, dark)}</p>` : ""}
  </main>
  ${footer(dark)}
</section>`);
}

// ─── PHOTO + CHECKLIST SLIDE (grayscale photo top, ✓ list below) ──────────────

function photoChecklistSlide(slide, photo) {
  const bg      = slide.background || "light";
  const dark    = bg === "dark";
  const variant = bg === "accent" ? " accent" : dark ? " dark" : "";
  const items   = slide.items || [];

  const photoBlock = photo
    ? `<div style="width:100%;height:480px;overflow:hidden;border-radius:4px;">
         <img src="${fileToDataURL(photo)}" style="width:100%;height:480px;object-fit:cover;filter:grayscale(100%) brightness(0.85);display:block;">
       </div>`
    : `<div style="width:100%;height:480px;background:#ddd;border-radius:4px;"></div>`;

  const itemsHtml = items.map(item =>
    `<li class="check-item" style="font-size:36px;">
       <span class="check-mark" style="${dark ? "color:#E0875A;" : ""}">✓</span>
       <span style="${dark ? "color:#eee;" : ""}">${parseBold(item, dark)}</span>
     </li>`
  ).join("\n");

  return html(`
<section class="slide${variant}">
  ${header(dark)}
  <main class="sb" style="gap:24px;">
    ${photoBlock}
    <ul class="check-list" style="gap:14px;">${itemsHtml}</ul>
  </main>
  ${footer(dark)}
</section>`);
}

// ─── TWO-SECTION SLIDE ────────────────────────────────────────────────────────
// Top: headline + ✓ checklist
// Bottom: two columns — bullet text (left) + photo (right)

function twoSectionSlide(slide, photo) {
  const bg      = slide.background || "light";
  const dark    = bg === "dark";
  const variant = bg === "accent" ? " accent" : dark ? " dark" : "";
  const items   = slide.items || [];
  const secItems = slide.second_items || [];

  const checkItemsHtml = items.map(item =>
    `<li class="check-item" style="font-size:34px;gap:16px;">
       <span class="check-mark" style="font-size:38px;${dark ? "color:#E0875A;" : ""}">✓</span>
       <span style="${dark ? "color:#eee;" : ""}">${parseBold(item, dark)}</span>
     </li>`
  ).join("\n");

  const bulletItemsHtml = secItems.map(item =>
    `<li class="bullet-item">
       <span class="bullet-dot">•</span>
       <span style="${dark ? "color:#ddd;" : ""}">${parseBold(item, dark)}</span>
     </li>`
  ).join("\n");

  const photoBlock = photo
    ? `<img src="${fileToDataURL(photo)}" style="width:360px;height:360px;object-fit:cover;filter:grayscale(100%) brightness(0.85);border-radius:3px;display:block;">`
    : `<div style="width:360px;height:360px;background:#ddd;border-radius:3px;"></div>`;

  const secondSection = (slide.second_headline || secItems.length > 0)
    ? `<div class="section-divider" style="${dark ? "background:#333;" : ""}"></div>
       <div class="two-col">
         <div class="two-col-text">
           ${slide.second_headline ? `<h3 class="sub-hl" style="${dark ? "color:#fff;" : ""}">${slide.second_headline}</h3>` : ""}
           ${secItems.length > 0 ? `<ul class="bullet-list">${bulletItemsHtml}</ul>` : ""}
         </div>
         <div class="two-col-photo">${photoBlock}</div>
       </div>`
    : "";

  return html(`
<section class="slide${variant}">
  ${header(dark)}
  <main class="sb" style="gap:16px;">
    <h2 class="hl" style="font-size:60px;${dark ? "color:#fff;" : ""}">${slide.headline}</h2>
    <ul class="check-list" style="gap:12px;">${checkItemsHtml}</ul>
    ${secondSection}
  </main>
  ${footer(dark)}
</section>`);
}

// ─── PARSE ROTEIRO ────────────────────────────────────────────────────────────

function parseRoteiro(text) {
  const slides = [];
  const slideRx = /- slide:\s*(\d+)\s*\n([\s\S]*?)(?=\s*- slide:|\s*caption:|\s*hashtags:|$)/g;
  let m;
  while ((m = slideRx.exec(text)) !== null) {
    const block = m[2];

    // Extract simple string fields
    const get = (key) => {
      const rQuoted  = new RegExp(`${key}:\\s*"([^"]*)"`, "i");
      const rUnquoted = new RegExp(`${key}:\\s*(.+)`, "i");
      return (rQuoted.exec(block) || rUnquoted.exec(block) || [])[1]?.trim() || "";
    };

    // Extract array fields (YAML list items under a key)
    const getArray = (key) => {
      const keyRx = new RegExp(`${key}:\\s*\\n((?:\\s*-\\s*.+\\n?)+)`, "i");
      const keyMatch = keyRx.exec(block);
      if (!keyMatch) return [];
      const rawLines = keyMatch[1];
      const itemRx = /^\s*-\s*"?(.+?)"?\s*$/gm;
      const items = [];
      let im;
      while ((im = itemRx.exec(rawLines)) !== null) items.push(im[1].trim());
      return items;
    };

    slides.push({
      num:             parseInt(m[1]),
      tipo:            get("tipo"),
      layout:          get("layout") || "standard",
      background:      get("background") || "light",
      headline:        get("headline"),
      supporting_text: get("supporting_text"),
      cta_action:      get("cta_action"),
      items:           getArray("items"),
      second_headline: get("second_headline"),
      second_items:    getArray("second_items"),
    });
  }
  return slides;
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export async function generateSlides(roteiroPath, outDir) {
  const text   = readFileSync(roteiroPath, "utf8");
  const slides = parseRoteiro(text);
  const photos = getPhotos();

  // Round-robin photo assignment for content slides that need a photo
  let photoIdx = 0;
  function nextPhoto() {
    if (photos.length === 0) return null;
    const p = photos[photoIdx % photos.length];
    photoIdx++;
    return p;
  }

  const htmlFiles = [];

  for (const slide of slides) {
    const n     = String(slide.num).padStart(2, "0");
    const fname = `slide-${n}.html`;
    const fpath = join(outDir, fname);

    let content;

    switch (slide.layout) {
      case "cover": {
        const PORTRAIT_PATH = "/Users/pedromandelli/Documents/Vascular Care/Fotos-Regis/Dr. Marcelo Mandelli - Retratos pós produção/Dr. Marcelo - 001/Dr.Marcelo Mandelli_001.png";
        const photo = existsSync(PORTRAIT_PATH)
          ? PORTRAIT_PATH
          : photos.find(p => /marcelo|retrato|cover/i.test(p)) || photos[0] || null;
        content = coverSlide(slide, photo);
        break;
      }

      case "statement":
        content = statementSlide(slide);
        break;

      case "checklist":
        content = checklistSlide(slide);
        break;

      case "photo_checklist": {
        const photo = nextPhoto();
        content = photoChecklistSlide(slide, photo);
        break;
      }

      case "two_section": {
        const photo = nextPhoto();
        content = twoSectionSlide(slide, photo);
        break;
      }

      default: {
        // "standard" or tipo === "cover" fallback
        if (slide.tipo === "cover") {
          const PORTRAIT_PATH = "/Users/pedromandelli/Documents/Vascular Care/Fotos-Regis/Dr. Marcelo Mandelli - Retratos pós produção/Dr. Marcelo - 001/Dr.Marcelo Mandelli_001.png";
          const photo = existsSync(PORTRAIT_PATH)
            ? PORTRAIT_PATH
            : photos.find(p => /marcelo|retrato|cover/i.test(p)) || photos[0] || null;
          content = coverSlide(slide, photo);
        } else {
          content = standardSlide(slide, null);
        }
      }
    }

    writeFileSync(fpath, content, "utf8");
    htmlFiles.push({
      num:  slide.num,
      tipo: slide.tipo,
      layout: slide.layout,
      html: fpath,
      png:  fpath.replace(".html", ".png"),
    });
    console.log(`  ✓ ${fname} [${slide.layout}]`);
  }

  return htmlFiles;
}

// ─── SCREENSHOT ───────────────────────────────────────────────────────────────

export async function screenshotAll(htmlFiles) {
  const PW_PATH =
    "/private/var/folders/7m/c32h7y1s2nj0rsqgcf29rk1w0000gn/T/cursor-sandbox-cache/57ff417eb9491ac6c92a03ea16a0d643/npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.js";

  let pw;
  try {
    pw = (await import(PW_PATH)).default;
  } catch {
    pw = await import("playwright");
    pw = pw.default || pw;
  }
  const { chromium } = pw;

  const browser = await chromium.launch({
    executablePath:
      "/Users/pedromandelli/Library/Caches/ms-playwright/chromium-1217/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing",
  });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1080, height: 1440 });

  for (const { html: htmlPath, png: pngPath } of htmlFiles) {
    await page.goto("file://" + htmlPath);
    await page.waitForLoadState("networkidle").catch(() => {});
    await page.waitForTimeout(600);
    await page.screenshot({ path: pngPath, fullPage: false });
    console.log(`  📸 ${pngPath.split("/").pop()}`);
  }

  await browser.close();
}
