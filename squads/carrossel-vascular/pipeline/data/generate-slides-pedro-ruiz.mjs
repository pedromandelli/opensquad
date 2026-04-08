/**
 * VascularCare Carousel Generator — Pedro Ruiz Edition (VascularCare Identity)
 *
 * Layouts disponíveis (campo `layout:` no roteiro):
 *   cover          — foto full-bleed escura, headline grande no topo, CTA pill opcional
 *   editorial      — foto full-bleed, texto no terço superior (slides narrativos/sazonais)
 *   numbered       — foto bg, badge numerado (1°, 2°...), número watermark gigante
 *   white-card     — fundo branco, headline dark, foto em card arredondado
 *   white-arc      — fundo creme, arcos coral, três pontos, subtítulo coral
 *   bullet-photo   — foto escura, intro text + lista de bullets com ponto coral
 *   numbered-cover — fundo branco, elemento corner com número, foto central, label highlight
 *   question-cover — foto escura, pergunta no topo, seta central, contra-pergunta abaixo
 *
 * Usage:
 *   node _run.mjs  (via _run.mjs gerado pela Diana)
 *
 * Visual Identity — VascularCare (vascularcare.com.br):
 *   - Fonte: Montserrat (fonte oficial da marca VascularCare)
 *   - Cor acento: Coral #C17C73 (cor do logo VascularCare)
 *   - CTA pill: Charcoal #424549 (cor do botão CTA do site)
 *   - Fotos em cores reais (sem grayscale)
 *   - Chrome minimalista: seta →, meta text, CRM corners
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { resolve, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dir = fileURLToPath(new URL(".", import.meta.url));

// ─── CONFIG ──────────────────────────────────────────────────────────────────

const LOGO_LIGHT      = resolve(__dir, "assets/logo-light.png");
const LOGO_DARK       = resolve(__dir, "assets/logo-dark.png");
const PHOTOS_DIR      = resolve(__dir, "photos");
const PHOTOS_FALLBACK = "/Users/pedromandelli/Documents/Vascular Care/Fotos-Regis/album-d413429452-downloads-pt1";

// Brand constants — update these to match VascularCare credentials
const BRAND = {
  meta:      "RESP. TÉCNICO DR. MARCELO MANDELLI",
  crmLeft:   "CRM-SP 167971 / RQE 52347",
  crmRight:  "CRM CNPJ 1019138",
  name:      "DR. MARCELO MANDELLI",
  copyright: "©VASCULARCARE 2026",
};

// Color palette — VascularCare brand identity (vascularcare.com.br)
const C = {
  dark:        "#0D0D0D",    // dark photo slides background
  darkCard:    "#1A1A1A",    // dark card fallback
  white:       "#FFFFFF",    // white backgrounds
  cream:       "#F7F3F1",    // warm near-white (white-arc slides) — alinhado com brand
  coral:       "#C17C73",    // VascularCare primary accent (cor do logo)
  coralDeep:   "#A8635B",    // coral deeper — arc decorations (mais contraste)
  coralText:   "#B5665E",    // coral for subtitle text
  coralCTA:    "#424549",    // VascularCare CTA button charcoal (cor do botão do site)
  text:        "#111111",    // near-black
  textSub:     "#424549",    // VascularCare charcoal for body text on light slides
};

// ─── PHOTO HELPERS ───────────────────────────────────────────────────────────

function getPhotos() {
  const exts = [".jpg", ".jpeg", ".png", ".webp"];
  const collect = (dir) => {
    if (!existsSync(dir)) return [];
    return readdirSync(dir, { withFileTypes: true }).flatMap((item) => {
      const full = join(dir, item.name);
      if (item.isDirectory()) return collect(full);
      const ext = item.name.slice(item.name.lastIndexOf(".")).toLowerCase();
      return exts.includes(ext) ? [full] : [];
    });
  };
  const primary = collect(PHOTOS_DIR);
  return primary.length > 0 ? primary : collect(PHOTOS_FALLBACK);
}

function fileToDataURL(path) {
  const buf  = readFileSync(path);
  const ext  = path.split(".").pop().toLowerCase();
  const mime = ext === "png" ? "image/png" : ext === "webp" ? "image/webp" : "image/jpeg";
  return `data:${mime};base64,${buf.toString("base64")}`;
}

// ─── TEXT HELPERS ─────────────────────────────────────────────────────────────

// **text** → <strong style="...">text</strong>
function parseBold(text, color = C.text) {
  return String(text).replace(
    /\*\*(.+?)\*\*/g,
    `<strong style="font-weight:700;color:${color};">$1</strong>`
  );
}

