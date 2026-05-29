<template>
  <!-- Like section -->
  <section class="like-section wrap">
    <div class="like-section-inner reveal">
      <p class="like-question">{{ lang === 'es' ? '¿Te ha gustado el portfolio?' : 'Did you enjoy the portfolio?' }}</p>
      <LikeButton />
    </div>
  </section>

  <footer class="footer">
    <div class="wrap footer-grid">
      <p>
        &copy; {{ year }} Pablo Segarra Husé —
        <span>{{ t('footer.rights') }}</span>
      </p>
      <div class="footer-socials">
        <a
          class="icon-btn"
          href="https://www.linkedin.com/in/pablo-segarra/"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
          v-html="icons.linkedin"
        ></a>
        <a
          class="icon-btn"
          href="https://github.com/Huspablo"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
          v-html="icons.github"
        ></a>
        <a
          class="icon-btn"
          href="mailto:huspablo11@gmail.com"
          aria-label="Email"
          v-html="icons.mail"
        ></a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import LikeButton from './LikeButton.vue'
import { useI18n } from '../composables/useI18n.js'
import { icons } from '../utils/icons.js'

const { lang, t } = useI18n()
const year = new Date().getFullYear()
</script>
