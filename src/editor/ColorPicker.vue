<template>
  <div class="flex justify-center gap-2 p-2 bg-white">
    <div
      v-for="color in colors"
      :key="color"
      class="w-4 h-4 cursor-pointer"
      :class="[color, { 'outline-black': color === modelValue }]"
      @click="selectColor(color)"
    ></div>
  </div>
</template>

<script>
const COLORS = ['blue', 'red', 'pink', 'green', 'yellow', 'indigo', 'gray']

export default {
  props: { modelValue: { type: String, required: true } },
  emits: ['update:modelValue'],
  setup() {
    const colors = COLORS.map((color) => `bg-${color}-500`)
    return { colors }
  },
  methods: {
    selectColor(color) {
      this.$emit('update:modelValue', color)
    },
  },
}
</script>