// \n or \\n in text → <br>
function nl2br(text) {
  return String(text).replace(/\\n/g, "<br>").replace(/\n/g, "<br>");
}

// ─── FONT & BASE ──────────────────────────────────────────────────────────────

// Montserrat — fonte oficial VascularCare (vascularcare.com.br usa Montserrat para headings)
const FONT_LINK = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet">`;

const BASE_CSS = `
  * { margin:0; padding:0; box-sizing:border-box; }
  body { width:1080px; height:1440px; overflow:hidden; font-family:'Montserrat',sans-serif; background:#0d0d0d; }
`;

function wrap(body) {
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

// ─── CHROME HELPERS ───────────────────────────────────────────────────────────

/**
 * Renders the four chrome elements:
 *   top-left:     category tag (if set) OR meta "RESP. TÉCNICO..."
 *   top-right:    → arrow
 *   bottom-left:  brand name OR CRM-SP
 *   bottom-right: copyright OR CRM CNPJ
 */
function chrome({ dark = true, category = null, brandBottom = false }) {
  const alphaPrimary   = dark ? "rgba(255,255,255,0.72)" : "rgba(0,0,0,0.42)";
  const alphaSecondary = dark ? "rgba(255,255,255,0.48)" : "rgba(0,0,0,0.30)";
  const alphaMeta      = dark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.35)";

  // Top-left: category tag (bolder, tracked) or meta line (light)
  const topLeftContent = category
    ? `<span style="font-size:15px;font-weight:500;letter-spacing:3.5px;
         text-transform:uppercase;color:${alphaPrimary};">${category}</span>`
    : `<span style="font-size:12px;font-weight:400;letter-spacing:2px;
         text-transform:uppercase;color:${alphaMeta};">${BRAND.meta}</span>`;

  // Bottom-left: brand name or CRM
  const bottomLeftContent = brandBottom
    ? `<span style="font-size:13px;font-weight:500;letter-spacing:2.5px;
         text-transform:uppercase;color:${alphaSecondary};">${BRAND.name}</span>`
    : `<span style="font-size:12px;font-weight:400;letter-spacing:1.8px;
         text-transform:uppercase;color:${alphaSecondary};">${BRAND.crmLeft}</span>`;

  // Bottom-right: copyright or CRM CNPJ
  const bottomRightContent = brandBottom
    ? `<span style="font-size:13px;font-weight:500;letter-spacing:2.5px;
         text-transform:uppercase;color:${alphaSecondary};">${BRAND.copyright}</span>`
    : `<span style="font-size:12px;font-weight:400;letter-spacing:1.8px;
         text-transform:uppercase;color:${alphaSecondary};">${BRAND.crmRight}</span>`;

  return `
  <!-- Chrome: top-left, arrow, CRM corners -->
  <div style="position:absolute;top:46px;left:60px;z-index:20;font-family:'Montserrat',sans-serif;">
    ${topLeftContent}
  </div>
  <div style="position:absolute;top:42px;right:60px;z-index:20;
    font-family:'Montserrat',sans-serif;font-size:22px;font-weight:300;
    color:${alphaPrimary};letter-spacing:-1px;line-height:1;">→</div>
  <div style="position:absolute;bottom:42px;left:60px;z-index:20;font-family:'Montserrat',sans-serif;">
    ${bottomLeftContent}
  </div>
  <div style="position:absolute;bottom:42px;right:60px;z-index:20;font-family:'Montserrat',sans-serif;text-align:right;">
    ${bottomRightContent}
  </div>`;
}

// ─── ARC DECORATIONS ─────────────────────────────────────────────────────────
// Three golden circles positioned mostly off-screen to the right.
// Only the left arc portion is visible — creates the signature curved line effect.

// Arc decorations — VascularCare coral (193,124,115 = #C17C73)
function arcDecorations() {
  return `
  <div style="position:absolute;right:-270px;top:100px;width:580px;height:580px;
    border-radius:50%;border:1.5px solid rgba(193,124,115,0.55);
    pointer-events:none;z-index:1;"></div>
  <div style="position:absolute;right:-250px;top:420px;width:520px;height:520px;
    border-radius:50%;border:1.5px solid rgba(193,124,115,0.38);
    pointer-events:none;z-index:1;"></div>
  <div style="position:absolute;right:-230px;top:720px;width:460px;height:460px;
    border-radius:50%;border:1.5px solid rgba(193,124,115,0.22);
    pointer-events:none;z-index:1;"></div>`;
}

