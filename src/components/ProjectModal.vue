<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="modelValue" class="pmodal-overlay" @click.self="close" role="dialog" aria-modal="true">
        <div class="pmodal-box" :style="id ? { viewTransitionName: 'vt-project-' + id } : {}">
          <button class="pmodal-close icon-btn" @click="close" aria-label="Cerrar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M6 6l12 12M18 6L6 18"/>
            </svg>
          </button>

          <!-- Tabs when more than one media type is available -->
          <div class="pmodal-mtabs" v-if="hasVideo && hasGallery">
            <button :class="['pmodal-mtab', { active: view === 'video' }]" @click="view = 'video'">
              {{ videoTabLabel }}
            </button>
            <button :class="['pmodal-mtab', { active: view === 'gallery' }]" @click="view = 'gallery'">
              {{ galleryTabLabel }}
            </button>
          </div>

          <!-- Multiple videos mode -->
          <template v-if="view === 'video' && videos && videos.length">
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
            <!-- Video sub-tabs -->
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
          <template v-else-if="view === 'video' && video">
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
          <template v-else-if="view === 'gallery' && gallery && gallery.length">
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
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../composables/useI18n.js'

const props = defineProps({
  modelValue: Boolean,
  id: String,
  gallery: Array,
  video: String,
  videos: Array,
  title: String,
  initialView: String,
})
const emit = defineEmits(['update:modelValue'])

const { lang } = useI18n()

const current = ref(0)
const currentVideo = ref(0)
const videoFailed = ref(false)
const view = ref('video')

const hasVideo = computed(() => !!(props.video || props.videos?.length))
const hasGallery = computed(() => !!props.gallery?.length)
const videoTabLabel = computed(() => lang.value === 'es' ? 'Vídeo' : 'Video')
const galleryTabLabel = computed(() => lang.value === 'es' ? 'Capturas' : 'Screenshots')

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
    view.value = props.initialView || (hasVideo.value ? 'video' : 'gallery')
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
