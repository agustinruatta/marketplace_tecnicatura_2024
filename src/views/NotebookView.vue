<template>
  <div id="pantalla">
    <div id="buscador" class="box">
      <form action="/buscador">
        <label>
          Buscar artículo
          <input type="text">
          <input type="submit" value="Buscar">
        </label>
      </form>
    </div>

    <CarroDeCompra/>

    <ProductInfo :id="id"></ProductInfo>

    <FeedbackBox></FeedbackBox>
  </div>
</template>

<script>
import CarroDeCompra from '@/components/CarroDeCompra.vue'
import ProductInfo from "@/components/ProductInfo.vue";
import FeedbackBox from "@/components/FeedbackBox.vue";

export default {
  name: 'NotebookView',
  props: {
    id: {
      required: true,
      type: String,
    }
  },
  components: {
    CarroDeCompra,
    ProductInfo,
    FeedbackBox,
  },
  data() {
    return {
    }
  },
}
</script>

<style scoped>
#pantalla {
  display: grid;
  grid-template-columns: 30% auto;
  grid-template-areas: 'buscador carro-de-compras'
                            'imagen descripcion'
                            'puntaje puntaje'
                            'ingreso-puntaje ingreso-puntaje';
}

#buscador {
  grid-area: buscador;
}


</style>