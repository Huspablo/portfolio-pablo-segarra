import { ref } from 'vue'

// Module-level singleton — shared across all components
const theme = ref(
  typeof localStorage !== 'undefined' ? localStorage.getItem('ps-theme') || 'light' : 'light'
)

export function useTheme() {
  function applyTheme(th) {
    theme.value = th
    document.documentElement.setAttribute('data-theme', th)
    localStorage.setItem('ps-theme', th)
  }

  return { theme, applyTheme }
}