// ─── LOGO HELPER ─────────────────────────────────────────────────────────────

function logoImg(dark = true) {
  const logoPath = dark ? LOGO_DARK : LOGO_LIGHT;
  if (!existsSync(logoPath)) return "";
  return `<img src="${fileToDataURL(logoPath)}"
    style="height:42px;width:auto;display:block;" alt="VascularCare">`;
}

// ─── LAYOUT 1: COVER ─────────────────────────────────────────────────────────
// Dark cinematic photo, headline large at top, optional CTA pill button.
// Pattern: Blefaroplastia cover ("ANTES DE FAZER Blefaroplastia / Evite isso")

function coverSlide(slide, photo) {
  const headline      = slide.headline || "";
  const subtitleItal  = slide.subtitle_italic || "";
  const cta           = slide.cta || "";

  // Photo: full-bleed, slightly darkened, full color
  const photoBlock = photo
    ? `<img src="${fileToDataURL(photo)}"
         style="position:absolute;inset:0;width:100%;height:100%;
                object-fit:cover;filter:brightness(0.72) contrast(1.05);
                z-index:1;display:block;">`
    : `<div style="position:absolute;inset:0;background:${C.darkCard};z-index:1;"></div>`;

  // Top gradient: ensures chrome legibility
  const gradTop = `<div style="position:absolute;top:0;left:0;right:0;height:240px;
    background:linear-gradient(to bottom,rgba(0,0,0,0.68) 0%,transparent 100%);
    z-index:2;pointer-events:none;"></div>`;

  // Bottom gradient: text readability zone
  const gradBottom = `<div style="position:absolute;bottom:0;left:0;right:0;height:55%;
    background:linear-gradient(to top,rgba(0,0,0,0.85) 45%,rgba(0,0,0,0.45) 75%,transparent 100%);
    z-index:2;pointer-events:none;"></div>`;

  // CTA pill — VascularCare brand charcoal (cor do botão CTA do site)
  const ctaPill = cta
    ? `<div style="margin-top:48px;">
         <span style="display:inline-block;
           background:${C.coralCTA};color:#fff;
           font-family:'Montserrat',sans-serif;font-size:34px;font-weight:600;
           padding:20px 56px;border-radius:64px;letter-spacing:0.5px;
           box-shadow:0 4px 28px rgba(66,69,73,0.45);">${cta}</span>
       </div>`
    : "";

  return wrap(`
<div style="position:relative;width:1080px;height:1440px;overflow:hidden;background:${C.dark};">
  ${photoBlock}
  ${gradTop}
  ${gradBottom}
  ${chrome({ dark: true, category: slide.category || null, brandBottom: true })}

  <!-- Headline block — positioned upper-left, within dark zone -->
  <div style="position:absolute;top:168px;left:60px;right:80px;z-index:10;">
    <h1 style="font-family:'Montserrat',sans-serif;font-size:96px;font-weight:900;
      color:#fff;line-height:1.0;letter-spacing:-3px;">
      ${nl2br(headline)}
    </h1>
    ${subtitleItal
      ? `<p style="margin-top:22px;font-family:'Montserrat',sans-serif;font-size:40px;
           font-weight:300;font-style:italic;color:rgba(255,255,255,0.78);
           line-height:1.2;letter-spacing:0.2px;">${nl2br(subtitleItal)}</p>`
      : ""}
    ${ctaPill}
  </div>
</div>`);
}

// ─── LAYOUT 2: EDITORIAL ─────────────────────────────────────────────────────
// Full photo with dark gradient. Text left-aligned in UPPER portion.
// Pattern: "Outono é clareza." / "A decisão não começa no calendário" / seasonal series
// Note: Pedro Ruiz puts text in the UPPER third, not the lower half.

function editorialSlide(slide, photo) {
  const headline = slide.headline || "";
  const bodyText = slide.supporting_text || "";

  const photoBlock = photo
    ? `<img src="${fileToDataURL(photo)}"
         style="position:absolute;inset:0;width:100%;height:100%;
                object-fit:cover;filter:brightness(0.72);z-index:1;display:block;">`
    : `<div style="position:absolute;inset:0;background:#1e2530;z-index:1;"></div>`;

  // Full overlay — tinted darker on left side for text readability
  const overlay = `<div style="position:absolute;inset:0;
    background:linear-gradient(105deg,rgba(0,0,0,0.62) 0%,rgba(0,0,0,0.20) 60%,rgba(0,0,0,0.10) 100%);
    z-index:2;pointer-events:none;"></div>`;

  const gradTop = `<div style="position:absolute;top:0;left:0;right:0;height:200px;
    background:linear-gradient(to bottom,rgba(0,0,0,0.55) 0%,transparent 100%);
    z-index:2;pointer-events:none;"></div>`;

  return wrap(`
<div style="position:relative;width:1080px;height:1440px;overflow:hidden;background:${C.dark};">
  ${photoBlock}
  ${overlay}
  ${gradTop}
  ${chrome({ dark: true })}

  <!-- Text block: upper portion — starts around y:130, matches Pedro Ruiz refs -->
  <div style="position:absolute;top:130px;left:60px;right:100px;z-index:10;">
    <h1 style="font-family:'Montserrat',sans-serif;font-size:84px;font-weight:800;
      color:#fff;line-height:1.0;letter-spacing:-2.5px;">
      ${nl2br(headline)}
    </h1>
    ${bodyText
      ? `<p style="margin-top:40px;font-family:'Montserrat',sans-serif;font-size:34px;
           font-weight:400;color:rgba(255,255,255,0.86);line-height:1.58;">
           ${parseBold(bodyText, "#FFFFFF")}
         </p>`
      : ""}
  </div>
</div>`);
}

