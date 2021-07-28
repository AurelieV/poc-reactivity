<template>
  <div
    :class="[`${content.bgColor}`, { 'outline-black': wwElementState.isSelected }]"
    class="w-20 h-20"
    @click="selectElement"
  >
    <SimpleText :wwElementState="wwElementState" :content="content"></SimpleText>
  </div>
</template>

<script>
import SimpleText from './SimpleText'
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'

import { eagerComputed } from '@/common/helpers/reactivity'
import useContent from '@/common/helpers/useContent'

export default {
  components: { SimpleText },
  props: { elementId: { type: String, required: true } },
  setup(props) {
    const store = useStore()
    const { elementId } = toRefs(props)
    const isSelected = eagerComputed(() => store.getters.getSelectedElementId === elementId.value)

    const wwElementState = reactive({
      isSelected,
      id: elementId,
    })

    return { wwElementState, content: useContent(elementId) }
  },
  computed: {
    element() {
      return this.$store.getters.getElement(this.elementId)
    },
    state() {
      return this.$store.state.currentView
    },
  },
  methods: {
    selectElement() {
      return this.$store.commit('selectElement', this.elementId)
    },
  },
}
</script>
