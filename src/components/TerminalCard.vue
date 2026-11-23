<template>
  <div class="term-card" aria-hidden="true">
    <div class="term-body-wrap">
      <!-- Invisible sizer: renders the final, fully-typed content once so the
           wrapper's height never changes while the lines above animate. -->
      <div class="term-body term-body--sizer">
        <div v-for="(l, i) in LINES" :key="'s' + i" :class="['term-line', 'term-' + l.type]">
          <span v-if="l.type === 'in'" class="term-prompt">&gt;</span>{{ l.text }}
        </div>
        <div class="term-line term-cursor-line"><span class="term-cursor term-cursor--still"></span></div>
      </div>

      <div class="term-body term-body--visible">
        <div v-for="(l, i) in doneLines" :key="'d' + i" :class="['term-line', 'term-' + l.type]">
          <span v-if="l.type === 'in'" class="term-prompt">&gt;</span>{{ l.text }}
        </div>
        <div v-if="!typingDone" :class="['term-line', 'term-' + currentType]">
          <span v-if="currentType === 'in'" class="term-prompt">&gt;</span>{{ currentText }}<span class="term-cursor"></span>
        </div>
        <div v-else class="term-line term-cursor-line"><span class="term-cursor term-cursor--still"></span></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const LINES = [
  { type: 'in', text: "const dev = new Frontend('Pablo Segarra')" },
  { type: 'in', text: 'dev.stack' },
  { type: 'out', text: "['Vue 3', 'Vuetify', 'UX/UI']" },
  { type: 'in', text: 'dev.status' },
  { type: 'out', text: "'building'" },
]

const doneLines = ref([])
const currentText = ref('')
const currentType = ref('in')
const typingDone = ref(false)

let charTimer = null
let lineTimer = null

function typeLines(reduceMotion) {
  if (reduceMotion) {
    doneLines.value = LINES
    typingDone.value = true
    return
  }

  let li = 0
  function typeLine() {
    if (li >= LINES.length) {
      typingDone.value = true
      return
    }
    const line = LINES[li]
    currentType.value = line.type
    currentText.value = ''
    let ci = 0
    const speed = line.type === 'out' ? 10 : 26
    charTimer = setInterval(() => {
      ci++
      currentText.value = line.text.slice(0, ci)
      if (ci >= line.text.length) {
        clearInterval(charTimer)
        doneLines.value = [...doneLines.value, { type: line.type, text: line.text }]
        currentText.value = ''
        li++
        lineTimer = setTimeout(typeLine, 220)
      }
    }, speed)
  }
  typeLine()
}

onMounted(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  typeLines(reduceMotion)
})

onUnmounted(() => {
  if (charTimer) clearInterval(charTimer)
  if (lineTimer) clearTimeout(lineTimer)
})
</script>
