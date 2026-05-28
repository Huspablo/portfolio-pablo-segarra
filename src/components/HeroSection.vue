<template>
  <section class="hero wrap" id="hero" data-screen-label="Hero">
    <div class="hero-grid">
      <div class="hero-copy">
        <span class="hero-status reveal">
          <span class="dot"></span>
          <span>{{ t('hero.status') }}</span>
        </span>

        <h1 class="reveal reveal-d1">
          Pablo<br /><span class="accent">Segarra</span>
        </h1>

        <div class="hero-role reveal reveal-d2">
          <span>{{ t('hero.role1') }}</span>
          <span class="sep"></span>
          <span>{{ t('hero.role2') }}</span>
        </div>

        <p class="hero-lead reveal reveal-d2">{{ t('hero.lead') }}</p>

        <div class="hero-cta reveal reveal-d3">
          <a class="btn btn-primary" href="#experience">
            <span>{{ t('hero.cta.work') }}</span>
            <span v-html="icons.arrow"></span>
          </a>
          <a class="btn btn-ghost" href="#contact">{{ t('hero.cta.contact') }}</a>
        </div>

        <div class="hero-meta reveal reveal-d3">
          <div class="stat">
            <span class="num">{{ HERO_STATS.m1 }}</span>
            <span class="lbl">{{ t('hero.m1.lbl') }}</span>
          </div>
          <div class="stat">
            <span class="num">{{ HERO_STATS.m2 }}</span>
            <span class="lbl">{{ t('hero.m2.lbl') }}</span>
          </div>
          <div class="stat">
            <span class="num">{{ HERO_STATS.m3 }}</span>
            <span class="lbl">{{ t('hero.m3.lbl') }}</span>
          </div>
        </div>
      </div>

      <div class="hero-photo reveal reveal-d2">
        <div class="photo-blob" aria-hidden="true"></div>
        <div class="photo-frame">
          <img src="/assets/pablo.jpg" alt="Pablo Segarra Husé" />
        </div>
        <div class="photo-chip chip-vue">
          <img src="https://cdn.simpleicons.org/vuedotjs" alt="" aria-hidden="true" />
          Vue 3
        </div>
        <div class="photo-chip chip-figma">
          <img src="https://cdn.simpleicons.org/figma" alt="" aria-hidden="true" />
          Figma
        </div>
        <div class="photo-chip chip-ux">
          <span>{{ t('hero.chip.ux') }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n.js'
import { icons } from '../utils/icons.js'
import { HERO_STATS } from '../data/content.js'

const { t } = useI18n()
</script>
