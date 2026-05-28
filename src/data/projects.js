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
      es: 'Plataforma de gestión para ecosistemas de terminales portuarios. Diseño e implementación de interfaces complejas con Vue 3 y Vuetify, centradas en usabilidad, rendimiento y arquitectura de componentes reutilizables.',
      en: 'Management platform for port terminal ecosystems. Design and implementation of complex interfaces with Vue 3 and Vuetify, focused on usability, performance and reusable component architecture.',
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
      es: 'Sistema de diseño de interfaces para aplicaciones de gestión empresarial. Incluye componentes de tablas de datos, formularios, diálogos y vistas de autenticación con soporte completo para modo claro y oscuro.',
      en: 'Interface design system for enterprise management applications. Includes data table components, forms, dialogs and authentication views with full light and dark mode support.',
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
      es: 'Dashboard de gestión interna con visualización de datos en tiempo real, gráficas con Chart.js, gestión de tareas y tabla de usuarios. Conectado a SQL Server y desarrollado con Vue 2.',
      en: 'Internal management dashboard with real-time data visualization, Chart.js charts, task management and user table. Connected to SQL Server and built with Vue 2.',
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
      es: 'Web de pedidos de ensaladas online. Arquitectura MVC con Java y Tomcat, base de datos MySQL y frontend con HTML, CSS y JavaScript.',
      en: 'Online salad ordering web application. MVC architecture with Java and Tomcat, MySQL database and frontend with HTML, CSS and JavaScript.',
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
      es: 'Simulación física de sistemas de partículas con detección de colisiones entre partículas y planos. Optimización mediante HashTable espacial para búsqueda eficiente de vecinos.',
      en: 'Physical simulation of particle systems with collision detection between particles and planes. Optimised with spatial HashTable for efficient neighbour search.',
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
      es: 'Artículo técnico con las 10 mejores prácticas CSS para proyectos OutSystems, publicado en la plataforma tecnológica de NTT DATA.',
      en: 'Technical article with the 10 CSS best practices for OutSystems projects, published on NTT DATA\'s technology platform.',
    },
    link: 'https://ifgeekthen.nttdata.com/s/post/decalogo-css-de-buenas-practicas-en-outsystems-MC2WVFZLRR2NDRDODGNCE433XPHI?language=es',
    visible: true,
  },
]
