// Usage: node generate_decklist_page.js

//const fs = require("fs");
//const path = require("path");

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// === PARAMETERS ===
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderName = "20260926_league_challenge";
const eventName = "September League Challenge";
const eventDate = "September 26, 2026";
const players = [
  { name: "James McDaid", deck: "Dragapult ex/Dusknoir" },
  { name: "Kyle Pyykkonen", deck: "Dragapult ex" },
  { name: "James Hitch", deck: "Hydrapple ex" },
  { name: "Emiliano Pérez", deck: "Beedrill ex" },
  { name: "Chris Bargeron", deck: "Hide n Sneak" },
  { name: "Elliott Clarke", deck: "Dragapult ex"},
  { name: "Noah Mueller", deck: "Slowking" },
  { name: "Taha Muhammad-Ali", deck: "N's Zoroark ex"}
];

// === HTML GENERATION ===
function generateDecklistHTML(eventName, eventDate, players) {
  const places = [
    "1st Place",
    "2nd Place",
    "3rd Place",
    "4th Place",
    "5th Place",
    "6th Place",
    "7th Place",
    "8th Place",
  ];
  const cards = players
    .map(
      (p, i) => `
    <article class="card">
      <div class="thumb">
        <a href="${i + 1}.png"
           data-player="${p.name}"
           data-deck="${p.deck}"
           data-rank="${places[i]}">
          <img src="${i + 1}.png" loading="lazy" />
        </a>
      </div>
      <div class="info">
        <div class="rank">${places[i]}</div>
        <div class="player">${p.name}</div>
        <div class="deck">${p.deck}</div>
      </div>
    </article>
  `,
    )
    .join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>September League Challenge Results</title>
  <style>
    :root {
      --radius: 12px; --max-width: 800px;
      --bg-color:#0d1117; --text-color:#c9d1d9; --card-bg:#161b22;
      --subtext:#8b949e; --shadow:rgba(0,0,0,.4); --accent:#58a6ff;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0; font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      background: var(--bg-color); color: var(--text-color);
    }
    header { padding: 16px; text-align: center; }
    h1 { margin: 0 0 4px; font-size: 1.35rem; }
    p.sub { margin: 0; color: var(--subtext); font-size: 0.95rem; }
    .list {
      display: flex; flex-direction: column; gap: 20px;
      padding: 16px; max-width: var(--max-width); margin: 0 auto;
    }
    .card { background: var(--card-bg); border-radius: var(--radius); box-shadow: 0 2px 6px var(--shadow); overflow: hidden; }
    .thumb a { display: block; }
    .thumb img { width: 100%; height: auto; display: block; cursor: zoom-in; }
    .info { padding: 12px 16px; }
    .rank { font-weight: 700; font-size: 1rem; color: var(--accent); }
    .player { margin-top: 4px; font-weight: 600; font-size: 1.05rem; }
    .deck { margin-top: 2px; color: var(--subtext); font-size: 0.95rem; }
    .back-btn {
      display: inline-block;
      margin-bottom: 8px;
      padding: 6px 12px;
      background: transparent;
      color: var(--accent);
      border: 1px solid var(--accent);
      border-radius: 6px;
      font-size: 0.9rem;
      text-decoration: none;
      transition: background 0.2s, color 0.2s;
    }
    .back-btn:hover {
      background: var(--accent);
      color: var(--bg-color);
    }
    .lightbox {
      position: fixed; inset: 0; background: rgba(0,0,0,.85);
      display: none; align-items: center; justify-content: center;
      z-index: 9999; padding: 24px;
    }
    .lightbox.open { display: flex; }
    .lightbox__img {
      max-width: 100%; max-height: 85vh; border-radius: 8px;
      box-shadow: 0 10px 30px rgba(0,0,0,.6);
    }
    .lightbox__caption {
      position: absolute; left: 0; right: 0; bottom: 12px;
      text-align: center; color: #e6edf3; font-size: 0.95rem;
      padding: 8px 12px;
    }
    .lightbox__btn {
      position: absolute; top: 12px; right: 12px;
      background: transparent; border: 1px solid #ffffff55; color: #fff;
      border-radius: 8px; padding: 8px 10px; cursor: pointer; font-size: 1rem;
    }
    .nav {
      position: absolute; top: 50%; transform: translateY(-50%);
      background: #00000055; border: 0; color: #fff; cursor: pointer;
      width: 44px; height: 44px; border-radius: 999px; font-size: 22px;
      display: grid; place-items: center;
    }
    .nav.prev { left: 12px; } .nav.next { right: 12px; }
    .nav:focus, .lightbox__btn:focus { outline: 2px solid var(--accent); outline-offset: 2px; }
  </style>
</head>
<body>
  <header>
    <a href="/event-results" class="back-btn">All Events</a>
    <h1>Top 8 Decklists</h1>
    <p class="sub">${eventName} • ${eventDate}</p>
  </header>
  <main class="list" aria-label="Top 8 decks">
    ${cards}
  </main>
  <div class="lightbox" id="lightbox" aria-modal="true" role="dialog" aria-label="Deck image viewer">
    <button class="lightbox__btn" id="closeBtn" aria-label="Close">✕</button>
    <button class="nav prev" id="prevBtn" aria-label="Previous">‹</button>
    <img class="lightbox__img" id="lightboxImg" alt="" />
    <button class="nav next" id="nextBtn" aria-label="Next">›</button>
    <div class="lightbox__caption" id="lightboxCaption"></div>
  </div>
  <script>
    const anchors = Array.from(document.querySelectorAll('.thumb a'));
    const lightbox = document.getElementById('lightbox');
    const imgEl = document.getElementById('lightboxImg');
    const captionEl = document.getElementById('lightboxCaption');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const closeBtn = document.getElementById('closeBtn');
    let index = 0;
    function openAt(i) {
      index = (i + anchors.length) % anchors.length;
      const a = anchors[index];
      imgEl.src = a.getAttribute('href');
      const rank = a.dataset.rank || '';
      const player = a.dataset.player || '';
      const deck = a.dataset.deck || '';
      captionEl.textContent = \`\${rank} — \${player} • \${deck}\`.replace(/^ — /,'');
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      lightbox.classList.remove('open');
      imgEl.src = '';
      document.body.style.overflow = '';
    }
    function next() { openAt(index + 1); }
    function prev() { openAt(index - 1); }
    anchors.forEach((a, i) => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        openAt(i);
      });
    });
    closeBtn.addEventListener('click', close);
    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) close();
    });
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    });
    let startX = 0;
    lightbox.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, {passive:true});
    lightbox.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) (dx < 0 ? next() : prev());
    });
  </script>
</body>
</html>`;
}

// === ENSURE FOLDER EXISTS AND WRITE TO FILE ===
const outDir = path.join(__dirname, folderName);
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}
fs.writeFileSync(
  path.join(outDir, "decklists.html"),
  generateDecklistHTML(eventName, eventDate, players),
);
console.log("decklists.html generated in", outDir);
