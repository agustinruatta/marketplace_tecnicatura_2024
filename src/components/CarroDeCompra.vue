<template>
  <div class="box" id="carro-de-compras">
    <h3>Carro de compras</h3>
    <ul>
      <li v-for="(computadoraComprada, index) in carroDeCompras" :key="index">
        Computadora {{ computadoraComprada.ramAmount }}: $ {{ computadoraComprada.price }}
      </li>
      <li><strong>Total: $ {{ totalCompra }}</strong></li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'CarroDeCompra',
  computed: {
    ...mapGetters(['carroDeCompras', 'totalCompra']),
  }
}
</script>

<style scoped>
#carro-de-compras {
  grid-area: carro-de-compras;
}
</style>