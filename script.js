// THEME LOGIC
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

document.addEventListener('DOMContentLoaded', () => {
    if (typeof USER_CONFIG === 'undefined') return;

    // Photo
    const photoContainer = document.getElementById('cfg-photo-container');
    if (photoContainer && USER_CONFIG.photo) {
        photoContainer.innerHTML = `<img src="${USER_CONFIG.photo}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;">`;
    }

    // Text Fields
    document.querySelectorAll('[data-config]').forEach(el => {
        const key = el.dataset.config;
        if (key === 'role_university') el.textContent = `${USER_CONFIG.role}, ${USER_CONFIG.university}`;
        else if (key === 'bio') el.innerHTML = USER_CONFIG.bio;
        else if (USER_CONFIG[key]) el.textContent = USER_CONFIG[key];
    });

    // Links
    const l = USER_CONFIG.links || {};
    document.getElementById('link-scholar').href = l.scholar || "#";
    document.getElementById('link-github').href = l.github || "#";
    document.getElementById('link-cv').href = l.cv || "#";

    // News
    const newsCont = document.getElementById('cfg-news-list');
    if (newsCont && USER_CONFIG.news) {
        newsCont.innerHTML = USER_CONFIG.news.map(n => `
            <li class="bib-entry" style="margin-bottom:1rem;">
                <span class="bib-authors" style="background:var(--accent); color:white; padding:2px 8px; border-radius:4px; margin-right:10px;">${n.badge}</span>
                <span class="bib-venue">${n.date}</span> — ${n.text}
            </li>`).join('');
    }

    // Education (The Timeline Style)
    const eduCont = document.getElementById('cfg-education');
    if (eduCont && USER_CONFIG.education) {
        eduCont.innerHTML = `<div class="timeline">${USER_CONFIG.education.map(e => `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <span class="timeline-period">${e.period}</span>
                    <h3>${e.degree}</h3>
                    <p>${e.institution}</p>
                </div>
            </div>`).join('')}</div>`;
    }

    // Publications (Bold Lex/Alexa)
    const pubList = document.getElementById('cfg-publications');
    if (pubList && USER_CONFIG.publications) {
        pubList.innerHTML = USER_CONFIG.publications.map(p => `
            <li class="bib-entry">
                <span class="bib-authors">${p.authors.replace("Alexa Schultz", "<strong>Alexa Schultz</strong>").replace("Lex Schultz", "<strong>Lex Schultz</strong>")}.</span>
                <span class="bib-title">"${p.title}."</span>
                <span class="bib-venue"><em>${p.venue}</em>, ${p.year}.</span>
            </li>`).join('');
    }
});