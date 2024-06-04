<template>
  <div v-if="notebook === null">
    <h1>Cargando...</h1>
  </div>

  <div id="imagen" class="box" v-if="notebook !== null">
    <img
        id="imagen-notebook"
        :src="urlImagen"
        alt="Notebook">
  </div>

  <div id="info-producto" class="box" v-if="notebook !== null">
    <h1 id="titulo-notebook">{{ notebook.title }}</h1>

    <p>Precio: $ {{ precio }}</p>

    <div>
      <p id="descripcion-notebook">{{ notebook.description }}</p>
      <ul id="opciones-notebook">
        <li v-for="(tipoNotebook, indice) in notebook.notebooksTypes" :key="indice">Cantidad Ram:
          {{ tipoNotebook.ramAmount }} || Precio: ARS $ {{ tipoNotebook.price }}
          <button @click="seleccionarTipoNotebook(indice)">SELECCIONAR</button>
        </li>
      </ul>
    </div>

    <a :href="notebook.factory_url" id="sitio-web-fabricante">Sitio Web Fabricante</a>

    <button @click="agregarACarro">Comprar</button>

    <div>
      <img v-for="(imagen, indice) in notebook.image_urls" class="imagen-miniatura"
           @mouseover="cambiarImagen(indice)"
           :src="imagen" :alt="'Imagen computadora ' + indice"
           :key="indice"
      >
    </div>
  </div>
</template>

<script>
import notebookService from "@/services/NotebookService.js";

export default {
  name: 'ProductInfo',
  data() {
    return {
      notebook: null,
      indiceImagen: 0,
      indiceTipoNotebook: 0,
    }
  },
  async created() {
    const response = await notebookService.getNotebook();

    this.notebook = response.data;
  },
  methods: {
    agregarACarro() {
      const computadoraSeleccionada = this.notebook.notebooksTypes[this.indiceTipoNotebook];
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
      return this.notebook.image_urls[this.indiceImagen];
    },
    precio() {
      return this.notebook.notebooksTypes[this.indiceTipoNotebook].price;
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