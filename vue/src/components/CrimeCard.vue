<template>
  <div class="card">
    <h2 class="words">{{ arrest_key }}</h2>
    <h3 class="words">{{ arrest_date }}</h3>
    <h4 class="words">Offense Descriptions: {{ ofns_desc }}</h4>
    <button class="crimebtn">Learn More</button>
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
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-bottom: 20px;
  width: 20vw;
  color: rgb(0, 0, 0);
  background-color: rgb(144, 173, 193);
  align-content: center;
}
.words {
  margin-left: 10px;
}
</style>
