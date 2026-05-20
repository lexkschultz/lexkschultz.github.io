// 1. THEME & NAVIGATION LOGIC
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

// 2. DATA POPULATION LOGIC (The Brain)
document.addEventListener('DOMContentLoaded', () => {
    if (typeof USER_CONFIG === 'undefined') return;
    
    // Fill Name, Bio, University
    document.querySelectorAll('[data-config]').forEach(el => {
        const key = el.dataset.config;
        if (key === 'role_university') {
            el.textContent = `${USER_CONFIG.role}, ${USER_CONFIG.university}`;
        } else if (key === 'bio') {
            el.innerHTML = USER_CONFIG.bio; // Allows <em> tags for "icy worlds"
        } else if (USER_CONFIG[key] !== undefined) {
            el.textContent = USER_CONFIG[key];
        }
    });

    // Fill Social Links (Scholar, GitHub, CV)
    const links = USER_CONFIG.links || {};
    const sLink = document.getElementById('link-scholar');
    const gLink = document.getElementById('link-github');
    const cLink = document.getElementById('link-cv');
    if (sLink && links.scholar) sLink.href = links.scholar;
    if (gLink && links.github) gLink.href = links.github;
    if (cLink && links.cv) cLink.href = links.cv;

    // Fill Publications
    const bibList = document.getElementById('cfg-publications');
    if (bibList && USER_CONFIG.publications) {
        bibList.innerHTML = USER_CONFIG.publications.map(p => `
            <li class="bib-entry">
                <span class="bib-authors">${p.authors.replace(USER_CONFIG.name, `<strong>${USER_CONFIG.name}</strong>`)}.</span>
                <span class="bib-title">"${p.title}."</span>
                <span class="bib-venue"><em>${p.venue}</em>, ${p.year}.</span>
            </li>`).join('');
    }

    // Fill Projects
    const projCont = document.getElementById('cfg-projects');
    if (projCont && USER_CONFIG.projects) {
        projCont.innerHTML = USER_CONFIG.projects.map(p => `
            <div class="project-entry">
                <h3>${p.name}</h3>
                <p>${p.desc}</p>
            </div>`).join('');
    }
});
