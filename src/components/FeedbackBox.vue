<template>

    <div id="puntaje" class="box">
      <p v-for="(feedback, index) in feedbacks" :key="index">
        {{ feedback.comment }}. Puntaje: {{ feedback.score }}/5
      </p>
    </div>

    <div id="ingreso-puntaje" class="box">
      <form @submit.prevent="agregarFeedback">
        <label>
          Comentario
          <input type="text" v-model="comentario">
        </label>

        <label>
          Puntaje
          <select v-model="puntajeElegido">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>

        <input type="submit" value="Dar puntaje">
      </form>
    </div>
</template>

<script>
export default {
  name: 'FeedbackBox',
  data() {
    return {
      puntajeElegido: null,
      comentario: '',
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
    agregarFeedback() {
      if (this.puntajeElegido === null) {
        alert('Por favor, elija un puntaje');
        return;
      }

      const nuevoFeedback = {
        comment: this.comentario,
        score: this.puntajeElegido,
      }

      this.feedbacks.push(nuevoFeedback)

      this.puntajeElegido = null;
      this.comentario = '';
    }
  }
}
</script>

<style scoped>
#puntaje {
  grid-area: puntaje;
}

#ingreso-puntaje {
  grid-area: ingreso-puntaje;
}
</style>