app.component('carro-de-compra', {
    props: {
        carroDeCompras: {
            type: Array,
            required: true,
        }
    },
    template: `
    <div class="box" id="carro-de-compras">
        <h3>Carro de compras</h3>
        <ul>
            <li v-for="computadoraComprada in carroDeCompras">
                Computadora {{ computadoraComprada.ramAmount }}: $ {{ computadoraComprada.price }}
            </li>
            <li><strong>Total: $ {{ totalCompra }}</strong></li>
        </ul>
    </div>
    `,
    computed: {
        totalCompra() {
            let total = 0;
            for (const compra of this.carroDeCompras) {
                total += compra.price;
            }
            return total;
        }
    }
})