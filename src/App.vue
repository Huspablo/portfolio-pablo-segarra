<template>
  <!-- Decorative background -->
  <div class="bg-field" aria-hidden="true">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>
  </div>
  <div class="grain" aria-hidden="true"></div>

  <NavBar />

  <main id="top">
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <CVBand />
    <ContactSection />
  </main>

  <FooterSection />
</template>

<script setup>
import { onMounted, watch } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import CVBand from './components/CVBand.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import { useI18n } from './composables/useI18n.js'
import { useTheme } from './composables/useTheme.js'
import { useReveal } from './composables/useReveal.js'

const { lang } = useI18n()
const { theme, applyTheme } = useTheme()
const { observeAll, revealAllSoon } = useReveal()

function initCursor() {
  if (window.matchMedia('(hover: none)').matches) return

  const dot = document.createElement('div')
  dot.className = 'cursor-dot'
  const ring = document.createElement('div')
  ring.className = 'cursor-ring'
  document.body.append(dot, ring)
  document.body.classList.add('cursor-on')

  let rx = 0, ry = 0, x = 0, y = 0

  document.addEventListener('mousemove', (e) => {
    x = e.clientX
    y = e.clientY
    dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
  })

  ;(function loop() {
    rx += (x - rx) * 0.18
    ry += (y - ry) * 0.18
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
    requestAnimationFrame(loop)
  })()

  window.__ringHover = (on) => ring.classList.toggle('is-hover', on)
}

function bindCursorTargets() {
  if (!window.__ringHover) return
  document.querySelectorAll('a, button, [data-cursor="hover"]').forEach((n) => {
    if (n.__bound) return
    n.__bound = true
    n.addEventListener('mouseenter', () => window.__ringHover(true))
    n.addEventListener('mouseleave', () => window.__ringHover(false))
  })
}

onMounted(() => {
  // Apply saved theme to <html>
  applyTheme(theme.value)

  // Arm scroll reveal
  document.documentElement.classList.add('reveal-on')

  initCursor()
  observeAll().then(() => bindCursorTargets())
  revealAllSoon()
})

// Re-observe after language change (new DOM elements rendered)
watch(lang, () => {
  observeAll().then(() => bindCursorTargets())
})
</script>
