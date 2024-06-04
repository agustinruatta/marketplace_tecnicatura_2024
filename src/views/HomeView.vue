<template>
  <div>
    <p>Cantidad de notebooks en nuestra tienda:
      <strong id="cantidad-articulos" v-if="totalNotebooksAmount !== null">{{ totalNotebooksAmount }}</strong>
      <strong id="cantidad-articulos" v-else>Cargando...</strong>
    </p>

    <div id="listado-productos">
      <div v-if="notebooks === null">
        Cargando...
      </div>
      <div v-else v-for="(notebook, index) in notebooks" class="preview-producto" :key="index">
        <PreviewNotebook :notebook="notebook"></PreviewNotebook>
      </div>
    </div>
  </div>
</template>

<script>
import PreviewNotebook from '@/components/PreviewNotebook.vue'
import notebookService from "@/services/NotebookService.js";

export default {
  name: 'HomeView',
  components: {
    PreviewNotebook,
  },
  data() {
    return {
      notebooks: null,
      totalNotebooksAmount: null,
    }
  },
  created() {
    notebookService
        .getStatistics()
        .then((response) => {
          this.totalNotebooksAmount = response.data.amount_of_products;
        })

    notebookService
        .getNotebooks()
        .then((response) => {
          this.notebooks = response.data;
        })
  }
}
</script>

<style scoped>
#listado-productos {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  height: 500px;
  margin: 100px;
}

.preview-producto {
  height: 200px;
  border: solid black;
}

</style>