import { createStore } from 'vuex'

export default createStore({
  state: {
    carroDeCompras: [],
  },
  getters: {
    carroDeCompras(state) {
      return state.carroDeCompras;
    },
    totalCompra(state) {
      let total = 0;
      for (const compra of state.carroDeCompras) {
        total += compra.price;
      }
      return total;
    }
  },
  mutations: {
    agregarACarro(state, notebookSeleccionada) {
      state.carroDeCompras.push(notebookSeleccionada);
    }
  },
  actions: {
  },
  modules: {
  }
})
