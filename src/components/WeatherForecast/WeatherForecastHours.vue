<template>
  <div class="weather-forecast-hours d-flex mt-4">
    <weather-forecast-hour
      v-for="forecast in forcastInfo"
      :key="forecast.date_epoch"
      :dayInfo="forecast"
    />
  </div>
</template>

<script>
import WeatherForecastHour from "./WeatherForecastHour.vue";
export default {
  components: { WeatherForecastHour },
  name: "WeatherForecastHours",
  props: {
    forcastInfo: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.weather-forecast-hours .weather-forecast-hour {
  &:first-child {
    .weather-forecast-item {
      &:first-child {
        margin-left: 100rem;
      }
    }
  }
}
</style>