import AppWebsite from './AppWebsite.vue'
import { createApp } from 'vue'

const el = document.getElementById('website')
createApp(AppWebsite).use(window.wwLib.store).mount(el)
