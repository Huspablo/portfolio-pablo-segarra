<template>
  <article :class="['pcard', { 'pcard--featured': featured }]">

    <!-- MEDIA -->
    <div class="pcard-media" @click="openMedia">
      <!-- Thumbnail image -->
      <img
        v-if="project.thumbnail"
        class="pcard-img"
        :src="project.thumbnail"
        :alt="project.title"
        loading="lazy"
      />

      <!-- Video placeholder -->
      <div v-else-if="project.video || project.videos?.length" class="pcard-video-ph">
        <div class="pcard-play-ring">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </div>
        <span class="pcard-video-label">{{ lang === 'es' ? 'Ver demo' : 'Watch demo' }}</span>
      </div>

      <!-- Geometric placeholder for no-media projects -->
      <div v-else class="pcard-placeholder">
        <svg class="pcard-ph-pattern" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="200" height="120" fill="url(#grid)"/>
          <circle cx="100" cy="60" r="28" fill="none" stroke="currentColor" stroke-width="1" opacity="0.4"/>
          <circle cx="100" cy="60" r="14" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/>
          <circle cx="100" cy="60" r="4" fill="currentColor" opacity="0.5"/>
        </svg>
      </div>

      <!-- Hover overlay with CTA -->
      <div class="pcard-overlay" v-if="hasMedia">
        <span class="pcard-overlay-label">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
            <path v-if="project.video || project.videos?.length" d="M5 3l14 9-14 9V3z"/>
            <path v-else d="M15 3h6v6M9 21H3v-6M21 3l-9 9M3 21l9-9"/>
          </svg>
          {{ mediaLabel }}
        </span>
      </div>

      <!-- Type badge -->
      <span :class="['pcard-badge', typeBadgeClass]">{{ t(project.type) }}</span>
    </div>

    <!-- BODY -->
    <div class="pcard-body">
      <div class="pcard-meta">
        <span class="pcard-company" v-if="project.company">{{ project.company }}</span>
        <span class="pcard-year">{{ project.year }}</span>
      </div>

      <h3 class="pcard-title">{{ project.title }}</h3>
      <p class="pcard-role">{{ t(project.role) }}</p>
      <p class="pcard-desc">{{ t(project.description) }}</p>

      <div class="pcard-tags">
        <span v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
      </div>

      <div class="pcard-actions">
        <button
          v-if="project.gallery?.length"
          class="btn btn-ghost pcard-btn"
          @click="openMedia"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          {{ lang === 'es' ? 'Ver diseños' : 'View designs' }}
        </button>
        <button
          v-if="project.video || project.videos?.length"
          class="btn btn-ghost pcard-btn"
          @click="openMedia"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          {{ project.videos?.length > 1 ? (lang === 'es' ? `Ver ${project.videos.length} vídeos` : `Watch ${project.videos.length} videos`) : (lang === 'es' ? 'Ver demo' : 'Watch demo') }}
        </button>
        <a
          v-if="project.links?.figma"
          class="btn btn-ghost pcard-btn"
          :href="project.links.figma"
          target="_blank"
          rel="noopener"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          Figma
        </a>
        <a
          v-if="project.links?.live"
          class="btn btn-primary pcard-btn"
          :href="project.links.live"
          target="_blank"
          rel="noopener"
        >{{ lang === 'es' ? 'Ver live' : 'View live' }}</a>
      </div>
    </div>

    <!-- Modal -->
    <ProjectModal
      v-model="modalOpen"
      :gallery="project.gallery"
      :video="project.video"
      :videos="project.videos"
      :title="project.title"
    />
  </article>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProjectModal from './ProjectModal.vue'
import { useI18n } from '../composables/useI18n.js'

const props = defineProps({
  project: { type: Object, required: true },
  featured: { type: Boolean, default: false },
})

const { lang } = useI18n()
const modalOpen = ref(false)

function t(field) {
  if (!field) return ''
  if (typeof field === 'string') return field
  return field[lang.value] ?? field.es ?? ''
}

const hasMedia = computed(() =>
  !!(props.project.gallery?.length || props.project.video || props.project.videos?.length)
)

const mediaLabel = computed(() => {
  if (props.project.videos?.length) return lang.value === 'es' ? 'Ver vídeos' : 'Watch videos'
  if (props.project.video) return lang.value === 'es' ? 'Ver demo' : 'Watch demo'
  if (props.project.gallery?.length) return lang.value === 'es' ? 'Ver diseños' : 'View designs'
  return ''
})

const typeBadgeClass = computed(() => {
  const type = typeof props.project.type === 'object'
    ? props.project.type.es
    : props.project.type
  if (type?.includes('profesional') || type?.includes('Professional')) return 'pcard-badge--pro'
  if (type?.includes('UX') || type?.includes('Diseño') || type?.includes('Design')) return 'pcard-badge--design'
  return 'pcard-badge--academic'
})

function openMedia() {
  if (hasMedia.value) modalOpen.value = true
}
</script>
