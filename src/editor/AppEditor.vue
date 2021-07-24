<template>
  <div class="min-h-screen p-2 bg-purple-200 flex flex-col">
    <h2 class="text-xl text-purple-700 font-bold">Editor</h2>
    <div class="flex flex-1">
      <div class="w-64 p-2">
        <div class="flex justify-around">
          <button
            class="p-2 rounded text-white"
            :class="currentView === 'default' ? 'bg-blue-500' : 'bg-blue-200'"
            @click="setView('default')"
          >
            Default view
          </button>
          <button
            class="p-2 rounded text-white"
            :class="currentView === 'mobile' ? 'bg-blue-500' : 'bg-blue-200'"
            @click="setView('mobile')"
          >
            Mobile view
          </button>
        </div>
        <div v-if="!selectedElement">No selection</div>
        <template v-else>
          <div>Selected: {{ selectedElement.name }}</div>
          <ElementEditor :id="selectedElementId"></ElementEditor>
        </template>
      </div>
      <iframe id="iframe" class="mt-2 flex-1" src="_website/index.html" />
    </div>
  </div>
</template>

<script>
import ElementEditor from './ElementEditor'

export default {
  name: 'AppEditor',
  components: { ElementEditor },
  computed: {
    selectedElement() {
      return this.$store.getters.getSelectedElement
    },
    selectedElementId() {
      return this.$store.getters.getSelectedElementId
    },
    currentView() {
      return this.$store.state.currentView
    },
  },
  methods: {
    setView(view) {
      this.$store.commit('setCurrentView', view)
    },
  },
}
</script>
