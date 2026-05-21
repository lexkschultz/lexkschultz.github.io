const USER_CONFIG = {
  name: "Lex Schultz",
  initials: "LS",
  role: "PhD Student",
  university: "Brown University",
  email: "lex_schultz@brown.edu",
  bio: "Exploring habitability through the physical, chemical, and biological processes on icy worlds",
  photo: "assets/photo.jpg",

  links: {
    scholar: "https://scholar.google.com/citations?user=LrCQ0-MAAAAJ&hl=en",
    github:  "https://github.com/lexkschultz",
    twitter: "",
    cv:      "assets/Lex_CV.pdf",
  },

  publications: [
    {
      year: 2026,
      title: "As above, not so below: Ion fractionation in planetary analog ices",
      authors: "Jacob J Buffo, Mark G Fox-Powell, Andrii Murdza, Tara C Tomlinson, Alexa Schultz, Timothy Barton, Caroline Gurd, Angus McEwen, Natalie S Wolfenbarger, Chase J Chivers, Britney E Schmidt, Colin R Meyer",
      venue: "Science Advances",
      links: { pdf: "assets/sciadv.ady6763.pdf" },
      abstract: "Here, we present experimental results demonstrating that ion fractionation—the differential entrainment of ion species in forming ices—is likely a prevalent process on ocean worlds, suggesting that planetary ice shell compositions do not directly reflect their underlying ocean compositions.",
    },
    {
      year: 2025,
      title: "Brine Evolution and Habitability in Ice Shells on Ocean Worlds: Insights from Experimental Freezing and Geochemical Modeling",
      authors: "Alexa Schultz, Andrii Murdza, Tara Tomlinson, Jacob Buffo",
      venue: "56th Lunar and Planetary Science Conference",
      links: { pdf: "assets/2578.pdf" },
      abstract: "We benchmark the simulated freezing of brines against novel experimentally derived ice sample solutions. We explore how the evolution of brine pockets within an ice shell, frozen from an underlying ocean, influences ice mineralogy and its ability to support life. Additionally, we investigate the water properties of ionic strength, porosity, and water activity, which are critical for habitability.",
    },
    {
      year: 2024,
      title: "A Geochemical Model to Constrain Core-Mantle Equilibration During Large-Scale Impact-Driven Earth Accretion",
      authors: "Alexa Schultz",
      venue: "Yale EPS Theses",
      links: { pdf: "assets/schultzyale.pdf" },
      abstract: "Here, I create a model for core accretion, using lead and tungsten as isotopic parameters to constrain degree of equilibration between the impactor core material and the fraction of the Earth’s mantle that is molten upon impact.",
    },
    {
      year: 2024,
      title: "Topographic Characterization and Evolutionary Modeling of Large Volcano-Tectonic Structures on Venus",
      authors: "Alexa Schultz, Patrick McGovern",
      venue: "55th Lunar and Planetary Science Conference",
      links: { pdf: "assets/2204.pdf" },
      abstract: "We take a quantitative approach to characterizing the topography of large volcano-tectonic structures on Venus, applying harmonic analysis to objectively evaluate affinities and differences between Venus volcanic structures of various classes and to evaluate the utility of existing classification schemes.",
    },
  ],

  projects: [
    {
      name: "Stress evolution in planetary ice shells",
      desc: "This project integrates viscoelastic stress modeling with controlled laboratory freezing experiments. Using a freezing sphere as an analog for ocean worlds, I model how volumetric expansion and thermal contraction drive tensile failure within a solidifying shell. By systematically varying freezing rates and salinity, I identify the thresholds for fracture initiation, linking continuum-scale stress evolution to observable tectonic patterns on moons like Europa and Enceladus. I am currently working on incorporating my stress and fracture model into an existing magma chamber codebase",
      tags: ["MATLAB", "computational", "experimental","icy moons","geophysics","numerical modeling"],
      collaborators: "Christian Huber, Sam Birch",
    },
    {
      name: "Brine Evolution and Habitability in Ice Shells on Ocean Worlds",
      desc: "The purpose of this research was to challenge the assumption that the surface chemistry of moons like Europa directly mirrors their subsurface oceans. I utilized PHREEQC and the FREZCHEM database to model how different ionic species are preferentially excluded or entrained during the freezing of planetary analog ices. This work contributed to experimental findings published in Science Advances, demonstrating that ion fractionation can cause depletions or amplifications of up to 77% relative to the parent fluid. These results are critical for interpreting data from the Europa Clipper mission, as they provide a framework for 'back-calculating' true ocean compositions from ice shell measurements.",
      tags: ["MATLAB", "computational", "experimental","icy moons","geochemical modeling","astrobiology"],
      collaborators: "Jacob Buffo, Andrii Murza, Tara Tomlinson, Mark Fox-Powell",
    },
    {
      name: "Geochemical Model of Core-Mantle Equilibration",
      desc: "This project aimed to resolve the 'core formation paradox' by determining the extent of chemical equilibration between sinking metallic diapirs and the surrounding silicate magma ocean in the early Earth. I developed a numerical model in MATLAB that integrated partition coefficients for siderophile elements as a function of pressure, temperature, and oxygen fugacity. The simulation analyzed how the degree of equilibration—impacted by the size of the impactor and the depth of the magma ocean—governs the final distribution of trace elements in the mantle, providing a more accurate timeline of Earth’s early differentiation and metal-silicate partitioning.",
      tags: ["MATLAB", "computational", "geochemistry", "geophysics","geochemical modeling","planetary formation", "Earth", "terrestrial planets"],
      collaborators: "Jun Korenaga",
    },
    {
      name: "Topographic Characterization of Venusian Coronae",
      desc: "Challenging the prevailing theory that coronae represent distinct evolutionary stages of mantle plumes or diapirs, this project investigated whether these morphologies could instead be reproduced through common structural loading processes. I applied harmonic analysis in axisymmetry (the Hankel transform) to objectively characterize the topography of 49 large-scale features, seeking to determine if 'ovular' topographic signatures are unique to specific formation mechanisms. By developing numerical models in MATLAB to simulate evolving volcanic edifice topography, I demonstrated that diverse morphologies can emerge from varying thermomechanical conditions, suggesting that current classification schemes may not reflect true evolutionary paths.",
      tags: ["MATLAB", "PyGMT", "planetary geology", "Venus", "volcanology", "numerical modeling", "geodynamics", "terrestrial planets"],
      collaborators: "Patrick McGovern",
    },
    {
      name: "Mapping Moho Impedance in the Cascadia Subduction Zone",
      desc: "The Cascadia Subduction Zone is of great interest due to the potential for a devastating future megathrust earthquake. The objective of this study was to use seismic imaging to detect the presence of hydrated minerals (serpentine) in the mantle wedge, which significantly influences the friction and rupture of subduction zones. I utilized the Funclab software package to process teleseismic earthquake data, generating P-to-S receiver functions that revealed sharp velocity discontinuities. By identifying areas where the Moho exhibited a negative velocity contrast—an 'inverted Moho'—I mapped the spatial extent of mantle hydration, offering new insights into the fluid flux and megathrust earthquake hazards in the Pacific Northwest.",
      tags: ["MATLAB", "computational", "Earth", "seismology","subduction zones","Cascadia", "terrestrial planets"],
      collaborators: "Maureen Long, Yantao Luo",
    },
    {
      name: "Imaging the Crust and Upper Mantle via Rayleigh Waves",
      desc: "Using the Helmholtz tomography method, this project produced Rayleigh wave phase velocity maps of the Cascadia Subduction Zone across periods from 20s to 100s to resolve the region's complex lithospheric structure. I measured phase times from 294 teleseismic earthquakes recorded at 149 EarthScope stations, followed by a parameter search to constrain the depth of the Moho and shear-wave velocities. Our results identified high-velocity signatures associated with the cold subducting Juan de Fuca plate and low-velocity anomalies beneath the Cascades and high-elevation regions like the Northern Basin. These higher-resolution maps provide a more detailed framework for 3-D shear-wave models and regional seismic hazard assessments.",
      tags: ["MATLAB", "computational", "Earth", "seismology", "GMT", "subduction zones", "Cascadia", "terrestrial planets"],
      collaborators: "Colleen Dalton",
    },
  ],

  news: [
    { date: "2026.04", badge: "New", text: "Received NSF Graduate Research Fellowship" },
  ],

  education: [
    { period: "2025–Present", degree: "Ph.D. in Earth, Environmental, and Planetary Sciences", institution: "Brown University" },
    { period: "2020–2024", degree: "B.S. in Earth and Planetary Sciences", institution: "Yale University" },
  ],

  experience: [
    { period: "Sept 2025 – present", role: "Graduate Student Researcher", institution: "Dept. of Earth, Environmental and Planetary Sciences, Brown University" },
    { period: "June 2024 – Sept 2024", role: "Research Intern", institution: "Thayer School of Engineering, Dartmouth College" },
    { period: "Sept 2023 – May 2024", role: "Senior Thesis", institution: "Dept. of Earth and Planetary Sciences, Yale University" },
    { period: "June 2023 – Aug 2023", role: "LPI/JSC Summer Intern", institution: "Lunar and Planetary Institute and NASA Johnson Space Center" },
    { period: "June 2022 – Aug 2022", role: "Leadership Alliance NSF-REU Intern", institution: "Dept. of Earth, Environmental and Planetary Sciences, Brown University" },
    { period: "Sept 2021 – May 2024", role: "Undergraduate Research Assistant", institution: "Dept. of Earth and Planetary Sciences, Yale University" }
  ],
};