// ─── LAYOUT 3: NUMBERED ──────────────────────────────────────────────────────
// Photo background, numbered badge top-left (icon + "1° ERRO"), watermark digit.
// Pattern: "5 erros que estão envelhecendo sua pele"

function numberedSlide(slide, photo) {
  const number     = slide.number || "1°";
  const icon       = slide.icon || "";
  const badgeLabel = slide.badge_label || "ERRO";
  const headline   = slide.headline || "";

  // Digit only (strip degree/ordinal) for watermark
  const digit = number.replace(/[^0-9]/g, "") || "1";

  const photoBlock = photo
    ? `<img src="${fileToDataURL(photo)}"
         style="position:absolute;inset:0;width:100%;height:100%;
                object-fit:cover;filter:brightness(0.70) contrast(1.08);
                z-index:1;display:block;">`
    : `<div style="position:absolute;inset:0;background:#1a1a1a;z-index:1;"></div>`;

  // Subtle overlay for contrast
  const overlay = `<div style="position:absolute;inset:0;background:rgba(0,0,0,0.28);
    z-index:2;pointer-events:none;"></div>`;

  const gradTop = `<div style="position:absolute;top:0;left:0;right:0;height:200px;
    background:linear-gradient(to bottom,rgba(0,0,0,0.55) 0%,transparent 100%);
    z-index:2;pointer-events:none;"></div>`;

  return wrap(`
<div style="position:relative;width:1080px;height:1440px;overflow:hidden;background:${C.dark};">
  ${photoBlock}
  ${overlay}
  ${gradTop}
  ${chrome({ dark: true })}

  <!-- Watermark: huge translucent digit, bottom-right -->
  <div style="position:absolute;bottom:-80px;right:-30px;z-index:3;
    font-family:'Montserrat',sans-serif;font-size:560px;font-weight:900;
    color:rgba(255,255,255,0.055);line-height:1;letter-spacing:-16px;
    user-select:none;pointer-events:none;white-space:nowrap;">${digit}</div>

  <!-- Badge: icon + number + label -->
  <div style="position:absolute;top:128px;left:60px;z-index:10;
    display:flex;align-items:center;gap:18px;">
    ${icon ? `<span style="font-size:64px;line-height:1;filter:brightness(0) invert(1);">${icon}</span>` : ""}
    <span style="font-family:'Montserrat',sans-serif;font-size:100px;font-weight:900;
      color:#fff;line-height:1;letter-spacing:-3px;">${number}</span>
    <span style="font-family:'Montserrat',sans-serif;font-size:46px;font-weight:700;
      color:#fff;line-height:1;letter-spacing:1.5px;text-transform:uppercase;
      margin-top:20px;">${badgeLabel}</span>
  </div>

  <!-- Main headline: lower portion of slide -->
  <div style="position:absolute;bottom:108px;left:60px;right:120px;z-index:10;">
    <h2 style="font-family:'Montserrat',sans-serif;font-size:64px;font-weight:700;
      color:#fff;line-height:1.08;letter-spacing:-1.2px;">
      ${nl2br(headline)}
    </h2>
  </div>
</div>`);
}

