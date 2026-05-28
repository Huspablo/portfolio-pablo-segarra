<template>
  <section class="section-pad wrap" id="cv" data-screen-label="CV">
    <div class="cv-band reveal">
      <div>
        <h2>{{ t('cv.title') }}</h2>
        <p>{{ t('cv.text') }}</p>
      </div>
      <div class="cv-actions">
        <a
          class="btn btn-dark"
          href="/assets/CV-Pablo-Segarra-2026-EN.pdf"
          download
        >
          <span v-html="icons.download"></span>
          <span>{{ t('cv.download') }}</span>
        </a>
        <a
          class="btn btn-light"
          href="/assets/CV-Pablo-Segarra-2026-EN.pdf"
          target="_blank"
          rel="noopener"
        >
          <span v-html="icons.eye"></span>
          <span>{{ t('cv.view') }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n.js'
import { icons } from '../utils/icons.js'

const { t } = useI18n()
</script>
