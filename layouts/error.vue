<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">page not found</h1>
    <h1 v-else>what the hell</h1>
    <nuxt-link to="/">home</nuxt-link>
  </div>
</template>

<script>
  export default {
    props: ['error'],
  }
</script>