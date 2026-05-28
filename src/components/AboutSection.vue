<template>
  <section class="section-pad wrap" id="about" data-screen-label="About">
    <div class="about-grid">
      <div class="about-photo reveal">
        <img src="/assets/pablo_work.png" alt="Pablo Segarra Husé" />
      </div>

      <div class="about-text">
        <span class="eyebrow reveal">{{ t('about.eyebrow') }}</span>
        <h2 class="section-title reveal reveal-d1">{{ t('about.title') }}</h2>
        <p class="reveal reveal-d1" v-html="t('about.p1')"></p>
        <p class="reveal reveal-d2" v-html="t('about.p2')"></p>

        <div class="about-tags">
          <span
            v-for="tag in ABOUT_TAGS[lang]"
            :key="tag"
            class="tag reveal"
          >{{ tag }}</span>
        </div>

        <div class="soft-grid">
          <div
            v-for="skill in SOFT_SKILLS"
            :key="skill.en"
            class="soft-card reveal"
          >
            <span class="ic" v-html="icons[skill.icon] || icons.spark"></span>
            <span>{{ skill[lang] }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n.js'
import { icons } from '../utils/icons.js'
import { ABOUT_TAGS, SOFT_SKILLS } from '../data/content.js'

const { lang, t } = useI18n()
</script>
