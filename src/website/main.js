import AppWebsite from './AppWebsite.vue'

const wwLib = window.parent.wwLib
const el = document.getElementById('website')
wwLib.createApp(AppWebsite).use(wwLib.store).mount(el)
