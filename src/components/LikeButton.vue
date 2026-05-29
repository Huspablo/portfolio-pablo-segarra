<template>
  <div class="like-wrap">
    <button
      :class="['like-btn', { liked, 'like-btn--pop': popping }]"
      @click="handleLike"
      :aria-label="liked ? 'Ya has dado me gusta' : 'Dar me gusta al portfolio'"
      :disabled="liked"
    >
      <svg class="like-heart" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M12 21.593c-.524-.6-6.572-7.01-7.916-9.48A5.25 5.25 0 0 1 12 5.45a5.25 5.25 0 0 1 7.916 6.663C18.572 14.583 12.524 20.993 12 21.593z"
          :fill="liked ? 'currentColor' : 'none'"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linejoin="round"
        />
      </svg>
      <span class="like-count">
        <Transition name="count" mode="out-in">
          <span :key="count">{{ count }}</span>
        </Transition>
      </span>
    </button>
    <Transition name="fade-up">
      <span v-if="showThanks" class="like-thanks">¡Gracias! 🎉</span>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const count = ref(0)
const liked = ref(false)
const popping = ref(false)
const showThanks = ref(false)

async function fetchCount() {
  try {
    const r = await fetch('/api/likes')
    const data = await r.json()
    count.value = data.likes ?? 0
  } catch {
    // API not configured yet — show 0
  }
}

async function handleLike() {
  if (liked.value) return

  liked.value = true
  localStorage.setItem('ps-liked', '1')

  // Optimistic update
  count.value++
  triggerPop()

  try {
    const r = await fetch('/api/likes', { method: 'POST' })
    const data = await r.json()
    count.value = data.likes ?? count.value
  } catch {
    // keep optimistic value
  }

  showThanks.value = true
  setTimeout(() => (showThanks.value = false), 2400)
}

function triggerPop() {
  popping.value = true
  setTimeout(() => (popping.value = false), 400)
}

onMounted(() => {
  liked.value = !!localStorage.getItem('ps-liked')
  fetchCount()
})
</script>

<style scoped>
.like-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.like-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px 8px 14px;
  border-radius: 100px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  color: var(--text-faint);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.25s, border-color 0.25s, color 0.25s, transform 0.2s;
}
.like-btn:not(:disabled):hover {
  background: var(--surface);
  border-color: var(--accent);
  color: var(--accent-deep);
  transform: translateY(-2px);
}
.like-btn:disabled { cursor: default; }
.like-btn.liked {
  color: #e05c7a;
  border-color: rgba(224, 92, 122, 0.35);
  background: rgba(224, 92, 122, 0.08);
}

.like-btn--pop .like-heart {
  animation: heart-pop 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
@keyframes heart-pop {
  0%   { transform: scale(1); }
  40%  { transform: scale(1.5); }
  70%  { transform: scale(0.88); }
  100% { transform: scale(1); }
}

.like-heart {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  transition: fill 0.2s, color 0.2s;
}
.liked .like-heart { color: #e05c7a; }

.like-count { min-width: 16px; text-align: center; }

/* Counter flip */
.count-enter-active,
.count-leave-active { transition: all 0.2s ease; }
.count-enter-from  { opacity: 0; transform: translateY(-8px); }
.count-leave-to    { opacity: 0; transform: translateY(8px); }

/* Thanks message */
.like-thanks {
  font-size: 0.84rem;
  font-weight: 600;
  color: var(--accent-deep);
}
.fade-up-enter-active,
.fade-up-leave-active { transition: all 0.3s ease; }
.fade-up-enter-from,
.fade-up-leave-to { opacity: 0; transform: translateY(6px); }
</style>
