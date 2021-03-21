<template>
  <div>
    <h1>I am {{ whoami }}</h1>
    <nuxt-link to="/">back</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'About',
  computed: {
    whoami() {
      return this.$route.params.who;
    },
  },
});
</script>

<style scoped></style>
