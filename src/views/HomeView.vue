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
import axios from 'axios';

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
    axios
        .get('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/statistics')
        .then((response) => {
          this.totalNotebooksAmount = response.data.amount_of_products;
        })

    axios
        .get('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products')
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