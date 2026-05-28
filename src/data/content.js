/* All editable content + ES/EN translations — edit here to update the portfolio */

export const I18N = {
  es: {
    'nav.about': 'Sobre mí',
    'nav.skills': 'Skills',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'nav.cv': 'Descargar CV',

    'hero.status': 'Disponible para nuevos proyectos',
    'hero.role1': 'Front-End Engineer',
    'hero.role2': 'UI / UX Designer',
    'hero.lead': 'Diseño y construyo interfaces cuidadas con Vue 3 — donde el detalle visual, la accesibilidad y la experiencia de usuario se encuentran.',
    'hero.cta.work': 'Ver experiencia',
    'hero.cta.contact': 'Hablemos',
    'hero.m1.lbl': 'Años en frontend',
    'hero.m2.lbl': 'Stack principal',
    'hero.m3.lbl': 'Idiomas (C1)',
    'hero.chip.ux': 'UX / UI',

    'about.eyebrow': 'Sobre mí',
    'about.title': 'Convergencia entre comunicación, diseño y tecnología.',
    'about.p1': 'Soy <strong>Pablo Segarra Husé</strong>, desarrollador front-end especializado en <strong>Vue 3, Vuetify y diseño UX/UI</strong>. Vengo de la comunicación audiovisual y la ingeniería multimedia, una combinación que me da una sensibilidad visual poco común entre developers.',
    'about.p2': 'Disfruto creando interfaces limpias, accesibles y consistentes: sistemas de componentes, estandarización de temas y microinteracciones que hacen que un producto se sienta cuidado. Busco aprendizaje continuo y la convergencia entre mis dos pasiones, el diseño y el código.',
    'about.tagsTitle': 'Lo que me define',
    'about.softTitle': 'Soft skills',

    'skills.eyebrow': 'Tech stack',
    'skills.title': 'Herramientas con las que trabajo.',
    'skills.lead': 'De Vue y Vuetify al ecosistema de diseño de Adobe y Figma — un stack que cubre todo el ciclo de producto, del wireframe al código en producción.',
    'skills.g1': 'Frontend & Frameworks',
    'skills.g2': 'Diseño & Creatividad',
    'skills.g3': 'Herramientas & Flujo',

    'exp.eyebrow': 'Trayectoria',
    'exp.title': 'Experiencia profesional.',
    'exp.lead': 'De prácticas en desarrollo front-end a liderar interfaces complejas para sistemas de terminales.',

    'proj.eyebrow': 'Trabajo',
    'proj.title': 'Proyectos destacados.',
    'proj.lead': 'Una selección de productos y clientes en los que he trabajado. Próximamente añadiré vídeos y casos de estudio en detalle.',

    'cv.title': '¿Quieres ver mi recorrido completo?',
    'cv.text': 'Descarga mi CV en PDF o ábrelo en el navegador. Incluye formación, certificaciones e idiomas en detalle.',
    'cv.download': 'Descargar CV (PDF)',
    'cv.view': 'Ver en el navegador',

    'contact.eyebrow': 'Contacto',
    'contact.title': 'Construyamos algo bonito juntos.',
    'contact.lead': '¿Tienes un proyecto, una oferta o simplemente quieres saludar? Estoy a un mensaje de distancia.',
    'contact.email': 'Email',
    'contact.phone': 'Teléfono',
    'contact.location': 'Ubicación',
    'contact.locationVal': 'Valencia, España',

    'footer.rights': 'Diseñado y desarrollado por Pablo Segarra.',
    'soon': 'Vídeo próximamente',
  },
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.cv': 'Download CV',

    'hero.status': 'Available for new projects',
    'hero.role1': 'Front-End Engineer',
    'hero.role2': 'UI / UX Designer',
    'hero.lead': 'I design and build refined interfaces with Vue 3 — where visual detail, accessibility and user experience meet.',
    'hero.cta.work': 'View experience',
    'hero.cta.contact': "Let's talk",
    'hero.m1.lbl': 'Years in frontend',
    'hero.m2.lbl': 'Core stack',
    'hero.m3.lbl': 'Languages (C1)',
    'hero.chip.ux': 'UX / UI',

    'about.eyebrow': 'About me',
    'about.title': 'Where communication, design and technology converge.',
    'about.p1': "I'm <strong>Pablo Segarra Husé</strong>, a front-end developer specialised in <strong>Vue 3, Vuetify and UX/UI design</strong>. My background in audiovisual communication and multimedia engineering gives me a visual sensibility that's rare among developers.",
    'about.p2': 'I love crafting clean, accessible and consistent interfaces: component systems, theme standardisation and the microinteractions that make a product feel cared for. I seek continuous learning and the convergence of my two passions — design and code.',
    'about.tagsTitle': 'What defines me',
    'about.softTitle': 'Soft skills',

    'skills.eyebrow': 'Tech stack',
    'skills.title': 'Tools I work with.',
    'skills.lead': "From Vue and Vuetify to the Adobe and Figma design ecosystem — a stack that covers the whole product cycle, from wireframe to production code.",
    'skills.g1': 'Frontend & Frameworks',
    'skills.g2': 'Design & Creative',
    'skills.g3': 'Tools & Workflow',

    'exp.eyebrow': 'Career',
    'exp.title': 'Professional experience.',
    'exp.lead': 'From front-end development internships to leading complex interfaces for terminal systems.',

    'proj.eyebrow': 'Work',
    'proj.title': 'Featured projects.',
    'proj.lead': "A selection of products and clients I've worked on. Videos and detailed case studies coming soon.",

    'cv.title': 'Want to see the full journey?',
    'cv.text': 'Download my CV as a PDF or open it in the browser. Includes education, certifications and languages in detail.',
    'cv.download': 'Download CV (PDF)',
    'cv.view': 'Open in browser',

    'contact.eyebrow': 'Contact',
    'contact.title': "Let's build something beautiful together.",
    'contact.lead': "Got a project, an offer, or just want to say hi? I'm one message away.",
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.locationVal': 'Valencia, Spain',

    'footer.rights': 'Designed & developed by Pablo Segarra.',
    'soon': 'Video coming soon',
  },
}

