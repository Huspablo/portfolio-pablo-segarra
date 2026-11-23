import { nextTick } from 'vue'

let io = null

function getObserver() {
  if (!io) {
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in')
            io.unobserve(en.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
    )
  }
  return io
}

export function useReveal() {
  async function observeAll() {
    await nextTick()
    const vh = window.innerHeight || 800
    document.querySelectorAll('.reveal:not(.in)').forEach((n) => {
      if (n.getBoundingClientRect().top < vh * 0.92) {
        n.classList.add('in')
      } else {
        getObserver().observe(n)
      }
    })
  }

  return { observeAll }
}
