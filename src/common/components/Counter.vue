<template>
  <div class="flex items-center">
    <div class="mr-2">{{ modelValue }}</div>
    <button class="p-2 rounded-full" @click="$emit('update:modelValue', modelValue + 1)">➕</button>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: { type: Number, required: true },
  },
}
</script>
