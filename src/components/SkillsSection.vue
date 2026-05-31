<template>
  <!-- Marquee band — full width, outside .wrap -->
  <div class="marquee-band" aria-hidden="true">
    <div class="marquee-content">
      <div class="marquee-label">{{ t('skills.eyebrow') }}</div>
      <div class="marquee-inner">
        <div class="marquee-track" v-for="n in 3" :key="n">
          <template v-for="item in allItems" :key="`${n}-${item.slug}`">
            <div class="marquee-item">
              <div class="marquee-item-icon">
                <img
                  v-if="!item.icon"
                  :src="`https://cdn.simpleicons.org/${item.slug}`"
                  :alt="item.name"
                  loading="lazy"
                  @error="(e) => e.target.style.display = 'none'"
                />
                <img v-else :src="item.icon" :alt="item.name" loading="lazy" />
              </div>
              <span>{{ item.name }}</span>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>

  <section class="section-pad section-alt wrap" id="skills" data-screen-label="Skills">

    <!-- Header — same pattern as other sections -->
    <span class="eyebrow reveal">{{ t('skills.eyebrow') }}</span>
    <h2 class="section-title reveal reveal-d1">{{ t('skills.title') }}</h2>
    <p class="section-lead reveal reveal-d2">{{ t('skills.lead') }}</p>

    <!-- Groups -->
    <div class="skill-groups">
      <div
        v-for="(group, index) in TECH_GROUPS"
        :key="group.key"
        class="skill-group reveal"
        :style="{ '--group-index': index }"
      >
        <div class="skill-group-header">
          <div class="skill-group-badge">{{ String(index + 1).padStart(2, '0') }}</div>
          <h3>{{ t(group.key) }}</h3>
        </div>
        <div class="tech-grid">
          <div
            v-for="(item, itemIdx) in group.items"
            :key="item.slug"
            class="tech-card reveal"
            :style="{ '--item-index': itemIdx }"
          >
            <div class="tech-card-bg"></div>
            <div class="tech-card-content">
              <div class="tech-icon">
                <img
                  :src="item.icon || `https://cdn.simpleicons.org/${item.slug}`"
                  :alt="item.name"
                  loading="lazy"
                  @error="onIconError($event, item.name)"
                />
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
import { computed } from 'vue'
import { useI18n } from '../composables/useI18n.js'
import { TECH_GROUPS } from '../data/content.js'

const { t } = useI18n()

const allItems = computed(() => TECH_GROUPS.flatMap(g => g.items))

function onIconError(event, name) {
  const img = event.target
  const fallback = document.createElement('div')
  fallback.className = 'tech-fallback'
  fallback.textContent = name.charAt(0)
  img.replaceWith(fallback)
}
</script>
