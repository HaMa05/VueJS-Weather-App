<template>
  <div class="days d-flex justify-content-between flex-wrap mt-4">
    <weather-forecast-day v-for="day in days" :key="day.date" :day="day" />
  </div>
</template>

<script>
import WeatherForecastDay from "./WeatherForecastDay.vue";
export default {
  name: "WeatherForecastDays",
  components: {
    WeatherForecastDay,
  },
  props: {
    days: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>