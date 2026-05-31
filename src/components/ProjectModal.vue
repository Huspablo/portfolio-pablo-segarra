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

          <!-- Multiple videos mode -->
          <template v-if="videos && videos.length">
            <video
              v-if="!videoFailed"
              class="pmodal-video"
              :src="videos[currentVideo].src"
              :key="videos[currentVideo].src"
              controls
              preload="metadata"
              playsinline
              @error="videoFailed = true"
            ></video>
            <div v-else class="pmodal-video-fallback">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              <p>Vídeo no disponible</p>
            </div>
            <!-- Video tabs -->
            <div class="pmodal-vtabs" v-if="videos.length > 1">
              <button
                v-for="(v, i) in videos"
                :key="i"
                :class="['pmodal-vtab', { active: i === currentVideo }]"
                @click="selectVideo(i)"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="13" height="13"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                {{ v.title }}
              </button>
            </div>
          </template>

          <!-- Single video mode -->
          <template v-else-if="video">
            <video
              v-if="!videoFailed"
              class="pmodal-video"
              :src="video"
              controls
              preload="metadata"
              playsinline
              @error="videoFailed = true"
            ></video>
            <div v-else class="pmodal-video-fallback">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              <p>El vídeo no está disponible en esta versión.</p>
              <span>El archivo es demasiado grande para el despliegue actual.<br/>Comprímelo o súbelo a YouTube/Vimeo y actualiza la ruta en <code>src/data/projects.js</code>.</span>
            </div>
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
import { ref, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  gallery: Array,
  video: String,
  videos: Array,
  title: String,
})
const emit = defineEmits(['update:modelValue'])

const current = ref(0)
const currentVideo = ref(0)
const videoFailed = ref(false)

function close() {
  emit('update:modelValue', false)
}

function prev() {
  current.value = (current.value - 1 + props.gallery.length) % props.gallery.length
}

function next() {
  current.value = (current.value + 1) % props.gallery.length
}

function selectVideo(i) {
  if (i === currentVideo.value) return
  videoFailed.value = false
  currentVideo.value = i
}

watch(() => props.modelValue, (val) => {
  if (val) {
    current.value = 0
    currentVideo.value = 0
    videoFailed.value = false
  }
})

function onKey(e) {
  if (!props.modelValue) return
  if (e.key === 'Escape') close()
  if (e.key === 'ArrowLeft' && props.gallery?.length) prev()
  if (e.key === 'ArrowRight' && props.gallery?.length) next()
}

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>
