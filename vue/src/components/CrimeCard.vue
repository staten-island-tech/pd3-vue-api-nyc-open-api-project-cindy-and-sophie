<template>
  <div class="card">
    <h2>{{ crime.arrest_key }}</h2>
    <h3>{{ arrest_date }}</h3>
  </div>
</template>

<script setup>
const props = {
  crime: Object,
  arrest_date: Number,
  arrest_key: Number
}
</script>

<style lang="scss" scoped></style>