// ─── LAYOUT 4: WHITE-CARD ────────────────────────────────────────────────────
// Pure white background, bold dark headline, photo in rounded card below.
// Pattern: Blefaroplastia content slides ("Escolher só pelo preço")
// Note: Pedro Ruiz usa branco puro (#FFFFFF) nestas slides, não creme.

function whiteCardSlide(slide, photo) {
  const headline = slide.headline || "";

  // Photo in rounded card
  const photoCard = photo
    ? `<div style="width:100%;height:600px;border-radius:18px;overflow:hidden;
         box-shadow:0 4px 32px rgba(0,0,0,0.12);">
         <img src="${fileToDataURL(photo)}"
              style="width:100%;height:600px;object-fit:cover;display:block;">
       </div>`
    : `<div style="width:100%;height:600px;border-radius:18px;
         background:#E2DDD6;box-shadow:0 4px 32px rgba(0,0,0,0.08);"></div>`;

  return wrap(`
<div style="position:relative;width:1080px;height:1440px;overflow:hidden;background:${C.white};">
  ${chrome({ dark: false, category: slide.category || null, brandBottom: true })}

  <!-- Headline: positioned upper area, dark text -->
  <h1 style="position:absolute;top:128px;left:60px;right:80px;z-index:10;
    font-family:'Montserrat',sans-serif;font-size:66px;font-weight:700;
    color:${C.text};line-height:1.05;letter-spacing:-1.5px;">
    ${nl2br(headline)}
  </h1>

  <!-- Photo card: centered below headline -->
  <div style="position:absolute;top:380px;left:60px;right:60px;z-index:10;">
    ${photoCard}
  </div>
</div>`);
}

// ─── LAYOUT 5: WHITE-ARC ─────────────────────────────────────────────────────
// Warm cream background, three golden arc decorations (right side),
// three dots opener, dark headline, gold accent subtitle, body text.
// Pattern: "Cada estação tem sua personalidade" / "Mas no fim..."

function whiteArcSlide(slide) {
  const headline     = slide.headline || "";
  const subtitleGold = slide.subtitle_gold || "";
  const bodyText     = slide.supporting_text || "";

  // Three dots opener — coral VascularCare
  const dotsRow = `
  <div style="display:flex;gap:10px;margin-bottom:30px;">
    <div style="width:13px;height:13px;border-radius:50%;background:${C.coral};opacity:0.90;"></div>
    <div style="width:13px;height:13px;border-radius:50%;background:${C.coral};opacity:0.90;"></div>
    <div style="width:13px;height:13px;border-radius:50%;background:${C.coral};opacity:0.90;"></div>
  </div>`;

  // Short separator line between subtitle and body — coral VascularCare
  const separator = bodyText
    ? `<div style="width:44px;height:2px;background:${C.coral};opacity:0.40;margin:30px 0;"></div>`
    : "";

  return wrap(`
<div style="position:relative;width:1080px;height:1440px;overflow:hidden;background:${C.cream};">
  ${arcDecorations()}
  ${chrome({ dark: false })}

  <!-- Content block: left-aligned, upper portion -->
  <div style="position:absolute;top:252px;left:60px;right:170px;z-index:10;">
    ${dotsRow}

    <h1 style="font-family:'Montserrat',sans-serif;font-size:72px;font-weight:700;
      color:${C.text};line-height:1.04;letter-spacing:-1.8px;">
      ${nl2br(headline)}
    </h1>

    ${subtitleGold
      ? `<h2 style="margin-top:18px;font-family:'Montserrat',sans-serif;font-size:52px;
           font-weight:600;color:${C.coralText};line-height:1.1;letter-spacing:-0.5px;">
           ${nl2br(subtitleGold)}
         </h2>`
      : ""}

    ${separator}

    ${bodyText
      ? `<p style="font-family:'Montserrat',sans-serif;font-size:34px;font-weight:400;
           color:${C.textSub};line-height:1.55;">
           ${parseBold(bodyText, C.text)}
         </p>`
      : ""}
  </div>
</div>`);
}

// ─── LAYOUT 6: BULLET-PHOTO ──────────────────────────────────────────────────
// Dark photo, intro headline, then bullet list with gold dots.
// Pattern: "A melhor época para operar é aquela em que você consegue:"