export const HERO_STATS = {
  m1: '5+',
  m2: 'Vue · Vuetify',
  m3: '3',
}

export const TECH_GROUPS = [
  {
    key: 'skills.g1',
    items: [
      { name: 'Vue 3', slug: 'vuedotjs' },
      { name: 'Vuetify', slug: 'vuetify' },
      { name: 'JavaScript', slug: 'javascript' },
      { name: 'HTML5', slug: 'html5' },
      { name: 'CSS3', slug: 'css' },
      { name: 'Tailwind', slug: 'tailwindcss' },
      { name: 'Bootstrap', slug: 'bootstrap' },
      { name: 'Java', slug: 'java', icon: '/assets/icons/java.svg' },
    ],
  },
  {
    key: 'skills.g2',
    items: [
      { name: 'Figma', slug: 'figma' },
      { name: 'Sketch', slug: 'sketch' },
      { name: 'Photoshop', slug: 'photoshop', icon: '/assets/icons/photoshop.svg' },
      { name: 'Illustrator', slug: 'illustrator', icon: '/assets/icons/illustrator.svg' },
      { name: 'InDesign', slug: 'indesign', icon: '/assets/icons/indesign.svg' },
      { name: 'Blender', slug: 'blender' },
    ],
  },
  {
    key: 'skills.g3',
    items: [
      { name: 'Git', slug: 'git' },
      { name: 'GitLab', slug: 'gitlab' },
      { name: 'Docker', slug: 'docker' },
      { name: 'Jira', slug: 'jira' },
      { name: 'OutSystems', slug: 'outsystems' },
      { name: '.NET', slug: 'dotnet' },
    ],
  },
]

