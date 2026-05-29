<template>
  <!-- Marquee band — full width, outside .wrap -->
  <div class="marquee-band" aria-hidden="true">
    <div class="marquee-inner">
      <!-- Two identical tracks for seamless loop -->
      <div class="marquee-track" v-for="n in 2" :key="n">
        <template v-for="item in allItems" :key="`${n}-${item.slug}`">
          <div class="marquee-item">
            <img
              v-if="!item.icon"
              :src="`https://cdn.simpleicons.org/${item.slug}`"
              :alt="item.name"
              loading="lazy"
              @error="(e) => e.target.style.display = 'none'"
            />
            <img v-else :src="item.icon" :alt="item.name" loading="lazy" />
            {{ item.name }}
          </div>
        </template>
      </div>
    </div>
  </div>

  <section class="section-pad section-alt wrap" id="skills" data-screen-label="Skills">
    <div class="skills-head">
      <div>
        <span class="eyebrow reveal">{{ t('skills.eyebrow') }}</span>
        <h2 class="section-title reveal reveal-d1">{{ t('skills.title') }}</h2>
      </div>
      <p class="section-lead reveal reveal-d2">{{ t('skills.lead') }}</p>
    </div>

    <div>
      <div
        v-for="group in TECH_GROUPS"
        :key="group.key"
        class="skill-group reveal"
      >
        <h3>{{ t(group.key) }}</h3>
        <div class="tech-grid">
          <div
            v-for="item in group.items"
            :key="item.slug"
            class="tech-card reveal"
          >
            <img
              :src="item.icon || `https://cdn.simpleicons.org/${item.slug}`"
              :alt="item.name"
              loading="lazy"
              @error="onIconError($event, item.name)"
            />
            <span>{{ item.name }}</span>
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