function bulletPhotoSlide(slide, photo) {
  const headline = slide.headline || "";
  const items    = slide.items || [];

  const photoBlock = photo
    ? `<img src="${fileToDataURL(photo)}"
         style="position:absolute;inset:0;width:100%;height:100%;
                object-fit:cover;filter:brightness(0.55) contrast(1.05);
                z-index:1;display:block;">`
    : `<div style="position:absolute;inset:0;background:#1a2030;z-index:1;"></div>`;

  const gradTop = `<div style="position:absolute;top:0;left:0;right:0;height:180px;
    background:linear-gradient(to bottom,rgba(0,0,0,0.60) 0%,transparent 100%);
    z-index:2;pointer-events:none;"></div>`;

  const bulletItemsHtml = items
    .map(
      (item) => `
    <li style="display:flex;align-items:flex-start;gap:22px;margin-bottom:20px;">
      <span style="color:${C.coral};font-size:30px;line-height:1.4;
        flex-shrink:0;margin-top:4px;">•</span>
      <span style="font-family:'Montserrat',sans-serif;font-size:34px;font-weight:400;
        color:rgba(255,255,255,0.88);line-height:1.38;">
        ${parseBold(item, "#FFFFFF")}
      </span>
    </li>`
    )
    .join("");

  return wrap(`
<div style="position:relative;width:1080px;height:1440px;overflow:hidden;background:${C.dark};">
  ${photoBlock}
  ${gradTop}
  ${chrome({ dark: true })}

  <!-- Text block -->
  <div style="position:absolute;top:256px;left:60px;right:80px;z-index:10;">
    <h2 style="font-family:'Montserrat',sans-serif;font-size:54px;font-weight:600;
      color:#fff;line-height:1.1;letter-spacing:-0.8px;margin-bottom:48px;">
      ${nl2br(headline)}
    </h2>
    <ul style="list-style:none;padding:0;margin:0;">
      ${bulletItemsHtml}
    </ul>
  </div>
</div>`);
}

// ─── LAYOUT 7: NUMBERED-COVER ────────────────────────────────────────────────
// White background, gold corner element with number + badge_label,
// person photo positioned center (not full-bleed), gold highlight label,
// headline below, light gold watermark digit bottom-right.
// Pattern: "5 erros simples" cover (ref-06) — adaptado para VascularCare.
//
// Roteiro fields: number, badge_label, headline, highlight_text, photo

function numberedCoverSlide(slide, photo) {
  const number        = slide.number     || "5";
  const badgeLabel    = slide.badge_label || "SINAIS";
  const headline      = slide.headline   || "";
  const highlightText = slide.highlight_text || "";

  // Strip ordinal for watermark
  const digit = number.replace(/[^0-9]/g, "") || "5";

  // Coral corner block: bleeds off top-left corner — VascularCare brand
  const cornerBlock = `
  <div style="position:absolute;top:-24px;left:-24px;width:430px;
    background:${C.coral};border-radius:0 0 32px 0;padding:56px 44px 40px 52px;
    z-index:10;">
    <div style="display:flex;align-items:baseline;gap:12px;">
      <span style="font-family:'Montserrat',sans-serif;font-size:120px;font-weight:900;
        color:#fff;line-height:1;letter-spacing:-4px;">${digit}</span>
      <span style="font-family:'Montserrat',sans-serif;font-size:38px;font-weight:700;
        color:rgba(255,255,255,0.90);line-height:1.1;text-transform:uppercase;
        letter-spacing:1px;max-width:200px;">${badgeLabel}</span>
    </div>
  </div>`;

  // Photo: centered, not full-bleed, positioned center-right
  const photoBlock = photo
    ? `<div style="position:absolute;top:280px;left:100px;right:60px;height:720px;
         border-radius:20px;overflow:hidden;
         box-shadow:0 8px 40px rgba(0,0,0,0.14);">
         <img src="${fileToDataURL(photo)}"
              style="width:100%;height:100%;object-fit:cover;display:block;">
       </div>`
    : `<div style="position:absolute;top:280px;left:100px;right:60px;height:720px;
         border-radius:20px;background:#E8E4DC;"></div>`;

  // Watermark digit — light coral, bottom-right
  const watermark = `
  <div style="position:absolute;bottom:-60px;right:-10px;z-index:2;
    font-family:'Montserrat',sans-serif;font-size:500px;font-weight:900;
    color:rgba(193,124,115,0.10);line-height:1;letter-spacing:-14px;
    user-select:none;pointer-events:none;">${digit}</div>`;

  // Highlight label: coral background bar — VascularCare brand
  const highlightBar = highlightText
    ? `<div style="display:inline-block;background:${C.coral};
         padding:12px 32px;border-radius:6px;margin-bottom:18px;">
         <span style="font-family:'Montserrat',sans-serif;font-size:44px;font-weight:900;
           color:#fff;text-transform:uppercase;letter-spacing:1px;">${highlightText}</span>
       </div>`
    : "";

  return wrap(`
<div style="position:relative;width:1080px;height:1440px;overflow:hidden;background:${C.white};">
  ${watermark}
  ${chrome({ dark: false, brandBottom: true })}
  ${cornerBlock}

  ${photoBlock}

  <!-- Text block: lower area -->
  <div style="position:absolute;bottom:100px;left:60px;right:60px;z-index:10;">
    ${highlightBar}
    ${headline
      ? `<h2 style="font-family:'Montserrat',sans-serif;font-size:52px;font-weight:700;
           color:${C.text};line-height:1.1;letter-spacing:-1px;">
           ${nl2br(headline)}
         </h2>`
      : ""}
  </div>
</div>`);
}

