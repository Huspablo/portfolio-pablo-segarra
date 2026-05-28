import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import App from './App.vue'
import './styles/main.css'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
  },
})

createApp(App).use(vuetify).mount('#app')
