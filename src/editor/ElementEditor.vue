<template>
  <div>
    Background:
    <ColorPicker :modelValue="content.bgColor" @update:modelValue="setColor"></ColorPicker>
    <div class="mt-2">
      Text:
      <input type="text" :value="content.text" @input="setText($event.target.value)" />
    </div>
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
    content() {
      if (this.state === 'default') {
        return { ...this.element.content.default }
      } else {
        return { ...this.element.content.default, ...this.element.content.mobile }
      }
    },
  },
  methods: {
    setColor(color) {
      this.$store.commit('setProperty', {
        elementId: this.id,
        path: `content.${this.state}.bgColor`,
        value: color,
      })
    },
    setText(text) {
      this.$store.commit('setProperty', {
        elementId: this.id,
        path: `content.${this.state}.text`,
        value: text,
      })
    },
  },
}
</script>
