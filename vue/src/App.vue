<template>
  <div class="navTab">
    <NavTab />
  </div>
</template>

<script setup>
import NavTab from './components/NavTab.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
h1 {
  font-size: 4rem;
}
</style>
