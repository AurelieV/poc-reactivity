<template>
  <div>
    Background:
    <ColorPicker :modelValue="style.bgColor" @update:modelValue="setColor"></ColorPicker>
  </div>
</template>

<script>
import ColorPicker from './ColorPicker'

export default {
  components: { ColorPicker },
  props: { id: { type: String, required: true } },
  computed: {
    element() {
      return this.$store.getters.getElement(this.id)
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
    setColor(color) {
      this.$store.commit('setProperty', {
        elementId: this.id,
        path: `style.${this.state}.bgColor`,
        value: color,
      })
    },
  },
}
</script>
