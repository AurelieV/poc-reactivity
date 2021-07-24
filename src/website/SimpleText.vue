<template>
  <div>{{ content.default.text }}</div>
</template>

<script>
export default {
  props: {
    wwElementState: { type: Object, required: true },
    content: { type: Object, required: true },
  },
}
</script>
