<template>
  <div>
    <h2>Counting editor</h2>
    <template v-for="(counter, name) in counters" :key="name">
      {{ name }}
      <Counter :modelValue="counter" @update:modelValue="setCounter(name, $event)"></Counter>
    </template>
  </div>
</template>

<script>
import Counter from '@/common/components/Counter'
export default {
  name: 'AppEditor',
  components: { Counter },
  computed: {
    counters() {
      return this.$store.state.counters
    },
  },
  methods: {
    setCounter(id, value) {
      this.$store.dispatch('setCount', { id, value })
    },
  },
}
</script>
