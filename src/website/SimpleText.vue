<template>
  <div>{{ content.text }}</div>
</template>

<script>
export default {
  props: {
    wwElementState: { type: Object, required: true },
    content: { type: Object, required: true },
  },
  updated() {
    console.log('pouet', this.wwElementState.id)
  },
}
</script>
