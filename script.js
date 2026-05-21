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

    // Basic Info & Photo
    document.querySelectorAll('[data-config]').forEach(el => {
        const key = el.dataset.config;
        if (key === 'role_university') el.textContent = `${USER_CONFIG.role}, ${USER_CONFIG.university}`;
        else if (key === 'bio') el.innerHTML = USER_CONFIG.bio;
        else if (USER_CONFIG[key]) el.textContent = USER_CONFIG[key];
    });

    const photoCont = document.getElementById('cfg-photo-container');
    if (photoCont && USER_CONFIG.photo) {
        photoCont.innerHTML = `<img src="${USER_CONFIG.photo}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;">`;
    }

    // Projects (With Full Descriptions & Collaborators)
    const projCont = document.getElementById('cfg-projects');
    if (projCont && USER_CONFIG.projects) {
        projCont.innerHTML = USER_CONFIG.projects.map(p => `
            <div class="project-entry" style="margin-bottom: 2.5rem;">
                <h3 style="margin-bottom: 0.5rem;">${p.name}</h3>
                <p style="margin-bottom: 0.8rem; line-height:1.6;">${p.desc}</p>
                ${p.collaborators ? `<p style="font-size:0.9rem; margin-bottom:0.5rem;"><strong style="color:var(--accent);">Collaborators:</strong> ${p.collaborators}</p>` : ''}
                <div class="tags">${p.tags.map(t => `<span style="font-size:0.7rem; border:1px solid var(--accent); padding:2px 6px; border-radius:10px; margin-right:5px; color:var(--accent);">${t}</span>`).join('')}</div>
            </div>`).join('');
    }

    // Education & Experience (Timeline Style)
    const renderTimeline = (id, items) => {
        const cont = document.getElementById(id);
        if (cont && items) {
            cont.innerHTML = `<div class="timeline">${items.map(i => `
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <span class="timeline-period">${i.period}</span>
                        <h3>${i.degree || i.role}</h3>
                        <p>${i.institution}</p>
                    </div>
                </div>`).join('')}</div>`;
        }
    };
    renderTimeline('cfg-education', USER_CONFIG.education);
    renderTimeline('cfg-experience', USER_CONFIG.experience);

    // Publications
    const pubList = document.getElementById('cfg-publications');
    if (pubList && USER_CONFIG.publications) {
        pubList.innerHTML = USER_CONFIG.publications.map(p => `
            <li class="bib-entry">
                <span class="bib-authors">${p.authors.replace(/Alexa Schultz/g, "<strong>Alexa Schultz</strong>").replace(/Lex Schultz/g, "<strong>Lex Schultz</strong>")}.</span>
                <span class="bib-title">"${p.title}."</span>
                <span class="bib-venue"><em>${p.venue}</em>, ${p.year}.</span>
            </li>`).join('');
    }
});