export const EXPERIENCE = [
  {
    role: { es: 'Frontend Engineer', en: 'Frontend Engineer' },
    company: 'Prodevelop',
    logo: '/assets/logos/prodevelop.png',
    date: { es: 'Jun 2024 — Actualidad', en: 'Jun 2024 — Present' },
    desc: {
      es: 'Desarrollo de productos desde cero en el departamento Terminal Solutions: diseño e implementación de interfaces complejas en Vue 3 para sistemas de gestión de terminales portuarios, construcción de la arquitectura de componentes desde la base y definición de los estándares de código del proyecto. Trabajo habitual con Java y Spring Boot en el back-end, e integración de herramientas de IA como GitHub Copilot para acelerar el ciclo de desarrollo.',
      en: 'End-to-end product development within the Terminal Solutions department: designing and implementing complex Vue 3 interfaces for port terminal management systems, building the component architecture from the ground up and defining the project\'s code standards. Regular work with Java and Spring Boot on the back-end, and integration of AI tools such as GitHub Copilot to speed up the development cycle.',
    },
    stack: ['Vue 3', 'Java', 'Spring Boot', 'UI Architecture', 'AI Copilot'],
  },
  {
    role: { es: 'Cloud Developer', en: 'Cloud Developer' },
    company: 'Preference S.L.',
    logo: '/assets/logos/preference.svg',
    date: { es: 'Sep 2023 — May 2024', en: 'Sep 2023 — May 2024' },
    desc: {
      es: 'Desarrollo de interfaces modernas en Vue 3 con TailwindCSS y Vuetify sobre proyectos .NET con Razor. Trabajo intensivo con Figma para validar diseños con el equipo antes de trasladarlos a código, garantizando coherencia entre el diseño y la implementación final. Creación de componentes reutilizables, depuración, testing y estandarización de estilos.',
      en: 'Built modern interfaces in Vue 3 with TailwindCSS and Vuetify on top of .NET Razor projects. Heavy use of Figma to validate designs with the team before translating them into code, ensuring consistency between design and final implementation. Developed reusable components, debugging, testing and style standardisation.',
    },
    stack: ['Vue 3', 'Vuetify', 'TailwindCSS', 'Figma', '.NET / Razor'],
  },
  {
    role: { es: 'Junior Engineer', en: 'Junior Engineer' },
    company: 'NTT DATA',
    logo: '/assets/logos/nttdata.jpg',
    date: { es: 'Jul 2021 — Ene 2023', en: 'Jul 2021 — Jan 2023' },
    desc: {
      es: 'Lideré el desarrollo front-end en proyectos para clientes como Mercadona, Banc Sabadell, Resolution Life y Quirónsalud. Construí librerías de componentes, estandaricé sistemas de temas y garanticé el cumplimiento de estándares de accesibilidad. También di formación a compañeros junior, di soporte en tareas de back-end y participé activamente en ceremonias SCRUM.',
      en: 'Led front-end development for clients including Mercadona, Banc Sabadell, Resolution Life and Quirónsalud. Built component libraries, standardised theming systems and ensured accessibility compliance. Also trained junior teammates, provided back-end support and actively participated in SCRUM ceremonies.',
    },
    stack: ['Vue 3', 'TailwindCSS', 'Bootstrap', 'SCRUM · Jira', 'Accessibility'],
  },
  {
    role: { es: 'Front-End Student', en: 'Front-End Student' },
    company: 'NTT DATA',
    logo: '/assets/logos/nttdata.jpg',
    date: { es: 'Sep 2020 — Jun 2021', en: 'Sep 2020 — Jun 2021' },
    desc: {
      es: 'Prácticas extracurriculares como desarrollador front-end en la plataforma OutSystems. Maquetación HTML, CSS y JavaScript, testing de responsive en distintos dispositivos, gestión de temas visuales y elaboración de informes de front-end para el equipo.',
      en: 'Extracurricular internship as a front-end developer on the OutSystems platform. HTML, CSS and JavaScript coding, responsive testing across devices, visual theme management and front-end reporting for the team.',
    },
    stack: ['OutSystems v11', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    role: { es: 'Marketing Digital', en: 'Digital Marketing' },
    company: 'Prácticas universitarias',
    logo: null,
    date: { es: 'Ene 2018 — Abr 2018', en: 'Jan 2018 — Apr 2018' },
    desc: {
      es: 'Gestión de contenido y presencia en redes sociales para varias empresas, análisis de campañas digitales, estrategia SEO y SEM, seguimiento de posicionamiento y elaboración de reportes periódicos para cliente.',
      en: 'Social media content management and brand presence for multiple companies, digital campaign analysis, SEO and SEM strategy, ranking tracking and periodic client reporting.',
    },
    stack: ['SEO · SEM', 'Social Media', 'Analytics'],
  },
]

export const PROJECTS = [
  {
    client: 'Preference S.L.',
    title: { es: 'Sistemas de puertos y terminales', en: 'Port & terminal systems' },
    desc: {
      es: 'Interfaces de gestión para operaciones portuarias y de terminales, construidas con Vue 3, Vuetify y Tailwind sobre backend .NET. Casos de estudio y vídeos en camino.',
      en: 'Management interfaces for port and terminal operations, built with Vue 3, Vuetify and Tailwind over a .NET backend. Case studies and videos on the way.',
    },
    tags: ['Vue 3', 'Vuetify', 'Tailwind'],
    status: 'soon',
  },
  {
    client: 'Terminal Solutions',
    title: { es: 'Interfaces para sistemas de terminales', en: 'Terminal system interfaces' },
    desc: {
      es: 'Diseño y desarrollo de interfaces complejas en Vue 3, con foco en arquitectura, rendimiento y refactorización de código existente.',
      en: 'Design and development of complex Vue 3 interfaces, focused on architecture, performance and refactoring existing code.',
    },
    tags: ['Vue 3', 'UI Architecture'],
    status: 'soon',
  },
  {
    client: 'NTT DATA',
    title: { es: 'Sistemas de componentes enterprise', en: 'Enterprise component systems' },
    desc: {
      es: 'Front-end para Mercadona, Banc Sabadell, Resolution Life y Quirónsalud: librerías de componentes, estandarización de temas y accesibilidad a escala.',
      en: 'Front-end for Mercadona, Banc Sabadell, Resolution Life and Quirónsalud: component libraries, theme standardisation and accessibility at scale.',
    },
    tags: ['Components', 'Theming', 'A11y'],
    status: 'live',
  },
]

export const SOFT_SKILLS = [
  { es: 'Trabajo en equipo', en: 'Teamwork', icon: 'users' },
  { es: 'Proactividad', en: 'Pro-active', icon: 'bolt' },
  { es: 'Comunicación', en: 'Communicative', icon: 'chat' },
  { es: 'Resolución de problemas', en: 'Problem solver', icon: 'puzzle' },
  { es: 'Creatividad e iniciativa', en: 'Creativity & initiative', icon: 'spark' },
]

export const ABOUT_TAGS = {
  es: ['Diseño de interfaces', 'Accesibilidad', 'Vue 3', 'Sistemas de componentes', 'UX/UI', 'Atención al detalle', 'Comunicación audiovisual'],
  en: ['Interface design', 'Accessibility', 'Vue 3', 'Component systems', 'UX/UI', 'Attention to detail', 'Audiovisual communication'],
}

export const CONTACT = [
  { key: 'contact.email', icon: 'mail', value: 'huspablo11@gmail.com', href: 'mailto:huspablo11@gmail.com' },
  { key: 'contact.phone', icon: 'phone', value: '+34 628 122 462', href: 'tel:+34628122462' },
  { type: 'social', label: 'LinkedIn', icon: 'linkedin', value: 'in/pablo-segarra', href: 'https://www.linkedin.com/in/pablo-segarra/' },
  { type: 'social', label: 'GitHub', icon: 'github', value: 'github.com/Huspablo', href: 'https://github.com/Huspablo' },
]
