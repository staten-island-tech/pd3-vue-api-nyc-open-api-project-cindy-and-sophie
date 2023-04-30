<template>
  <h1>Crime Data</h1>
  <button>Gender: Bar Chart</button>
  <button>Race: Pie Chart</button>
  <div class="container">
    <Card
      v-for="crime in crime"
      :arrest_key="crime.arrest_key"
      :arrest_date="crime.arrest_date"
      :ofns_desc="crime.ofns_desc"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Card from '../src/components/CrimeCard.vue'
import { RouterLink, RouterView } from 'vue-router'

const crime = ref('')
async function getCrime() {
  let res = await fetch('https://data.cityofnewyork.us/resource/uip8-fykc.json')
  let data = await res.json()
  crime.value = data
}
onMounted(() => {
  getCrime()
})
</script>

<style scoped>
.container {
  width: 80vw;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>
