/* global experiences, projects, skills, education, translations */

// ─── Language State ──────────────────────────────────────────────────────────
let currentLang = localStorage.getItem('portfolio_lang') || 'en';

function t(key) {
  return (translations[currentLang] && translations[currentLang][key])
    || (translations.en && translations.en[key])
    || key;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function svgIcon(name) {
  const icons = {
    github: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
    linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
    mail: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    whatsapp: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>`,
    external: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
    chevron: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>`,
    menu: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,
  };
  return icons[name] || '';
}

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ─── Translations ─────────────────────────────────────────────────────────────

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.documentElement.lang = currentLang;
  document.querySelectorAll('.lang-toggle__opt').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

function setLang(lang) {
  if (lang === currentLang) return;
  currentLang = lang;
  localStorage.setItem('portfolio_lang', lang);
  applyTranslations();
  renderExperiences();
  renderEducation();
  renderSkills();
  // Immediately show re-rendered elements — no animation replay on lang switch
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}

// ─── Navigation ───────────────────────────────────────────────────────────────

function initNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Language toggle
  document.querySelectorAll('.lang-toggle__opt').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
}

// ─── Scroll Spy ───────────────────────────────────────────────────────────────

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__links a[href^="#"], .nav__mobile a[href^="#"]');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach(s => observer.observe(s));
}

// ─── Scroll Reveal ────────────────────────────────────────────────────────────

function initScrollReveal() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ─── Experience Cards ─────────────────────────────────────────────────────────

function renderExperiences() {
  const container = document.getElementById('experience-list');
  if (!container) return;

  container.innerHTML = experiences.map((exp, i) => {
    const label = exp.client
      ? `${exp.company} – <span style="color:var(--fg)">${exp.client}</span>`
      : exp.company;

    return `
      <div class="timeline__item reveal" style="transition-delay:${i * 0.06}s">
        <button
          class="exp-card"
          id="exp-btn-${esc(exp.id)}"
          aria-expanded="false"
          aria-controls="exp-details-${esc(exp.id)}"
        >
          <div class="exp-card__header">
            <div class="exp-card__info">
              <div class="exp-card__top">
                <div style="display:flex;align-items:center;gap:0.75rem">
                  ${exp.logo
                    ? `<div class="exp-card__logo"><img src="${esc(exp.logo)}" alt="${esc(exp.company)} logo" loading="lazy"></div>`
                    : ''
                  }
                  <div>
                    <div class="exp-card__title">${esc(exp.position)}</div>
                    <div class="exp-card__company">${label}</div>
                  </div>
                </div>
                <div style="display:flex;align-items:center;gap:0.75rem;flex-shrink:0">
                  <div style="text-align:right">
                    <span class="exp-card__period">${esc(exp.period)}</span>
                    ${exp.duration ? `<div class="exp-card__duration">${esc(exp.duration)}</div>` : ''}
                  </div>
                  <span class="exp-card__chevron">${svgIcon('chevron')}</span>
                </div>
              </div>
              <div
                class="exp-card__details"
                id="exp-details-${esc(exp.id)}"
                role="region"
              >
                <div class="exp-card__details-inner">
                  <ul class="exp-card__bullets">
                    ${(currentLang === 'fr' && exp.description_fr ? exp.description_fr : exp.description).map(d => `<li class="exp-card__bullet">${esc(d)}</li>`).join('')}
                  </ul>
                  <div class="exp-card__tech-label">${t('experience.tech')}</div>
                  <div class="tech-badges">
                    ${exp.technologies.map(t => `<span class="badge">${esc(t)}</span>`).join('')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>`;
  }).join('');

  // Attach toggle listeners
  experiences.forEach(exp => {
    const btn = document.getElementById(`exp-btn-${exp.id}`);
    const details = document.getElementById(`exp-details-${exp.id}`);
    if (!btn || !details) return;

    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      btn.classList.toggle('expanded', !expanded);
      details.classList.toggle('open', !expanded);
    });
  });
}

// ─── Education ────────────────────────────────────────────────────────────────

function renderEducation() {
  const container = document.getElementById('education-list');
  if (!container) return;

  container.innerHTML = education.map((edu, i) => {
    const deg   = (currentLang === 'fr' && edu.degree_fr) ? edu.degree_fr : edu.degree;
    const field = (currentLang === 'fr' && edu.field_fr)  ? edu.field_fr  : edu.field;
    return `
    <div class="edu-card reveal" style="transition-delay:${i * 0.1}s">
      <div class="edu-card__period">${esc(edu.period)}</div>
      <h3 class="edu-card__degree">${esc(deg)}</h3>
      <p class="edu-card__field">${esc(field)}</p>
      <p class="edu-card__school">${esc(edu.school)}</p>
    </div>`;
  }).join('');
}

// ─── Skills ───────────────────────────────────────────────────────────────────

function renderSkills() {
  const container = document.getElementById('skills-list');
  if (!container) return;

  container.innerHTML = skills.map((group, i) => {
    const cat = (currentLang === 'fr' && group.category_fr) ? group.category_fr : group.category;
    return `
    <div class="skill-card reveal" style="transition-delay:${i * 0.07}s">
      <h3 class="skill-card__category">${esc(cat)}</h3>
      <div class="skill-pills">
        ${group.items.map(item => `<span class="pill">${esc(item)}</span>`).join('')}
      </div>
    </div>`;
  }).join('');
}

// ─── Projects ─────────────────────────────────────────────────────────────────

function renderProjects() {
  const container = document.getElementById('projects-list');
  if (!container) return;

  container.innerHTML = projects.map((proj, i) => `
    <a
      href="${esc(proj.url)}"
      target="_blank"
      rel="noopener noreferrer"
      class="project-card reveal"
      style="transition-delay:${(i % 6) * 0.08}s"
    >
      <div class="project-card__top">
        <h3 class="project-card__name">${esc(proj.name)}</h3>
        <span class="project-card__ext">${svgIcon('external')}</span>
      </div>
      <p class="project-card__desc">${esc(proj.description)}</p>
      <div class="project-card__footer">
        <span class="project-card__lang">${esc(proj.language)}</span>
        <span class="project-card__date">${esc(proj.updated)}</span>
      </div>
    </a>`).join('');
}

// ─── Profile Image Fallback ───────────────────────────────────────────────────

function initProfileFallback() {
  const img = document.getElementById('profile-img');
  const fallback = document.getElementById('profile-fallback');
  if (!img || !fallback) return;

  img.addEventListener('error', () => {
    img.style.display = 'none';
    fallback.style.display = 'flex';
  });
}

// ─── Bootstrap ────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  renderExperiences();
  renderEducation();
  renderSkills();
  renderProjects();
  initNav();
  initScrollSpy();
  initScrollReveal();
  initProfileFallback();
});
