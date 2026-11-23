# Portfolio — Pablo Segarra

Vue 3 + Vite, single-page (sin Vue Router), bilingüe ES/EN. Despliegue en **Vercel** (`psegarra.dev`) — el `netlify.toml` del repo es un resto sin usar, `api/likes.js` solo funciona como función serverless bajo la convención de Vercel. Sin framework de UI — todo el markup es HTML a mano + un único `src/styles/main.css`.

## Arquitectura

- `src/App.vue` — shell raíz: fondo ambiental, `NavBar`, secciones en orden fijo dentro de `<main>`, `FooterSection`.
- `src/components/` — un componente por sección (`HeroSection`, `AboutSection`, `SkillsSection`, `ExperienceSection`, `ProjectsSection`, `CVBand`, `ContactSection`, `FooterSection`) más piezas reutilizables (`ProjectCard`, `ProjectModal`, `TerminalCard`, `LikeButton`, `NavBar`).
- `src/composables/` — `useI18n.js` (diccionario ES/EN + ref de idioma persistido), `useTheme.js` (claro/oscuro vía `data-theme` + `document.startViewTransition`), `useReveal.js` (scroll-reveal con `IntersectionObserver`).
- `src/data/content.js` — todo el copy bilingüe, stats del hero, grupos de tech stack, experiencia, soft skills, contacto.
- `src/data/projects.js` — proyectos y publicaciones (ver sección de abajo).
- `src/utils/icons.js` — diccionario de iconos SVG inline.
- `api/likes.js` — función serverless (Vercel + Upstash Redis) para el contador de "me gusta".

No hay build step de componentes aparte de Vite. No hay tests automatizados — la verificación es visual (ver más abajo).

## Sistema de diseño

Todos los tokens viven en `src/styles/main.css:9-69` (`:root` = tema claro, `html[data-theme='dark']` = oscuro). No crees valores de color/tipografía sueltos en componentes — usa siempre estas variables:

| Rol | Token | Claro | Oscuro |
|---|---|---|---|
| Fondo página | `--bg` | `#f8f7f3` (papel) | `#141b23` (slate real de Vue, no negro genérico) |
| Superficie (card) | `--surface` | `#ffffff` | `#1d2730` |
| Texto | `--text` / `--text-soft` / `--text-faint` | — | — |
| Acento (único) | `--accent-bright` | `#42b883` (verde Vue) | `#54d79b` |
| Radios | `--radius-sm` / `--radius` / `--radius-lg` | `12px` / `18px` / `28px` | — |
| Motion | `--ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | — |
| Motion | `--dur-fast` / `--dur-base` / `--dur-slow` | `150ms` / `300ms` / `500ms` | — |

Tipografía: `--font-display`/`--font-body` = **Archivo Variable** (autohospedada vía `@fontsource-variable/archivo`, importada en `src/main.js`), `--font-mono` = **IBM Plex Mono** (autohospedada vía `@fontsource/ibm-plex-mono`) — se usa solo para metadatos/fechas/código (línea de rol en el Hero, fechas de la timeline, `TerminalCard`), nunca para texto largo.

Regla de duración: cambios de color/borde/opacidad → `--dur-fast`; cualquier cosa con `transform` → `--dur-base`; algo deliberado y puntual (abrir un modal) → `--dur-slow`. No metas valores de tiempo sueltos (`0.3s`, `ease-out`...) — usa los tokens.

### Guardrails de dirección visual — NO reintroducir

El diseño pasó por una limpieza deliberada de recursos "de plantilla hecha con IA". Si una tarea futura tienta a añadir algo de esta lista, para y pregunta primero — es casi seguro que no encaja con la dirección del proyecto:

- Cursor personalizado que sustituye al del sistema operativo.
- Blobs de fondo degradados en movimiento, o grain/ruido overlay.
- Texto con `background-clip: text` en gradiente.
- Marquee infinito (logos, texto) — si hace falta mostrar una lista, usa una grid estática.
- Contadores animados (count-up) en cifras del hero.
- "Pill" deslizante como indicador de nav activo (usa un underline estático, ver `.nav-links a.active` en `main.css`).
- Un segundo color de acento fuera de la familia verde Vue (excepción ya aceptada: el rosa del botón de "like" en `LikeButton.vue`, es una convención universal de icono de corazón, no un acento de marca).

Sí está permitido y es parte del lenguaje visual actual: el grid de puntos de fondo (`.bg-grid`), el spotlight que sigue el cursor (`.bg-spotlight`) y el `TerminalCard` — son deliberados, sutiles, respetan `prefers-reduced-motion`/`(hover: none)`, y están pensados para reforzar la identidad "developer" sin caer en los clichés de arriba.

## Cómo añadir o editar un proyecto

Edita `src/data/projects.js`. Cada proyecto es un objeto con:

```js
{
  id: 'slug-unico',
  title: 'Título',
  type: { es: '...', en: '...' },       // texto del badge
  role: { es: '...', en: '...' },
  company: 'Nombre' | null,
  year: '2025' | '2023–2024',
  description: { es: '...', en: '...' },
  technologies: ['Vue 3', '...'],
  thumbnail: '/assets/projects/nombre.webp',   // o video / videos (ver abajo)
  video: '/assets/projects/nombre.mp4',         // opcional, un solo vídeo
  videos: [{ src: '...', title: '...' }],       // opcional, varios vídeos con tabs
  gallery: ['/assets/projects/a.webp', '...'],  // opcional, abre el modal en modo galería
  links: { figma: '...', live: '...', github: '...' },
  featured: false,   // true = tarjeta grande destacada (solo uno)
  visible: true,      // false = oculto sin borrar los datos
}
```

Si un proyecto tiene `gallery` **y** `video`/`videos` a la vez (como `prodevelop`), `ProjectModal.vue` muestra tabs para alternar — no hace falta tocar el componente, solo rellenar ambos campos.

## Cómo añadir un icono de tecnología

Los iconos de `SkillsSection.vue` están **autohospedados** en `public/assets/icons/` — no se usa ningún CDN en runtime (se quitó la dependencia de `cdn.simpleicons.org` por rendimiento y fiabilidad). Para añadir uno nuevo:

```bash
curl -sf "https://cdn.simpleicons.org/<slug>" -o public/assets/icons/<slug>.svg
```

y añade `{ name: '...', slug: '...', icon: '/assets/icons/<slug>.svg' }` al grupo correspondiente en `TECH_GROUPS` (`src/data/content.js`). Si el slug no existe en Simple Icons (pasó con `outsystems`), omite `icon:` — el componente ya cae a una letra-avatar (`.tech-fallback`) automáticamente.

## Pipeline de imágenes

Todas las fotos/capturas se sirven en WebP, autohospedadas (nunca referencies un `.png`/`.jpg` directamente en un componente). Conversión con `cwebp` (instalado vía `brew install webp`):

```bash
# Thumbnails de proyecto (se muestran en aspect-ratio 16/10, object-fit: cover)
cwebp -q 80 -resize 1600 0 original.png -o nombre.webp   # landscape: ancho 1600, alto auto
cwebp -q 80 -resize 0 1600 original.png -o nombre.webp   # portrait: alto 1600, ancho auto

