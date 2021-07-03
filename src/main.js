import { createWebsiteApp } from './website/main.js'
import { createEditorApp } from './editor/main.js'
import store from './store'

const websiteApp = createWebsiteApp()
websiteApp.use(store)

const editorApp = createEditorApp()
editorApp.use(store)

websiteApp.mount('#website')
editorApp.mount('#editor')
