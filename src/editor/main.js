import { createApp } from 'vue'
import AppEditor from './AppEditor.vue'
import store from '@/store'

window.wwLib = {
  createApp,
  store,
}
const app = createApp(AppEditor)
app.use(store).mount('#app')
