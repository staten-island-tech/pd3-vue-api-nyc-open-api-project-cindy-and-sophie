<template>
  <div class="chart">
    <Bar v-if="loaded" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
  name: 'BarChart',
  components: {
    Bar
  },
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      chartData: {
        labels: ['<18', '18-24', '25-44', '45-64', '65"'],
        datasets: [{ data: [] }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        backgroundColor: ['#ADD8E6']
      },
      loaded: false
    }
  },
  mounted() {
    this.getChartData()
  },
  methods: {
    getChartData: async function () {
      this.loaded = false
      try {
        let res = await fetch('https://data.cityofnewyork.us/resource/uip8-fykc.json')
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
    }
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
