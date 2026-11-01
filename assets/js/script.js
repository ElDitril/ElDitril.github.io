'use strict';

/* ------------------------------------------------------------------
   Renders the site from window.PORTFOLIO (assets/js/content.js)
   and handles navigation + the FR/EN switch.
   You normally never need to edit this file.
------------------------------------------------------------------ */

// Fixed interface labels (section titles, buttons…)
const UI = {
  fr: {
    nav: { about: "À propos", resume: "Parcours", mobility: "Mobilité", sports: "Sports & activités" },
    showContacts: "Voir les contacts",
    email: "E-mail", phone: "Téléphone", location: "Localisation",
    cvFr: "CV (FR)", cvEn: "CV (EN)",
    interestsTitle: "Ce qui m’intéresse",
    pitch: "Mon pitch vidéo",
    education: "Formation",
    activities: "Compétitions & activités",
    skills: "Compétences",
    levels: { beginner: "Débutant", intermediate: "Intermédiaire", advanced: "Avancé" },
    mobilityProjects: "Projets de mobilité",
    roadmap: "Feuille de route",
    checklist: "Pour y arriver",
    switchTo: "Switch to English"
  },
  en: {
    nav: { about: "About", resume: "Resume", mobility: "Mobility", sports: "Sports & Activities" },
    showContacts: "Show Contacts",
    email: "Email", phone: "Phone", location: "Location",
    cvFr: "CV (FR)", cvEn: "CV (EN)",
    interestsTitle: "What I'm interested in",
    pitch: "My video pitch",
    education: "Education",
    activities: "Competitions & activities",
    skills: "My skills",
    levels: { beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced" },
    mobilityProjects: "Mobility projects",
    roadmap: "Roadmap",
    checklist: "How I'll get there",
    switchTo: "Passer en français"
  }
};

const PAGES = ["about", "resume", "mobility", "sports"];

// --- data source: the editor's live preview (?preview) or content.js ---
let DATA = window.PORTFOLIO || {};
if (location.search.includes("preview")) {
  try {
    const draft = localStorage.getItem("portfolio-draft");
    if (draft) DATA = JSON.parse(draft);
  } catch (e) { /* ignore */ }
}

let lang = "fr";
try { lang = localStorage.getItem("portfolio-lang") || (navigator.language || "fr").slice(0, 2); } catch (e) { }
if (lang !== "fr" && lang !== "en") lang = "en";

let currentPage = (location.hash || "").replace("#", "");
if (!PAGES.includes(currentPage)) currentPage = "about";

// ------------------------------------------------------------------ helpers
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const t = (v) => (v && typeof v === "object" && ("fr" in v || "en" in v)) ? (v[lang] || v.fr || v.en || "") : (v ?? "");
const T = (v) => esc(t(v));
const arr = (v) => Array.isArray(v) ? v : [];
const ui = (path) => path.split(".").reduce((o, k) => (o ? o[k] : ""), UI[lang]);

function timelineItems(list) {
  return arr(list).map((it) => `
    <li class="timeline-item">
      <h4 class="h4 timeline-item-title">${T(it.title)}</h4>
      ${t(it.dates || it.date) ? `<span>${T(it.dates || it.date)}</span>` : ""}
      ${t(it.text) ? `<p class="timeline-text">${T(it.text)}</p>` : ""}
    </li>`).join("");
}

function iconCards(list) {
  return arr(list).map((it) => `
    <li class="service-item">
      <div class="service-icon-box"><ion-icon name="${esc(it.icon || "star-outline")}"></ion-icon></div>
      <div class="service-content-box">
        <h4 class="h4 service-item-title">${T(it.title)}</h4>
        <p class="service-item-text">${T(it.text)}</p>
      </div>
    </li>`).join("");
}

function videoEmbed(url) {
  if (!url) return "";
  const yt = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{6,})/);
  if (yt) return `<div class="video-wrap"><iframe src="https://www.youtube.com/embed/${yt[1]}" title="Pitch" allowfullscreen loading="lazy"></iframe></div>`;
  return `<div class="video-wrap"><video src="${esc(url)}" controls preload="metadata"></video></div>`;
}

