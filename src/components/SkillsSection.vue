<template>
  <section class="section-pad section-alt wrap" id="skills" data-screen-label="Skills">

    <!-- Header — same pattern as other sections -->
    <span class="eyebrow reveal">{{ t('skills.eyebrow') }}</span>
    <h2 class="section-title reveal">{{ t('skills.title') }}</h2>
    <p class="section-lead reveal">{{ t('skills.lead') }}</p>

    <!-- Groups -->
    <div class="skill-groups">
      <div
        v-for="(group, index) in TECH_GROUPS"
        :key="group.key"
        class="skill-group reveal"
      >
        <div class="skill-group-header">
          <div class="skill-group-badge">{{ String(index + 1).padStart(2, '0') }}</div>
          <h3>{{ t(group.key) }}</h3>
        </div>
        <div class="tech-grid">
          <div
            v-for="(item, i) in group.items"
            :key="item.slug"
            class="tech-card reveal reveal-stagger"
            :style="{ '--stagger': i }"
          >
            <div class="tech-card-bg"></div>
            <div class="tech-card-content">
              <div class="tech-icon">
                <img
                  v-if="item.icon"
                  :src="item.icon"
                  :alt="item.name"
                  loading="lazy"
                  @error="onIconError($event, item.name)"
                />
                <div v-else class="tech-fallback">{{ item.name.charAt(0) }}</div>
              </div>
              <span class="tech-name">{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n.js'
import { TECH_GROUPS } from '../data/content.js'

const { t } = useI18n()

function onIconError(event, name) {
  const img = event.target
  const fallback = document.createElement('div')
  fallback.className = 'tech-fallback'
  fallback.textContent = name.charAt(0)
  img.replaceWith(fallback)
}
</script>
