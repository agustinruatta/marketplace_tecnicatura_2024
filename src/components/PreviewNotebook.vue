<template>
  <router-link :to="{name: 'NotebookInfo', params: {id: notebook.id}}">
    <img :src="notebook.image_urls[0]" :alt="notebook.title">
    <strong>{{ notebook.title }}</strong>
  </router-link>
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