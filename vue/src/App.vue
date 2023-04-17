<template>
  <div></div>
</template>

<script setup>
import { ref, watch } from 'vue'

const todoId = ref(1)
const todoData = ref(null)

async function fetchData() {
  todoData.value = null
  const res = await fetch(
    `https://data.cityofnewyork.us/resource/uip8-fykc.json?$query=SELECT%0A%20%20%60arrest_key%60%2C%0A%20%20%60arrest_date%60%2C%0A%20%20%60pd_cd%60%2C%0A%20%20%60pd_desc%60%2C%0A%20%20%60ky_cd%60%2C%0A%20%20%60ofns_desc%60%2C%0A%20%20%60law_code%60%2C%0A%20%20%60law_cat_cd%60%2C%0A%20%20%60arrest_boro%60%2C%0A%20%20%60arrest_precinct%60%2C%0A%20%20%60jurisdiction_code%60%2C%0A%20%20%60age_group%60%2C%0A%20%20%60perp_sex%60%2C%0A%20%20%60perp_race%60%2C%0A%20%20%60x_coord_cd%60%2C%0A%20%20%60y_coord_cd%60%2C%0A%20%20%60latitude%60%2C%0A%20%20%60longitude%60%2C%0A%20%20%60geocoded_column%60%2C%0A%20%20%60%3A%40computed_region_f5dn_yrer%60%2C%0A%20%20%60%3A%40computed_region_yeji_bk3q%60%2C%0A%20%20%60%3A%40computed_region_92fq_4b7q%60%2C%0A%20%20%60%3A%40computed_region_sbqj_enih%60%2C%0A%20%20%60%3A%40computed_region_efsh_h5xi%60`
  )
}
todoData.value = await res.json()
</script>

<style lang="scss" scoped></style>
