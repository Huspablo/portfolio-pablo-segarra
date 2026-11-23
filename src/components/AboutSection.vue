<template>
  <section class="section-pad wrap" id="about" data-screen-label="About">
    <div class="about-grid">
      <div class="about-photo reveal">
        <img src="/assets/pablo_work.webp" alt="Pablo Segarra Husé" />
      </div>

      <div class="about-text">
        <span class="eyebrow reveal">{{ t('about.eyebrow') }}</span>
        <h2 class="section-title reveal">{{ t('about.title') }}</h2>
        <p class="reveal" v-html="t('about.p1')"></p>
        <p class="reveal" v-html="t('about.p2')"></p>

        <div class="about-tags">
          <span
            v-for="(tag, i) in ABOUT_TAGS[lang]"
            :key="tag"
            class="tag reveal reveal-stagger"
            :style="{ '--stagger': i }"
          >{{ tag }}</span>
        </div>

        <div class="soft-grid">
          <div
            v-for="(skill, i) in SOFT_SKILLS"
            :key="skill.en"
            class="soft-card reveal reveal-stagger"
            :style="{ '--stagger': i }"
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
