<template>
  <section class="section-pad wrap" id="experience" data-screen-label="Experience">
    <span class="eyebrow reveal">{{ t('exp.eyebrow') }}</span>
    <h2 class="section-title reveal reveal-d1">{{ t('exp.title') }}</h2>
    <p class="section-lead reveal reveal-d2">{{ t('exp.lead') }}</p>

    <div class="timeline">
      <div
        v-for="job in EXPERIENCE"
        :key="job.company + job.date.en"
        class="tl-item reveal"
      >
        <div class="tl-dot"></div>
        <div class="tl-card">
          <div class="tl-top">
            <h3 class="tl-role">{{ job.role[lang] }}</h3>
            <span class="tl-date">{{ job.date[lang] }}</span>
          </div>

          <div class="tl-company-row">
            <span class="tl-company">{{ job.company }}</span>
            <img
              v-if="job.logo"
              class="tl-logo"
              :src="job.logo"
              :alt="job.company"
              loading="lazy"
            />
          </div>

          <p class="tl-desc">{{ job.desc[lang] }}</p>
          <div class="tl-stack">
            <span v-for="s in job.stack" :key="s">{{ s }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n.js'
import { EXPERIENCE } from '../data/content.js'

const { lang, t } = useI18n()
</script>
