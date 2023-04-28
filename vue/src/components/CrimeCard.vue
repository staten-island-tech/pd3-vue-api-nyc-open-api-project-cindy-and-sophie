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
  background-color: rgba(149, 175, 221, 0.863);
  border-color: blue;
  align-content: center;
  border-radius: 10px;
}
.words {
  margin-left: auto;
  margin-right: auto;
}
.crimebtn {
  border-radius: 10px;
  padding: 0.5rem 0.5rem;
}
</style>
