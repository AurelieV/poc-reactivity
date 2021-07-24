import { createStore } from 'vuex'
import set from 'lodash.set'

export default createStore({
  state: {
    currentView: 'default',
    elements: {
      'el-1': {
        style: {
          default: {
            bgColor: 'bg-blue-500',
          },
          mobile: {
            bgColor: 'bg-red-500',
          },
        },
        content: {
          default: {
            text: 'Pouet',
          },
        },
        name: 'Blue one',
      },
      'el-2': {
        style: {
          default: {
            bgColor: 'bg-pink-500',
          },
        },
        content: {
          default: {
            text: 'Pouet',
          },
        },
        name: 'Blue two',
      },
      'el-3': {
        style: {
          default: {
            bgColor: 'bg-red-500',
          },
        },
        content: {
          default: {
            text: 'Pouet',
          },
        },
        name: 'Blue trois',
      },
    },
    selectionId: null,
  },
  mutations: {
    selectElement(state, elementId) {
      state.selectionId = elementId
    },
    setProperty(state, { elementId, path, value }) {
      set(state.elements[elementId], path, value)
    },
    setCurrentView(state, view) {
      state.currentView = view
    },
  },
  actions: {},
  getters: {
    getElement: (state) => (id) => {
      return state.elements[id]
    },
    getSelectedElement: (state) => (state.selectionId ? state.elements[state.selectionId] : null),
    getSelectedElementId: (state) => state.selectionId,
  },
})
