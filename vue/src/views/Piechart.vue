<template>
  <div class="chart2">
    <Pie id="PieChart" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
ChartJS.register(ArcElement, Tooltip, Legend)
export default {
  name: 'PieChart',
  components: {
    Pie
  },
  props: {
    chartOptions: {
      type: Object,
      required: true,
      default: () => ({
        responsive: true
      })
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: [
          'Black',
          'White Hispanic',
          'White',
          'Black Hispanic',
          'Asian/Pacific Islander',
          'American Indian/Alskan Native',
          'Unknown'
        ],
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
      const black = data.filter((crime) => crime.race === 'Black')
      this.chartData.datasets[0].data.push(black.length)
      const whispanic = data.filter((crime) => crime.race === 'White Hispanic')
      this.chartData.datasets[0].data.push(whispanic.length)
      const white = data.filter((crime) => crime.race === 'White')
      this.chartData.datasets[0].data.push(white.length)
      const bhispanic = data.filter((crime) => crime.race === 'Black Hispanic')
      this.chartData.datasets[0].data.push(bhispanic.length)
      const asian = data.filter((crime) => crime.race === 'Asian/Pacific Islander')
      this.chartData.datasets[0].data.push(asian.length)
      const american = data.filter((crime) => crime.race === 'American Indian/Alaskan Native')
      this.chartData.datasets[0].data.push(american.length)
      const unknown = data.filter((crime) => crime.race === 'Unknown')
      this.chartData.datasets[0].data.push(unknown.length)
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
