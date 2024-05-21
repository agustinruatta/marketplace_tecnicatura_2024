const app = Vue.createApp({
    data() {
        return {
            notebooks: [
                {
                    "id": 1,
                    "title": "Notebook HP 14-dq2024la",
                    "description": "Computadora HP orientado para gama media. Procesador Intel® Core™ i3 de 11.ª generación.  Windows 10 Home 64.  Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB . Pantalla de 14 pulgadas.",
                    "image_url": "https://ar-media.hptiendaenlinea.com/catalog/product/8/V/8VW01LA-1_T1615590539.png",
                    "factory_url": "https://www.hp.com/ar-es/shop/notebook-hp-14-dq2024la-3v8j6la.html",
                    "notebooksTypes": [
                        {
                            "ramAmount": "8 GB",
                            "price": 98038
                        },
                        {
                            "ramAmount": "16 GB",
                            "price": 122547
                        }
                    ]
                },
                {
                    "id": 2,
                    "title": "Notebook Max L5 i7 Microsoft 365 Personal ",
                    "description": "Computadora de uso personal. Intel Core i7. 480GB SATA. 8GB RAM.",
                    "image_url": "https://bangho.vtexassets.com/arquivos/ids/160155/Notebook-Max-L5-i5-cuotas-sin-interes.jpg?v=637697603076200000",
                    "factory_url": "https://www.bangho.com.ar/notebook-max-l5-15-6-hd-intel-core-i7-8gb-480gb-ssd-windows-11-microsoft-365/p",
                    "notebooksTypes": [
                        {
                            "ramAmount": "8 GB",
                            "price": 189049
                        },
                        {
                            "ramAmount": "16 GB",
                            "price": 236311
                        }
                    ]
                },
                {
                    "id": 3,
                    "title": "Notebook N14WCE128 14\" IntelCeleron N3350 128GB Noblex",
                    "description": "Procesador Intel® Celeron® N3350. Pantalla 14.1” 1366*768 TN. Memoria 4GB. Almacenamiento 128GB SSD.",
                    "image_url": "https://noblex.com.ar/media/catalog/product/cache/aa999612044d357928d16abd893bc3dd/1/_/1_5_1.jpg",
                    "factory_url": "https://noblex.com.ar/notebook-n14wce128-14-intelceleron-n3350-128gb-noblex.html",
                    "notebooksTypes": [
                        {
                            "ramAmount": "8 GB",
                            "price": 55999
                        },
                        {
                            "ramAmount": "16 GB",
                            "price": 69998
                        }
                    ]
                },
                {
                    "id": 4,
                    "title": "Notebook Dell 3190 Intel Celeron 4Gb SSD 128Gb 11,6\" HD Windows 10",
                    "description": "Intel Celeron N4120. Memoria: 4GB 2400MHz DDR4. Graficos Intel Integrados.",
                    "image_url": "https://www.bidcom.com.ar/publicacionesML/productos/NOT00260/1000x1000-NOT00260.jpg",
                    "factory_url": "https://www.bidcom.com.ar/notebooks/notebook-dell-3190-intel-celeron-4gb-ssd-128gb-11-6-pulg-windows-10",
                    "notebooksTypes": [
                        {
                            "ramAmount": "8 GB",
                            "price": 48099
                        },
                        {
                            "ramAmount": "16 GB",
                            "price": 60123
                        }
                    ]
                }
            ]
        }
    }
})

app.mount('#app')