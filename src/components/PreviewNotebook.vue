<template>
  <a href="">
    <img :src="notebook.image_url" :alt="notebook.title">
    <strong>{{ notebook.title }}</strong>
  </a>
</template>

<script>
export default {
  name: 'PreviewNotebook',
  props: {
    notebook: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
  max-height: 100%;
}
</style>