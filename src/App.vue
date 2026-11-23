<template>
  <!-- Ambient background: dot grid + cursor spotlight -->
  <div class="bg-grid" aria-hidden="true"></div>
  <div class="bg-spotlight" :class="{ 'is-active': spotlightActive }" aria-hidden="true"></div>

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
import { ref, onMounted, onUnmounted, watch } from 'vue'
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
const { observeAll } = useReveal()

const spotlightActive = ref(false)
let rafId = null
let pendingX = 0
let pendingY = 0

function onPointerMove(e) {
  pendingX = e.clientX
  pendingY = e.clientY
  if (rafId) return
  rafId = requestAnimationFrame(() => {
    document.documentElement.style.setProperty('--mx', `${pendingX}px`)
    document.documentElement.style.setProperty('--my', `${pendingY}px`)
    spotlightActive.value = true
    rafId = null
  })
}

onMounted(() => {
  // Apply saved theme to <html>
  applyTheme(theme.value)

  // Arm scroll reveal
  document.documentElement.classList.add('reveal-on')

  observeAll()

  const canHover = window.matchMedia('(hover: hover)').matches
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (canHover && !reduceMotion) {
    window.addEventListener('pointermove', onPointerMove, { passive: true })
  }
})

onUnmounted(() => {
  window.removeEventListener('pointermove', onPointerMove)
  if (rafId) cancelAnimationFrame(rafId)
})

// Re-observe after language change (new DOM elements rendered)
watch(lang, () => {
  observeAll()
})
</script>
