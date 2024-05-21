const app = Vue.createApp({
    data() {
        return {
            carroDeCompras: [],
            feedbacks: [
                {
                    comment: 'Excelente producto',
                    score: 5
                },
                {
                    comment: 'Bastante bueno',
                    score: 4
                }
            ]
        }
    },
    methods: {
        agregarACarro(computadoraSeleccionada) {
            this.carroDeCompras.push(computadoraSeleccionada);
        }
    },
})
