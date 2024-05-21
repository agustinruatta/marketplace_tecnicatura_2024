const app = Vue.createApp({
    data() {
        return {
            carroDeCompras: [],
        }
    },
    methods: {
        agregarACarro(computadoraSeleccionada) {
            this.carroDeCompras.push(computadoraSeleccionada);
        }
    },
})
