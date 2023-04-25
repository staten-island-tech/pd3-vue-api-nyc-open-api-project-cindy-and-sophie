<template>
  <h1>Crime Data</h1>
  <button>Gender: Bar Chart</button>
  <button>Race: Pie Chart</button>
  <div class="container">
    <CrimeCard
      v-for="crime in crime"
      :key="crime.arrest_key"
      :arrest_date="crime.arrest_date"
      :crime="crimes"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CrimeCard from '../src/components/CrimeCard.vue'

const crime = ref('')
async function getCrime() {
  let res = await fetch('https://data.cityofnewyork.us/resource/uip8-fykc.json')
  let data = await res.json()
  crime.value = data.crime
}
onMounted(() => {
  getCrime()
})
console.log(crime)
</script>

<style lang="scss" scoped></style>
