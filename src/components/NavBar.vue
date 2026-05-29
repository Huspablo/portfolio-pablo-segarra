<template>
  <header :class="['nav', { scrolled }]">
    <a class="brand" href="#top" aria-label="Pablo Segarra — inicio">
      <span class="brand-mark">PS</span>
      <span class="brand-name">Pablo Segarra<span> .dev</span></span>
    </a>

    <nav class="nav-links" aria-label="Principal" ref="navLinksEl">
      <!-- Sliding pill indicator -->
      <span
        v-if="indicatorStyle.width"
        class="nav-indicator"
        :style="indicatorStyle"
        aria-hidden="true"
      ></span>
      <a
        v-for="item in navItems"
        :key="item.href"
        :href="item.href"
        :class="{ active: activeSection === item.id }"
        :ref="el => setLinkRef(el, item.id)"
      >{{ t(item.key) }}</a>
    </nav>

    <div class="nav-actions">
      <div class="pill-toggle" role="group" aria-label="Idioma">
        <button :class="['lang-btn', { active: lang === 'es' }]" @click="applyLang('es')">ES</button>
        <button :class="['lang-btn', { active: lang === 'en' }]" @click="applyLang('en')">EN</button>
      </div>

      <button
        class="icon-btn"
        id="theme-toggle"
        :aria-label="theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'"
        @click="applyTheme(theme === 'dark' ? 'light' : 'dark')"
      >
        <span class="moon" v-html="icons.moon"></span>
        <span class="sun" v-html="icons.sun"></span>
      </button>

      <button
        class="nav-burger icon-btn"
        :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'"
        :aria-expanded="menuOpen"
        @click="toggleMenu(!menuOpen)"
        v-html="menuOpen ? icons.close : icons.menu"
      ></button>
    </div>
  </header>

  <!-- Mobile menu -->
  <div :class="['mobile-menu', { open: menuOpen }]" :aria-hidden="!menuOpen" id="mobile-menu">
    <a v-for="item in navItems" :key="item.href" :href="item.href" @click="closeMenu">
      {{ t(item.key) }}
    </a>
    <a class="btn btn-primary" href="/assets/CV-Pablo-Segarra-2026-EN.pdf" download @click="closeMenu">
      <span v-html="icons.download"></span>
      <span>{{ t('nav.cv') }}</span>
    </a>
  </div>
</template>

<script setup>
import { ref, reactive, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../composables/useI18n.js'
import { useTheme } from '../composables/useTheme.js'
import { icons } from '../utils/icons.js'

const { lang, t, applyLang } = useI18n()
const { theme, applyTheme } = useTheme()

const scrolled = ref(false)
const menuOpen = ref(false)
const activeSection = ref('')
const navLinksEl = ref(null)
const linkRefs = {}
const indicatorStyle = reactive({ left: '0px', width: '0px', opacity: 0 })

const navItems = [
  { href: '#about',      id: 'about',      key: 'nav.about' },
  { href: '#skills',     id: 'skills',     key: 'nav.skills' },
  { href: '#experience', id: 'experience', key: 'nav.experience' },
  { href: '#projects',   id: 'projects',   key: 'nav.projects' },
  { href: '#contact',    id: 'contact',    key: 'nav.contact' },
]

function setLinkRef(el, id) {
  if (el) linkRefs[id] = el
}

function updateIndicator(id) {
  const link = linkRefs[id]
  const nav  = navLinksEl.value
  if (!link || !nav) { indicatorStyle.opacity = 0; return }
  const navRect  = nav.getBoundingClientRect()
  const linkRect = link.getBoundingClientRect()
  indicatorStyle.left    = `${linkRect.left - navRect.left}px`
  indicatorStyle.width   = `${linkRect.width}px`
  indicatorStyle.opacity = 1
}

watch(activeSection, (id) => {
  nextTick(() => updateIndicator(id))
})

function onScroll() {
  scrolled.value = window.scrollY > 24
  const sections = document.querySelectorAll('section[id]')
  const pos = window.scrollY + window.innerHeight * 0.32
  let cur = ''
  sections.forEach((s) => { if (s.offsetTop <= pos) cur = s.id })
  activeSection.value = cur
}

function toggleMenu(open) {
  menuOpen.value = open
  document.body.style.overflow = open ? 'hidden' : ''
}

function closeMenu() { toggleMenu(false) }

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.body.style.overflow = ''
})
</script>