// ─── LAYOUT 8: QUESTION-COVER ─────────────────────────────────────────────────
// Dark cinematic photo, question headline at top (large), gold arrow divider
// in the center, counter-question or answer at bottom.
// Pattern: "Existe uma época certa para operar?" (ref-21)
//
// Roteiro fields: headline (question top), counter_question (answer/bottom),
//                 photo, category

function questionCoverSlide(slide, photo) {
  const headline       = slide.headline        || "";
  const counterQ       = slide.counter_question || slide.supporting_text || "";
  const category       = slide.category        || "";

  const photoBlock = photo
    ? `<img src="${fileToDataURL(photo)}"
         style="position:absolute;inset:0;width:100%;height:100%;
                object-fit:cover;filter:brightness(0.60) contrast(1.08);
                z-index:1;display:block;">`
    : `<div style="position:absolute;inset:0;background:#111820;z-index:1;"></div>`;

  // Top gradient for chrome
  const gradTop = `<div style="position:absolute;top:0;left:0;right:0;height:220px;
    background:linear-gradient(to bottom,rgba(0,0,0,0.70) 0%,transparent 100%);
    z-index:2;pointer-events:none;"></div>`;

  // Bottom gradient for lower text
  const gradBottom = `<div style="position:absolute;bottom:0;left:0;right:0;height:45%;
    background:linear-gradient(to top,rgba(0,0,0,0.80) 40%,transparent 100%);
    z-index:2;pointer-events:none;"></div>`;

  // Center divider: coral line + arrow — VascularCare brand
  const divider = `
  <div style="position:absolute;top:50%;left:60px;right:60px;
    transform:translateY(-50%);z-index:10;
    display:flex;align-items:center;gap:24px;">
    <div style="flex:1;height:1px;background:rgba(193,124,115,0.50);"></div>
    <span style="font-family:'Montserrat',sans-serif;font-size:32px;font-weight:300;
      color:${C.coral};letter-spacing:2px;">→</span>
    <div style="flex:1;height:1px;background:rgba(193,124,115,0.50);"></div>
  </div>`;

  return wrap(`
<div style="position:relative;width:1080px;height:1440px;overflow:hidden;background:${C.dark};">
  ${photoBlock}
  ${gradTop}
  ${gradBottom}
  ${chrome({ dark: true, category: category || null, brandBottom: true })}
  ${divider}

  <!-- Question: upper block, centered -->
  <div style="position:absolute;top:130px;left:60px;right:60px;z-index:10;text-align:center;">
    <h1 style="font-family:'Montserrat',sans-serif;font-size:74px;font-weight:800;
      color:#fff;line-height:1.02;letter-spacing:-2px;">
      ${nl2br(headline)}
    </h1>
  </div>

  <!-- Counter-question: lower block, centered -->
  ${counterQ
    ? `<div style="position:absolute;bottom:100px;left:60px;right:60px;z-index:10;text-align:center;">
         <p style="font-family:'Montserrat',sans-serif;font-size:54px;font-weight:600;
           color:rgba(255,255,255,0.88);line-height:1.1;letter-spacing:-1px;font-style:italic;">
           ${nl2br(counterQ)}
         </p>
       </div>`
    : ""}
</div>`);
}

// ─── ROUTE ───────────────────────────────────────────────────────────────────

