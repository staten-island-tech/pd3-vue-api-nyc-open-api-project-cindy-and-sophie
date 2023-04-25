<template>
  <h1>Good Morning</h1>
  <button>Gender</button>
  <button>Race</button>
  <div class="container">
    <CrimeCard
      v-for="(crimes, index) in crime"
      :key="crime.arrest_key"
      :arrest_date="index + 1"
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