# Fotos de retrato (hero, about)
cwebp -q 82 -resize 1200 0 original.jpg -o nombre.webp
```

No subas el original sin comprimir a `public/` — una vez generado el `.webp` y actualizada la referencia en el código, borra el original.

## Verificación visual

No hay suite de tests. Para comprobar un cambio visual, usa la skill de proyecto `.claude/skills/visual-check/SKILL.md` (levanta el dev server, dispara Playwright, saca capturas en claro/oscuro). Comprueba siempre `prefers-reduced-motion` y `(hover: none)` cuando el cambio incluya animación o interacción con el ratón — varios elementos del fondo y el Hero se desactivan a propósito en esos casos.

## Despliegue

Un solo comando: skill de proyecto `.claude/skills/deploy/SKILL.md` — build local, `vercel --prod`, confirma la URL de producción (`psegarra.dev`). El repo ya está enlazado (`vercel link`); si falta `.vercel/project.json` en un clon nuevo, la propia skill indica cómo relinkarlo.

## Roadmap (próxima iteración — no implementado todavía)

- **Tilt 3D en `ProjectCard.vue`**: rotación sutil (`perspective`/`rotateX`/`rotateY`, máx. ~4-6°) siguiendo la posición del cursor sobre la tarjeta, mismo patrón de `pointermove` + `requestAnimationFrame` que ya usa el spotlight de fondo (`src/App.vue`). Desactivar en `(hover: none)` y `prefers-reduced-motion`.
- **Command palette (Cmd+K)**: navegación rápida por secciones/proyectos, nuevo componente `CommandPalette.vue` montado en `App.vue`, estilo coherente con `TerminalCard` (mono, prompt `>`).
- **Ficha "Claude AI" / "GitHub Copilot" en Skills**: `TECH_GROUPS` (`src/data/content.js`, grupo `skills.g3`) — ya se menciona el uso de IA/Copilot a diario en la experiencia de Prodevelop (`EXPERIENCE`), tendría sentido reflejarlo también como tech stack.

## Nota de higiene (no urgente)

`.claude/settings.local.json` contiene tokens de Upstash/Vercel en texto plano de sesiones anteriores. Está correctamente en `.gitignore`, así que no hay riesgo de subirlos al repo — pero si esos tokens siguen siendo válidos en producción, valdría la pena rotarlos o moverlos a un gestor de secretos.
