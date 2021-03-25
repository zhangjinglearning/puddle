<template>
  <div class="loading-box" v-if="loading">
    <a class="loading-button">Loading</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    },
  },
});
</script>

<style scoped>
@keyframes bouncing {
  0% {
    bottom: 0;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
  100% {
    bottom: 50px;
    box-shadow: 0 50px 50px rgba(0, 0, 0, 0.1);
  }
}

.loading-box {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background-color: rgba(255,0,0,0.3);
}

.loading-button {
  animation: bouncing 0.5s cubic-bezier(0.1, 0.25, 0.1, 1) 0s infinite alternate
    both;
  background: lightslategrey;
  border-radius: 2px;
  display: inline-block;
  color: white;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 300;
  letter-spacing: 0.2em;
  padding: 1em 2em 1.1em;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  vertical-align: top;
}
</style>
