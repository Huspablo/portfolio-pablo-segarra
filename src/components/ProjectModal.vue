<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="modelValue" class="pmodal-overlay" @click.self="close" role="dialog" aria-modal="true">
        <div class="pmodal-box">
          <button class="pmodal-close icon-btn" @click="close" aria-label="Cerrar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M6 6l12 12M18 6L6 18"/>
            </svg>
          </button>

          <!-- Video mode -->
          <template v-if="video">
            <video
              class="pmodal-video"
              :src="video"
              controls
              preload="metadata"
              playsinline
            ></video>
          </template>

          <!-- Gallery mode -->
          <template v-else-if="gallery && gallery.length">
            <div class="pmodal-gallery">
              <img
                class="pmodal-img"
                :src="gallery[current]"
                :alt="`${title} — imagen ${current + 1}`"
              />
              <div class="pmodal-nav" v-if="gallery.length > 1">
                <button class="pmodal-arrow" @click="prev" aria-label="Anterior">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <span class="pmodal-counter">{{ current + 1 }} / {{ gallery.length }}</span>
                <button class="pmodal-arrow" @click="next" aria-label="Siguiente">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 18l6-6-6-6"/></svg>
                </button>
              </div>
              <!-- Dot indicators -->
              <div class="pmodal-dots" v-if="gallery.length > 1">
                <button
                  v-for="(_, i) in gallery"
                  :key="i"
                  :class="['pmodal-dot', { active: i === current }]"
                  @click="current = i"
                  :aria-label="`Imagen ${i + 1}`"
                ></button>
              </div>
            </div>
          </template>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  gallery: Array,
  video: String,
  title: String,
})
const emit = defineEmits(['update:modelValue'])

const current = ref(0)

function close() {
  emit('update:modelValue', false)
}

function prev() {
  current.value = (current.value - 1 + props.gallery.length) % props.gallery.length
}

function next() {
  current.value = (current.value + 1) % props.gallery.length
}

// Reset on open
watch(() => props.modelValue, (val) => {
  if (val) current.value = 0
})

// Keyboard navigation
function onKey(e) {
  if (!props.modelValue) return
  if (e.key === 'Escape') close()
  if (e.key === 'ArrowLeft' && props.gallery?.length) prev()
  if (e.key === 'ArrowRight' && props.gallery?.length) next()
}

import { onMounted, onUnmounted } from 'vue'
onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>
