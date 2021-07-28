import { reactive, computed } from 'vue'
import { useStore } from 'vuex'

import { eagerComputed } from '@/common/helpers/reactivity'

function getProperty(states, content, key) {
  return states.reduce((val, state) => (content[state] && content[state][key]) || val, undefined)
}

export default function useContent(elementId) {
  const store = useStore()
  const states = computed(() => {
    if (store.state.currentView === 'default') {
      return ['default']
    } else {
      return ['default', 'mobile']
    }
  })
  const element = computed(() => store.getters.getElement(elementId.value))

  const content = reactive({
    bgColor: eagerComputed(() => getProperty(states.value, element.value.content, 'bgColor')),
    text: eagerComputed(() => getProperty(states.value, element.value.content, 'text')),
  })

  return content
}
