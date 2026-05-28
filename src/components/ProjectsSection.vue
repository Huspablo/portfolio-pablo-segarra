<template>
  <section class="section-pad wrap" id="projects" data-screen-label="Projects">

    <!-- Header -->
    <span class="eyebrow reveal">{{ t('proj.eyebrow') }}</span>
    <h2 class="section-title reveal reveal-d1">{{ t('proj.title') }}</h2>
    <p class="section-lead reveal reveal-d2">{{ t('proj.lead') }}</p>

    <!-- Project grid -->
    <div class="work-grid">
      <ProjectCard
        v-for="p in visible"
        :key="p.id"
        :project="p"
        class="reveal"
      />
    </div>

    <!-- Articles & Publications -->
    <template v-if="visiblePubs.length">
      <div class="skills-head" style="margin-top: var(--section-y);">
        <div>
          <span class="eyebrow reveal">{{ lang === 'es' ? 'Publicaciones' : 'Publications' }}</span>
          <h2 class="section-title reveal reveal-d1" style="font-size: clamp(1.6rem, 3vw, 2.4rem);">
            {{ lang === 'es' ? 'Artículos y publicaciones.' : 'Articles & publications.' }}
          </h2>
        </div>
      </div>

      <div class="pubs-grid">
        <a
          v-for="pub in visiblePubs"
          :key="pub.id"
          class="pub-card reveal"
          :href="pub.link"
          target="_blank"
          rel="noopener"
        >
          <div class="pub-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>

          <div class="pub-body">
            <div class="pub-meta">
              <span class="pub-publisher">{{ pub.publisher }}</span>
              <span class="pub-year">{{ pub.year }}</span>
            </div>
            <div class="pub-title">{{ tField(pub.title) }}</div>
            <p class="pub-desc">{{ tField(pub.description) }}</p>
          </div>

          <div class="pub-link">
            <span class="btn btn-ghost pub-link-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              {{ lang === 'es' ? 'Leer artículo' : 'Read article' }}
            </span>
          </div>
        </a>
      </div>
    </template>

  </section>
</template>

<script setup>
import { computed } from 'vue'
import ProjectCard from './ProjectCard.vue'
import { useI18n } from '../composables/useI18n.js'
import { projects, publications } from '../data/projects.js'

const { lang, t } = useI18n()

const visible = computed(() => projects.filter(p => p.visible))
const visiblePubs = computed(() => publications.filter(p => p.visible))

function tField(field) {
  if (!field) return ''
  if (typeof field === 'string') return field
  return field[lang.value] ?? field.es ?? ''
}
</script>
