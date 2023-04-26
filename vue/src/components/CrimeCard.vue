<template>
  <div class="card">
    <h2>{{ arrest_key }}</h2>
    <h3>{{ arrest_date }}</h3>
    <h4>Offense Descriptions: {{ ofns_desc }}</h4>
    <button class="crime">Learn More</button>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    arrest_key: Number,
    arrest_date: Number,
    ofns_desc: String
  }
}
</script>

<style scoped>
.card {
  color: blue;
  background-color: aliceblue;
}
</style>
