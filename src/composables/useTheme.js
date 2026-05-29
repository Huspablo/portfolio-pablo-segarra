import { ref } from 'vue'

const theme = ref(
  typeof localStorage !== 'undefined' ? localStorage.getItem('ps-theme') || 'light' : 'light'
)

export function useTheme() {
  function applyTheme(th) {
    if (document.startViewTransition) {
      document.startViewTransition(() => _set(th))
    } else {
      _set(th)
    }
  }

  function _set(th) {
    theme.value = th
    document.documentElement.setAttribute('data-theme', th)
    localStorage.setItem('ps-theme', th)
  }

  return { theme, applyTheme }
}
