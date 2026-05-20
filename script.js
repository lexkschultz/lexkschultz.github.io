// 1. ORIGINAL THEME TOGGLE (With memory)
const toggle = document.getElementById('themeToggle');
const html = document.documentElement;
const saved = localStorage.getItem('ink-theme') || 'light';
html.setAttribute('data-theme', saved);

if (toggle) {
    toggle.addEventListener('click', () => {
        const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('ink-theme', next);
    });
}

// 2. SCROLL SPY (Side-menu highlighting)
const sections = document.querySelectorAll('section[id], header[id]');
const tocLinks = document.querySelectorAll('.toc-link');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            tocLinks.forEach(l => l.classList.remove('active'));
            const active = document.querySelector(`.toc-link[data-section="${entry.target.id}"]`);
            if (active) active.classList.add('active');
        }
    });
}, { rootMargin: '-20% 0px -60% 0px' });
sections.forEach(s => observer.observe(s));

// 3. DATA POPULATION (Your Brown University info)
document.addEventListener('DOMContentLoaded', () => {
    if (typeof USER_CONFIG === 'undefined') return;

    // Fill Basic Text Fields
    document.querySelectorAll('[data-config]').forEach(el => {
        const key = el.dataset.config;
        if (key === 'role_university') {
            el.textContent = `${USER_CONFIG.role}, ${USER_CONFIG.university}`;
        } else if (key === 'bio') {
            el.innerHTML = USER_CONFIG.bio; 
        } else if (USER_CONFIG[key]) {
            el.textContent = USER_CONFIG[key];
        }
    });

// --- PHOTO LOGIC ---
    if (USER_CONFIG.photo) {
        const photoContainer = document.getElementById('cfg-photo-container');
        if (photoContainer) {
            photoContainer.innerHTML = `<img src="${USER_CONFIG.photo}" alt="${USER_CONFIG.name}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;">`;
        }
    }

    // Fix Social Links
    const links = USER_CONFIG.links || {};
    const sLink = document.getElementById('link-scholar');
    const gLink = document.getElementById('link-github');
    const cLink = document.getElementById('link-cv');
    if (sLink && links.scholar) sLink.href = links.scholar;
    if (gLink && links.github) gLink.href = links.github;
    if (cLink && links.cv) cLink.href = links.cv;

    // Fill Publications (Bolding your name)
    const pubList = document.getElementById('cfg-publications');
    if (pubList && USER_CONFIG.publications) {
        pubList.innerHTML = USER_CONFIG.publications.map(p => `
            <li class="bib-entry">
                <span class="bib-authors">${p.authors.replace("Alexa Schultz", "<strong>Alexa Schultz</strong>").replace("Lex Schultz", "<strong>Lex Schultz</strong>")}.</span>
                <span class="bib-title">"${p.title}."</span>
                <span class="bib-venue"><em>${p.venue}</em>, ${p.year}.</span>
            </li>`).join('');
    }

    // Fill Education Timeline
    const expCont = document.getElementById('cfg-experience');
    if (expCont && USER_CONFIG.education) {
        expCont.innerHTML = `<div class="timeline">${USER_CONFIG.education.map(e => `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <span class="timeline-period">${e.period}</span>
                    <h3>${e.degree}</h3>
                    <p>${e.institution}</p>
                </div>
            </div>`).join('')}</div>`;
    }
});