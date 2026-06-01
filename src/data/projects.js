/*
 * ============================================================
 *  src/data/projects.js — Proyectos y publicaciones
 * ============================================================
 *
 *  CÓMO USAR:
 *  - Ocultar un proyecto:   visible: false
 *  - Cambiar imagen:        thumbnail: '/assets/projects/nueva-imagen.jpg'
 *  - Cambiar vídeo:         video: '/assets/projects/nuevo-video.mp4'
 *  - Añadir enlace:         links: { figma: '...', live: '...', github: '...' }
 *  - Editar textos:         campos description/role/type (objeto { es, en })
 *  - Cambiar tecnologías:   technologies: ['Vue 3', 'Vuetify', ...]
 *  - Orden:                 los featured aparecen primero
 * ============================================================
 */

export const projects = [
  {
    id: 'prodevelop',
    title: 'Posidonia Terminal 4.0 — Design System',
    type: { es: 'Diseño UX/UI', en: 'UX/UI Design' },
    role: { es: 'UI/UX Designer', en: 'UI/UX Designer' },
    company: 'Prodevelop',
    year: '2024–current',
    description: {
      es: 'Junto a una compañera de diseño, construimos el sistema de interfaces para las aplicaciones de Prodevelop. Fui el puente entre el equipo de diseño y los programadores: cogía los diseños de Figma y los trasladaba a componentes Vue, asegurando que lo que se implementaba respetaba lo que se había diseñado.',
      en: 'Together with a designer colleague, we built the interface system for Prodevelop\'s apps. I bridged the gap between the design team and the developers: taking the Figma designs and translating them into Vue components, making sure what got implemented matched what had been designed.',
    },
    technologies: ['Figma', 'UX/UI', 'Design Systems', 'Prototyping'],
    thumbnail: '/assets/projects/pt4.0.png',
    // Dos vídeos — para cambiar: edita src o title
    videos: [
      { src: '/assets/projects/prodevelop-overview.mp4',   title: 'Overview' },
      { src: '/assets/projects/prodevelop-reefer.mp4',     title: 'Reefer + Yard Inventory' },
    ],
    links: {
      figma: 'https://www.figma.com/design/k4syBB9QmwPMwDybPPj9bS/T.-Terminal-4.0?node-id=70-2089&p=f&t=gik2nKglCPHy3nHY-0',
    },
    featured: false,
    visible: true,
  },
  {
    id: 'kbe',
    title: 'KB Ecosystem',
    type: { es: 'Proyecto profesional', en: 'Professional project' },
    role: { es: 'Frontend Developer', en: 'Frontend Developer' },
    company: 'Preference S.L.',
    year: '2023–2024',
    description: {
      es: 'Herramienta interna desarrollada en Preference para visualizar el estado y los logs de pipelines de despliegue ejecutadas en Kubernetes. Permitía hacer seguimiento en tiempo real de los despliegues de proyectos web grandes, con una interfaz construida con Vue 3 y Vuetify.',
      en: 'Internal tool developed at Preference to visualise the state and logs of deployment pipelines running on Kubernetes. It allowed real-time tracking of deployments for large web projects, with an interface built in Vue 3 and Vuetify.',
    },
    technologies: ['Vue 3', 'Vuetify', 'Kubernetes', 'Figma'],
    thumbnail: '/assets/projects/kbe-thumb.png',
    // Vídeo de 71 MB — para producción comprímelo o súbelo a YouTube/Vimeo
    // y cambia esta ruta por el embed correspondiente
    video: '/assets/projects/kbe.mp4',
    links: {
      figma: 'https://www.figma.com/design/6mLPJf4R8LIjmBa67Ejq4x/KB-Ecosystem?node-id=0-1&t=gMXpOOqcDz12xAmX-1',
    },
    featured: false,
    visible: true,
  },
  {
    id: 'dashboard',
    title: 'Preference Dashboard',
    type: { es: 'Proyecto profesional', en: 'Professional project' },
    role: { es: 'Frontend Developer', en: 'Frontend Developer' },
    company: 'Preference S.L.',
    year: '2023–2024',
    description: {
      es: 'Panel de monitorización en tiempo real para el manager de cloud de Preference. Supervisa ~100 instancias de PrefWeb desplegadas en clientes por toda Europa, con gráficas de disponibilidad y alertas de incidencias. Fue también mi primer proyecto propio con Vue para coger soltura con el stack.',
      en: "Real-time monitoring dashboard for Preference's cloud manager. Tracks ~100 PrefWeb instances deployed across European clients, with availability charts and incident alerts. Also my first self-driven Vue project — a great way to get comfortable with the stack.",
    },
    technologies: ['Vue 3', 'Vite', 'Chart.js', 'Vue Router', 'Sass'],
    thumbnail: '/assets/projects/dashboard-bg.jpg',
    links: {
      live: 'https://prefweb-dashboard.vercel.app/#/dashboard',
    },
    featured: false,
    visible: true,
  },
  {
    id: 'saladelia',
    title: 'Saladelia',
    type: { es: 'Proyecto académico', en: 'Academic project' },
    role: { es: 'Full-Stack Developer', en: 'Full-Stack Developer' },
    company: null,
    year: '2021',
    description: {
      es: 'Proyecto universitario de una tienda de ensaladas online. Hice todo el stack: backend con Java y Tomcat siguiendo MVC, base de datos MySQL y el frontend a mano con HTML, CSS y JavaScript.',
      en: 'University project — an online salad shop. I built the full stack: backend with Java and Tomcat following MVC, MySQL database and the frontend by hand with HTML, CSS and JavaScript.',
    },
    technologies: ['Java', 'Tomcat', 'MySQL', 'PHP', 'HTML', 'CSS'],
    thumbnail: '/assets/projects/saladelia-home.jpg',
    links: {},
    featured: false,
    visible: true,
  },
  {
    id: 'particles',
    title: 'Particle Simulation',
    type: { es: 'Proyecto académico', en: 'Academic project' },
    role: { es: 'Developer', en: 'Developer' },
    company: null,
    year: '2020–2021',
    description: {
      es: 'Simulación de partículas con física real: colisiones entre partículas y contra planos. Para que fuera rápido con muchas partículas usé una HashTable espacial que evita comprobar colisiones innecesarias.',
      en: 'Particle simulation with real physics: collisions between particles and against planes. To keep it fast with many particles I used a spatial HashTable to avoid checking unnecessary collisions.',
    },
    technologies: ['Processing', 'Java', 'Physics', 'Algorithms'],
    thumbnail: '/assets/projects/particles.png',
    links: {},
    featured: false,
    visible: true,
  },
]

export const publications = [
  {
    id: 'nttdata-css',
    title: {
      es: 'Decálogo CSS: buenas prácticas en OutSystems',
      en: 'CSS Best Practices in OutSystems',
    },
    publisher: 'NTT DATA — If Geek Then',
    year: '2022',
    description: {
      es: 'Lo escribí mientras estaba en NTT DATA, con las 10 cosas que aprendí sobre CSS en OutSystems. Lo publicaron en su plataforma técnica If Geek Then.',
      en: 'Wrote this while at NTT DATA — the 10 things I learned about CSS in OutSystems. Published on their tech platform If Geek Then.',
    },
    link: 'https://ifgeekthen.nttdata.com/s/post/decalogo-css-de-buenas-practicas-en-outsystems-MC2WVFZLRR2NDRDODGNCE433XPHI?language=es',
    visible: true,
  },
]
