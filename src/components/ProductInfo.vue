<template>
  <div>
    <div id="imagen" class="box">
      <img
          id="imagen-notebook"
          :src="urlImagen"
          alt="Notebook">
    </div>

    <div id="info-producto" class="box">
      <h1 id="titulo-notebook">{{ title }}</h1>

      <p>Precio: $ {{ precio }}</p>

      <div>
        <p id="descripcion-notebook">{{ description }}</p>
        <ul id="opciones-notebook">
          <li v-for="(tipoNotebook, indice) in notebooksTypes" :key="indice">Cantidad Ram:
            {{ tipoNotebook.ramAmount }} || Precio: ARS $ {{ tipoNotebook.price }}
            <button @click="seleccionarTipoNotebook(indice)">SELECCIONAR</button>
          </li>
        </ul>
      </div>

      <a :href="factory_url" id="sitio-web-fabricante">Sitio Web Fabricante</a>

      <button @click="agregarACarro">Comprar</button>

      <div>
        <img v-for="(imagen, indice) in imagenes" class="imagen-miniatura"
             @mouseover="cambiarImagen(indice)"
             :src="imagen" :alt="'Imagen computadora ' + indice"
             :key="indice"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductInfo',
  data() {
    return {
      id: 1,
      title: "Notebook HP 14-dq2024la",
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
    }
  },
  methods: {
    agregarACarro() {
      const computadoraSeleccionada = this.notebooksTypes[this.indiceTipoNotebook];
      this.$emit('click-boton-compra', computadoraSeleccionada);
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
  }
}
</script>

<style scoped>
.imagen-miniatura {
  max-width: 50px;
  max-height: 50px;
}

#imagen {
  grid-area: imagen;
}

#imagen-notebook {
  max-width: 100%;
}

#info-producto {
  grid-area: descripcion;
}
</style>