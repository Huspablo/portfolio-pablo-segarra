<template>
  <section class="section-pad wrap" id="contact" data-screen-label="Contact">
    <div class="contact-grid">
      <div>
        <span class="eyebrow reveal">{{ t('contact.eyebrow') }}</span>
        <h2 class="section-title reveal reveal-d1">{{ t('contact.title') }}</h2>
        <p class="section-lead reveal reveal-d2">{{ t('contact.lead') }}</p>
        <div class="contact-place reveal reveal-d2">
          <span class="place-ic" v-html="icons.phone" aria-hidden="true"></span>
          <span>{{ t('contact.locationVal') }}</span>
        </div>
      </div>

      <div class="contact-links reveal reveal-d1">
        <a
          v-for="item in CONTACT"
          :key="item.href"
          class="contact-row"
          :href="item.href"
          v-bind="item.type === 'social' ? { target: '_blank', rel: 'noopener' } : {}"
        >
          <span class="ic" v-html="icons[item.icon]"></span>
          <span class="meta">
            <span class="k">{{ item.type === 'social' ? item.label : t(item.key) }}</span>
            <span class="v">{{ item.value }}</span>
          </span>
          <span class="arrow" v-html="icons.arrow" aria-hidden="true"></span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n.js'
import { icons } from '../utils/icons.js'
import { CONTACT } from '../data/content.js'

const { t } = useI18n()
</script>
