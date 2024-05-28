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
export default {
  name: 'CarroDeCompra',
  props: {
    carroDeCompras: {
      type: Array,
      required: true,
    }
  },
  computed: {
    totalCompra() {
      let total = 0;
      for (const compra of this.carroDeCompras) {
        total += compra.price;
      }
      return total;
    }
  }
}
</script>

<style scoped>
#carro-de-compras {
  grid-area: carro-de-compras;
}
</style>