<template>
  <section class="hero wrap" id="hero" data-screen-label="Hero">
    <div class="hero-grid">
      <div class="hero-copy">
        <h1 class="reveal">
          Pablo<br /><span class="accent">Segarra</span>
        </h1>

        <div class="hero-role reveal reveal-d1">
          <span>{{ t('hero.role1') }}</span>
          <span class="sep"></span>
          <span>{{ t('hero.role2') }}</span>
        </div>

        <p class="hero-lead reveal reveal-d1">{{ t('hero.lead') }}</p>

        <div class="hero-cta reveal reveal-d2">
          <a class="btn btn-primary" href="#experience">
            <span>{{ t('hero.cta.work') }}</span>
            <span v-html="icons.arrow"></span>
          </a>
          <a class="btn btn-ghost" href="#contact">{{ t('hero.cta.contact') }}</a>
        </div>

        <div class="hero-meta reveal reveal-d2">
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

      <div class="hero-photo reveal reveal-d1">
        <div class="photo-frame">
          <img src="/assets/pablo.webp" alt="Pablo Segarra Husé" />
        </div>
        <TerminalCard />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n.js'
import { icons } from '../utils/icons.js'
import { HERO_STATS } from '../data/content.js'
import TerminalCard from './TerminalCard.vue'

const { t } = useI18n()
</script>
