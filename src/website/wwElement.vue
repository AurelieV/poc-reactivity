<template>
  <div
    :class="[`${style.bgColor}`, { 'outline-black': wwElementState.isSelected }]"
    class="w-20 h-20"
    @click="selectElement"
  >
    <SimpleText :wwElementState="wwElementState" :content="element.content"></SimpleText>
  </div>
</template>

<script>
import SimpleText from './SimpleText'
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'

import { eagerComputed } from '@/common/helpers/reactivity'

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

    return { wwElementState }
  },
  computed: {
    element() {
      return this.$store.getters.getElement(this.elementId)
    },
    state() {
      return this.$store.state.currentView
    },
    style() {
      if (this.state === 'default') {
        return this.element.style.default
      } else {
        return { ...this.element.style.default, ...this.element.style.mobile }
      }
    },
  },
  methods: {
    selectElement() {
      return this.$store.commit('selectElement', this.elementId)
    },
  },
}
</script>
