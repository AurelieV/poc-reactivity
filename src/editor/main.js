import * as Vue from 'vue'
import { createApp } from 'vue'
import AppEditor from './AppEditor.vue'
import store from '@/store'

window.wwLib = {
  createApp,
  store,
  Vue,
}
const app = createApp(AppEditor)
app.use(store).mount('#editor')