// ------------------------------------------------------------------ render
function render() {
  const p = DATA.profile || {}, a = DATA.about || {}, r = DATA.resume || {}, m = DATA.mobility || {}, s = DATA.sports || {};

  document.documentElement.lang = lang;

  // interface labels
  document.querySelectorAll("[data-ui]").forEach((el) => { el.textContent = ui(el.dataset.ui); });

  // navbar + language switch
  $("navbar-list").innerHTML = PAGES.map((pg) => `
    <li class="navbar-item"><button class="navbar-link${pg === currentPage ? " active" : ""}" data-nav="${pg}">${esc(UI[lang].nav[pg])}</button></li>`).join("") + `
    <li class="navbar-item">
      <button class="lang-switch" id="lang-switch" title="${esc(ui("switchTo"))}" aria-label="${esc(ui("switchTo"))}">
        <span class="${lang === "fr" ? "on" : ""}">FR</span><span class="${lang === "en" ? "on" : ""}">EN</span>
      </button>
    </li>`;

  // sidebar
  $("profile-photo").src = p.photo || "./assets/images/my-avatar.png";
  $("profile-photo").alt = t(p.name);
  $("profile-name").textContent = t(p.name);
  $("profile-name").title = t(p.name);
  $("profile-title").textContent = t(p.title);

  let contacts = "";
  if (p.email) contacts += contactItem("mail-outline", ui("email"), `<a href="mailto:${esc(p.email)}" class="contact-link">${esc(p.email).replace("@", "<wbr>@")}</a>`);
  if (arr(p.phones).length) contacts += contactItem("phone-portrait-outline", ui("phone"),
    arr(p.phones).filter(Boolean).map((n) => `<a href="tel:${esc(n.replace(/[^\d+]/g, ""))}" class="contact-link">${esc(n)}</a>`).join(""));
  if (t(p.location)) contacts += contactItem("location-outline", ui("location"), `<address>${T(p.location)}</address>`);
  $("contacts-list").innerHTML = contacts;

  $("sidebar-buttons").innerHTML =
    (p.cvFr ? `<a class="cv-btn" href="${esc(p.cvFr)}" target="_blank" rel="noopener"><ion-icon name="document-text-outline"></ion-icon>${ui("cvFr")}</a>` : "") +
    (p.cvEn ? `<a class="cv-btn" href="${esc(p.cvEn)}" target="_blank" rel="noopener"><ion-icon name="document-text-outline"></ion-icon>${ui("cvEn")}</a>` : "");

  $("social-list").innerHTML =
    (p.linkedin ? `<li class="social-item"><a href="${esc(p.linkedin)}" class="social-link" target="_blank" rel="noopener" aria-label="LinkedIn"><ion-icon name="logo-linkedin"></ion-icon></a></li>` : "") +
    (p.github ? `<li class="social-item"><a href="${esc(p.github)}" class="social-link" target="_blank" rel="noopener" aria-label="GitHub"><ion-icon name="logo-github"></ion-icon></a></li>` : "");

  $("extra-sep").hidden = !(p.cvFr || p.cvEn || p.linkedin || p.github);

  // about
  $("about-text").innerHTML = arr(a.paragraphs).map((x) => `<p>${T(x)}</p>`).join("");
  $("pitch").innerHTML = a.pitchVideo ? `<h3 class="h3 service-title">${ui("pitch")}</h3>${videoEmbed(a.pitchVideo)}` : "";
  $("interests-list").innerHTML = iconCards(a.interests);

  // resume
  $("education-list").innerHTML = timelineItems(r.education);
  $("activities-list").innerHTML = timelineItems(r.activities);
  $("skills-list").innerHTML = arr(r.skills).map((sk) => `
    <li class="skill-label">
      <span class="skill-name">${T(sk.name)}</span>
      <span class="skill-level level-${esc(sk.level)}">${esc(UI[lang].levels[sk.level] || t(sk.level))}</span>
    </li>`).join("");

  // mobility
  $("mobility-intro").innerHTML = arr(m.intro).map((x) => `<p>${T(x)}</p>`).join("");
  $("mobility-projects").innerHTML = arr(m.projects).map((pr, i) => `
    <li class="mobility-card content-card">
      <div class="mobility-head">
        <div class="icon-box"><ion-icon name="${esc(pr.icon || "airplane-outline")}"></ion-icon></div>
        <div>
          <p class="mobility-num">${String(i + 1).padStart(2, "0")}</p>
          <h4 class="h4">${T(pr.title)}</h4>
        </div>
      </div>
      <p class="mobility-meta"><ion-icon name="location-outline"></ion-icon>${T(pr.where)}</p>
      <p class="mobility-meta"><ion-icon name="time-outline"></ion-icon>${T(pr.when)}</p>
      <p class="mobility-text">${T(pr.text)}</p>
    </li>`).join("");
  $("mobility-roadmap").innerHTML = timelineItems(arr(m.roadmap).map((x) => ({ title: x.date, text: x.text })));
  $("mobility-checklist").innerHTML = arr(m.checklist).map((x) => `<li><ion-icon name="checkmark-circle-outline"></ion-icon><span>${T(x)}</span></li>`).join("");

  // sports
  $("sports-intro").innerHTML = t(s.intro) ? `<p>${T(s.intro)}</p>` : "";
  $("sports-list").innerHTML = iconCards(s.items);

  showPage(currentPage, false);
}

function contactItem(icon, title, body) {
  return `<li class="contact-item">
    <div class="icon-box"><ion-icon name="${icon}"></ion-icon></div>
    <div class="contact-info"><p class="contact-title">${esc(title)}</p>${body}</div>
  </li>`;
}

function showPage(pg, scroll = true) {
  currentPage = pg;
  document.querySelectorAll("[data-page]").forEach((el) => el.classList.toggle("active", el.dataset.page === pg));
  document.querySelectorAll("[data-nav]").forEach((el) => el.classList.toggle("active", el.dataset.nav === pg));
  if (scroll) {
    try { history.replaceState(null, "", location.pathname + location.search + "#" + pg); } catch (err) { }
    window.scrollTo(0, 0);
  }
}

// ------------------------------------------------------------------ events
document.addEventListener("click", (e) => {
  const nav = e.target.closest("[data-nav]");
  if (nav) return showPage(nav.dataset.nav);

  if (e.target.closest("#lang-switch")) {
    lang = lang === "fr" ? "en" : "fr";
    try { localStorage.setItem("portfolio-lang", lang); } catch (err) { }
    render();
  }
});

document.querySelector("[data-sidebar-btn]").addEventListener("click", () => {
  document.querySelector("[data-sidebar]").classList.toggle("active");
});

render();
