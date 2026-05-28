# Pablo Segarra — Portfolio

Portfolio personal de **Pablo Segarra Husé**, Front-End Engineer & UI/UX Designer.  
Construido con **Vue 3 + Vite + Vuetify**, diseño personalizado con CSS Variables, modo oscuro, i18n ES/EN, cursor personalizado y animaciones de scroll.

---

## Instalación y desarrollo local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:5173)
npm run dev

# Build de producción (genera /dist)
npm run build

# Preview del build de producción
npm run preview
```

---

## Despliegue en Vercel

1. Sube el proyecto a un repositorio GitHub.
2. Ve a [vercel.com](https://vercel.com) e importa el repositorio.
3. Vercel detecta Vite automáticamente y configura:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Pulsa **Deploy**. ¡Listo!

Para deploys automáticos en cada push, simplemente conecta la rama `main`.

---

## Despliegue en Netlify

El proyecto incluye `netlify.toml` preconfigurado.

1. Sube el proyecto a un repositorio GitHub.
2. Ve a [netlify.com](https://netlify.com) e importa el repositorio.
3. Netlify detecta la configuración de `netlify.toml` automáticamente:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
4. Pulsa **Deploy site**.

---

## Estructura del proyecto

```
portfolio-psegarra/
├── public/
│   ├── assets/
│   │   ├── pablo.jpg              ← Tu foto personal
│   │   └── CV-Pablo-Segarra-2026-EN.pdf  ← Tu CV
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── NavBar.vue             ← Navegación + menú móvil
│   │   ├── HeroSection.vue        ← Sección hero
│   │   ├── AboutSection.vue       ← Sobre mí
│   │   ├── SkillsSection.vue      ← Tech stack
│   │   ├── ExperienceSection.vue  ← Timeline de experiencia
│   │   ├── ProjectsSection.vue    ← Proyectos destacados
│   │   ├── CVBand.vue             ← Banda de descarga de CV
│   │   ├── ContactSection.vue     ← Contacto
│   │   └── FooterSection.vue      ← Footer
│   ├── composables/
│   │   ├── useI18n.js             ← Sistema de idiomas (ES/EN)
│   │   ├── useTheme.js            ← Toggle dark/light mode
│   │   └── useReveal.js           ← Animaciones de scroll reveal
│   ├── data/
│   │   └── content.js             ← TODO EL CONTENIDO EDITABLE
│   ├── utils/
│   │   └── icons.js               ← SVG icons inline
│   ├── styles/
│   │   └── main.css               ← Estilos globales + design tokens
│   ├── App.vue
│   └── main.js
├── index.html
├── vite.config.js
├── netlify.toml
└── package.json
```

---

## Cómo actualizar el contenido

### Cambiar foto personal
Reemplaza el archivo `public/assets/pablo.jpg` con tu nueva foto.  
Misma ruta, mismo nombre → sin necesidad de cambiar código.

### Cambiar el CV
Reemplaza `public/assets/CV-Pablo-Segarra-2026-EN.pdf`.  
Si cambias el nombre del archivo, actualiza la referencia en `src/components/CVBand.vue` y `src/components/NavBar.vue`.

### Editar skills, experiencia, proyectos y contacto
Todo el contenido está centralizado en **`src/data/content.js`**:

| Sección | Variable a editar |
|---------|------------------|
| Traducciones ES/EN | `I18N` |
| Stats del hero (años, stack, idiomas) | `HERO_STATS` |
| Tech stack | `TECH_GROUPS` |
| Experiencia profesional | `EXPERIENCE` |
| Proyectos destacados | `PROJECTS` |
| Soft skills | `SOFT_SKILLS` |
| Tags "lo que me define" | `ABOUT_TAGS` |
| Links de contacto | `CONTACT` |

### Cambiar colores / design tokens
Edita las variables CSS en `src/styles/main.css` al inicio del archivo (sección `/* --- Tokens --- */`).  
El acento principal es `--accent-bright: #42b883` (verde Vue).

### Añadir nuevos idiomas
1. Añade un objeto con las traducciones en `I18N` de `src/data/content.js`.
2. Añade el botón en `src/components/NavBar.vue`.

---

## Tecnologías

- **Vue 3** — Composition API
- **Vite 5** — build tool
- **Vuetify 3** — integrado y disponible para uso en componentes futuros
- **CSS Variables** — sistema de diseño completamente custom
- **IntersectionObserver** — scroll reveal nativo
- **SimpleIcons CDN** — iconos de tecnologías

---

*Diseñado y desarrollado por Pablo Segarra Husé*
