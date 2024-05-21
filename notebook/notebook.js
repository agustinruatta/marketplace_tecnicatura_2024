Vue.createApp({
    data() {
        return {
            id: 1,
            title: "Notebook HP 14-dq2024la",
            carroDeCompras: [],
            description: "Computadora HP orientado para gama media. Procesador Intel® Core™ i3 de 11.ª generación.  Windows 10 Home 64.  Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB . Pantalla de 14 pulgadas.",
            indiceImagen: 0,
            indiceTipoNotebook: 0,
            imagenes: [
                'https://ar-media.hptiendaenlinea.com/catalog/product/8/V/8VW01LA-1_T1615590539.png',
                'https://bangho.vtexassets.com/arquivos/ids/160155/Notebook-Max-L5-i5-cuotas-sin-interes.jpg?v=637697603076200000',
            ],
            factory_url: "https://www.hp.com/ar-es/shop/notebook-hp-14-dq2024la-3v8j6la.html",
            notebooksTypes: [
                {
                    ramAmount: "8 GB",
                    price: 98038
                },
                {
                    ramAmount: "16 GB",
                    price: 122547
                }
            ],
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
        agregarACarro() {
            const computadoraSeleccionada = this.notebooksTypes[this.indiceTipoNotebook];
            this.carroDeCompras.push(computadoraSeleccionada);
        },
        cambiarImagen(indice) {
            this.indiceImagen = indice;
        },
        seleccionarTipoNotebook(indice) {
            this.indiceTipoNotebook = indice;
        }
    },
    computed: {
        urlImagen() {
            return this.imagenes[this.indiceImagen];
        },
        precio() {
            return this.notebooksTypes[this.indiceTipoNotebook].price;
        },
        totalCompra() {
            let total = 0;
            for(const compra of this.carroDeCompras) {
                total += compra.price;
            }
            return total;
        }
    }
}).mount('#pantalla')
