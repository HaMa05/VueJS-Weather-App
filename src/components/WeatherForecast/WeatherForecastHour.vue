<template>
  <div class="weather-forecast-hour d-flex">
    <weather-forecast-item
      v-for="hour in dayInfo.hour"
      :hour="hour"
      :key="hour.time_epoch"
    />
  </div>
</template>

<script>
import WeatherForecastItem from "./WeatherForecastItem.vue";
export default {
  components: { WeatherForecastItem },
  name: "WeatherForecastHour",
  props: {
    dayInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>