import { ref } from 'vue'
import { I18N } from '../data/content.js'

// Module-level singleton — shared across all components
const lang = ref(
  typeof localStorage !== 'undefined' ? localStorage.getItem('ps-lang') || 'es' : 'es'
)

export function useI18n() {
  function t(key) {
    return I18N[lang.value]?.[key] ?? key
  }

  function applyLang(l) {
    lang.value = l
    localStorage.setItem('ps-lang', l)
    document.documentElement.lang = l
  }

  return { lang, t, applyLang }
}
