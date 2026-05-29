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
    id: 'kbe',
    title: 'KB Ecosystem',
    type: { es: 'Proyecto profesional', en: 'Professional project' },
    role: { es: 'Frontend Developer', en: 'Frontend Developer' },
    company: 'Preference S.L.',
    year: '2023–2024',
    description: {
      es: 'Plataforma interna para gestionar terminales portuarios, construida desde cero. Me encargué del front con Vue 3 y Vuetify, pensando mucho en cómo organizar los componentes para que el proyecto no se comiera a sí mismo a medida que crecía.',
      en: 'Internal platform for port terminal management, built from scratch. I handled the front-end with Vue 3 and Vuetify, spending a lot of time thinking about how to structure components so the project could scale without becoming a mess.',
    },
    technologies: ['Vue 3', 'Vuetify', 'Figma', 'JavaScript'],
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
    id: 'prodevelop',
    title: 'Prodevelop — Design System',
    type: { es: 'Diseño UX/UI', en: 'UX/UI Design' },
    role: { es: 'UI/UX Designer', en: 'UI/UX Designer' },
    company: 'Prodevelop',
    year: '2023–2024',
    description: {
      es: 'Diseñé el sistema de interfaces en Figma para aplicaciones de gestión interna: tablas, formularios, diálogos, login, modo claro y oscuro desde el principio. El reto era que todo tuviera coherencia visual y que los developers pudieran implementarlo sin ambigüedad.',
      en: 'Designed the interface system in Figma for internal management apps: tables, forms, dialogs, login, light and dark mode from day one. The challenge was making everything visually coherent and easy enough for developers to implement without second-guessing anything.',
    },
    technologies: ['Figma', 'UX/UI', 'Design Systems', 'Prototyping'],
    // Para cambiar la imagen de portada: thumbnail: '/assets/projects/nueva.png'
    thumbnail: '/assets/projects/prodevelop-login.png',
    // Para cambiar imágenes del modal: edita este array
    gallery: [
      '/assets/projects/prodevelop-login.png',
      '/assets/projects/prodevelop-table-light.png',
      '/assets/projects/prodevelop-table-dark.png',
      '/assets/projects/prodevelop-dialog.png',
    ],
    links: {
      figma: 'https://www.figma.com/design/xk4tlhCbqWXUKgCCa6a3J7/Prodevelop?node-id=0-1&t=kVzBzozE6G8nIJN3-1',
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
      es: 'Un dashboard interno para el equipo de Preference: gráficas en tiempo real con Chart.js, gestión de tareas y una tabla de usuarios. Conectado a SQL Server y montado con Vue 2.',
      en: 'An internal dashboard for the Preference team: real-time charts with Chart.js, task management and a user table. Connected to SQL Server and built with Vue 2.',
    },
    technologies: ['Vue 2', 'Chart.js', 'SQL Server', 'JavaScript'],
    thumbnail: '/assets/projects/dashboard-bg.jpg',
    links: {},
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
