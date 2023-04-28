<template>
  <div class="chart">
    <RouterLink to="/">Main</RouterLink>
    <Doughnut v-if="loaded" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { BarChart } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)
export default {
  name: 'BarChart',
  components: {
    BarChart
  },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: ['<18', '18-24', '25-44', '45-64', '65"'],
        datasets: [{ data: [] }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        backgroundColor: ['#ADD8E6']
      }
    }
  },
  async mounted() {
    try {
      const res = await fetch('https://data.cityofnewyork.us/resource/uip8-fykc.json')
      let data = await res.json()
      const lessEighteen = datasets.filter((crime) => crime.age_group === '<18')
      this.chartData.datasets[0].data.push(lessEighteen.length)
      const oneTwo = data.filter((crime) => crime.age_group === '18-24')
      this.chartData.datasets[0].data.push(oneTwo.length)
      const twoFour = data.filter((crime) => crime.age_group === '25-44')
      this.chartData.datasets[0].data.push(twoFour.length)
      const fourSix = data.filter((crime) => crime.age_group === '45-64')
      this.chartData.datasets[0].data.push(fourSix.length)
      const sixtyFive = data.filter((crime) => crime.age_group === '65+')
      this.chartData.datasets[0].data.push(sixtyFive.length)
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
    console.log(this.chartData)
  }
}
</script>

<style scoped>
h2 {
  color: #7a6e63;
  font-size: 2rem;
  text-align: center;
}
h2:hover {
  text-decoration: underline;
  transition: 1s;
  color: #7a6e63;
  font-size: 2.5rem;
}
</style>
