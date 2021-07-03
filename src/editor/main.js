import { createApp } from 'vue'
import AppEditor from './AppEditor.vue'

export function createEditorApp() {
  return createApp(AppEditor)
}
