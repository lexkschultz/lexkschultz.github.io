// ─────────────────────────────────────────────────────────────────────────────
// config.js — Edit this file to personalize your academic homepage.
// No HTML/CSS knowledge required.
// ─────────────────────────────────────────────────────────────────────────────

const USER_CONFIG = {
  name:       "Lex Schultz",
  initials:   "LS",
  role:       "PhD Student",
  university: "Brown University",
  email:      "lex_schultz@brown.edu",
  bio:        "Exploring habitability through the physical, chemical, and biological processes on icy worlds",
  photo:      "assets/photo.jpg",   // optional: path to your photo, e.g. "assets/photo.jpg"

  //stats: [
    //{ value: "10+",  label: "Publications" },
    //{ value: "200+", label: "Citations" },
    //{ value: "5+",   label: "Projects" },
 // ],

  links: {
    scholar: "https://scholar.google.com/citations?user=LrCQ0-MAAAAJ&hl=en",
    github:  "https://github.com/lexkschultz",
    twitter: "",          // leave empty to hide
    cv:      "assets/Lex_CV.pdf",
  },

  publications: [
    {
      year:     2026,
      title:    "As above, not so below: Ion fractionation in planetary analog ices",
      authors:  "Jacob J Buffo, Mark G Fox-Powell, Andrii Murdza, Tara C Tomlinson, Alexa Schultz, Timothy Barton, Caroline Gurd, Angus McEwen, Natalie S Wolfenbarger, Chase J Chivers, Britney E Schmidt, Colin R Meyer",
      venue:    "Science Advances",
      links:    { pdf: "#", code: "#" },
      abstract: "Here, we present experimental results demonstrating that ion fractionation—the differential entrainment of ion species in forming ices—is likely a prevalent process on ocean worlds, suggesting that planetary ice shell compositions do not directly reflect their underlying ocean compositions.",
    },
    {
      year:     2024,
      title:    "A Geochemical Model to Constrain Core-Mantle Equilibration During Large-Scale Impact-Driven Earth Accretion",
      authors:  "Alexa Schultz",
      venue:    "Yale EPS Theses",
      links:    { pdf: "#" },
      abstract: "Here, I create a model for core accretion, using lead and tungsten as isotopic parameters to constrain degree of equilibration between the impactor core material and the fraction of the Earth’s mantle that is molten upon impact.",
    },
  ],

  projects: [
    {
      name: "Project Name",
      desc: "Brief description of your project and its impact.",
      tags: ["Python", "PyTorch"],
      url:  "#",
   },
  ],

  news: [
    { date: "2026.04", badge: "New",   text: "Received NSF GRF" },
    // { date: "2024.09", badge: "Award", text: "Received fellowship / award." },
  ],

  education: [
    { period: "2025–Present", degree: "Ph.D. in Earth, Environmental, and Planetary Sciences", institution: "Brown University" },
    { period: "2020–2024",    degree: "B.S. in Earth and Planetary Sciences",  institution: "Yale University" },
  ],

  // experience: [
   // { period: "Summer 2024", role: "Research Intern", institution: "Research Lab / Company" },
  // ],
};
