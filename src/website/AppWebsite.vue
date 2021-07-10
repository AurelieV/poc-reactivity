<template>
  <div>
    <h2>Counting website</h2>
    <ul>
      <li v-for="(counter, name) in counters" :key="name">{{ name }}: {{ counter }}</li>
    </ul>
    <Counter :modelValue="counters['Aurélie']" @update:modelValue="setAurelie($event)"></Counter>
  </div>
</template>

<script>
import Counter from '@/common/components/Counter'

export default {
  name: 'AppWebsite',
  components: { Counter },
  computed: {
    counters() {
      return this.$store.state.counters
    },
  },
  methods: {
    setAurelie(value) {
      this.$store.dispatch('setCount', { id: 'Aurélie', value })
    },
  },
}
</script>