function renderSlide(slide, photo) {
  switch (slide.layout) {
    case "cover":           return coverSlide(slide, photo);
    case "editorial":       return editorialSlide(slide, photo);
    case "numbered":        return numberedSlide(slide, photo);
    case "white-card":      return whiteCardSlide(slide, photo);
    case "white-arc":       return whiteArcSlide(slide);
    case "bullet-photo":    return bulletPhotoSlide(slide, photo);
    case "numbered-cover":  return numberedCoverSlide(slide, photo);
    case "question-cover":  return questionCoverSlide(slide, photo);
    default:                return editorialSlide(slide, photo); // fallback
  }
}

// ─── PARSE ROTEIRO ────────────────────────────────────────────────────────────

function parseRoteiro(text) {
  const slides = [];
  const slideRx = /- slide:\s*(\d+)\s*\n([\s\S]*?)(?=\s*- slide:|\s*caption:|\s*hashtags:|$)/g;
  let m;
  while ((m = slideRx.exec(text)) !== null) {
    const block = m[2];

    // Extract simple string fields (quoted or unquoted)
    const get = (key) => {
      const rQ = new RegExp(`${key}:\\s*"([^"]*)"`, "i");
      const rU = new RegExp(`${key}:\\s*(.+)`, "i");
      return (rQ.exec(block) || rU.exec(block) || [])[1]?.trim() || "";
    };

    // Extract YAML list fields
    const getArray = (key) => {
      const kRx = new RegExp(`${key}:\\s*\\n((?:\\s*-\\s*.+\\n?)+)`, "i");
      const kM  = kRx.exec(block);
      if (!kM) return [];
      const itemRx = /^\s*-\s*"?(.+?)"?\s*$/gm;
      const items  = [];
      let im;
      while ((im = itemRx.exec(kM[1])) !== null) items.push(im[1].trim());
      return items;
    };

    slides.push({
      num:             parseInt(m[1]),
      tipo:            get("tipo"),
      layout:          get("layout") || "editorial",
      category:        get("category"),
      headline:        get("headline"),
      subtitle_italic: get("subtitle_italic"),
      cta:             get("cta"),
      number:          get("number"),
      icon:            get("icon"),
      badge_label:     get("badge_label") || "ERRO",
      badge_text:      get("badge_text"),
      subtitle_gold:   get("subtitle_gold"),
      supporting_text: get("supporting_text"),
      highlight_text:  get("highlight_text"),
      counter_question:get("counter_question"),
      items:           getArray("items"),
    });
  }
  return slides;
}

// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────

export async function generateSlides(roteiroPath, outDir) {
  const text   = readFileSync(roteiroPath, "utf8");
  const slides = parseRoteiro(text);
  const photos = getPhotos();

  // Slides that need photos
  // white-arc does NOT use a photo
  const PHOTO_LAYOUTS = new Set([
    "cover", "editorial", "numbered", "white-card", "bullet-photo",
    "numbered-cover", "question-cover",
  ]);

  let photoIdx = 0;
  function nextPhoto() {
    if (photos.length === 0) return null;
    const p = photos[photoIdx % photos.length];
    photoIdx++;
    return p;
  }

  // Portrait photo preference for cover
  const PORTRAIT_PATH =
    "/Users/pedromandelli/Documents/Vascular Care/Fotos-Regis/Dr. Marcelo Mandelli - Retratos pós produção/Dr. Marcelo - 001/Dr.Marcelo Mandelli_001.png";

  const htmlFiles = [];

  for (const slide of slides) {
    const n     = String(slide.num).padStart(2, "0");
    const fname = `slide-${n}.html`;
    const fpath = join(outDir, fname);

    let photo = null;
    if (PHOTO_LAYOUTS.has(slide.layout)) {
      if (slide.layout === "cover" && existsSync(PORTRAIT_PATH)) {
        photo = PORTRAIT_PATH;
      } else {
        photo = nextPhoto();
      }
    }

    const content = renderSlide(slide, photo);
    writeFileSync(fpath, content, "utf8");

    htmlFiles.push({
      num:    slide.num,
      tipo:   slide.tipo,
      layout: slide.layout,
      html:   fpath,
      png:    fpath.replace(".html", ".png"),
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
    try {
      const m = await import("playwright");
      pw = m.default || m;
    } catch {
      throw new Error("Playwright not found. Run: npm install playwright");
    }
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
    await page.waitForTimeout(800); // extra wait for Montserrat font loading
    await page.screenshot({ path: pngPath, fullPage: false });
    console.log(`  📸 ${pngPath.split("/").pop()}`);
  }

  await browser.close();
}
