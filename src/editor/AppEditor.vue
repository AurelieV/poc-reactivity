<template>
  <div>
    <div class="grid grid-cols-2 gap-2">
      <div class="min-h-screen p-2 bg-purple-200">
        <h2 class="text-xl text-purple-700 font-bold">Editor</h2>
        <template v-for="(counter, name) in counters" :key="name">
          {{ name }}
          <Counter :modelValue="counter" @update:modelValue="setCounter(name, $event)" />
        </template>
      </div>
      <div class="min-h-screen p-2 bg-green-200">
        <h2 class="text-xl text-green-700 font-bold">Website</h2>
        <iframe id="iframe" src="_website/index.html"></iframe>
      </div>
    </div>
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
