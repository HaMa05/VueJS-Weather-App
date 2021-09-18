<template>
  <div>
    <weather-forecast-days :days="forecast.forecastday" />
    <div class="hours w-100 mt-2 pb-4">
      <weather-forecast-hours :forcastInfo="forecast.forecastday" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import WeatherForecastDays from "./WeatherForecastDays.vue";
import WeatherForecastHours from "./WeatherForecastHours.vue";
export default {
  name: "WeatherForecastList",
  components: { WeatherForecastDays, WeatherForecastHours },
  computed: {
    ...mapState("current", ["forecast"]),
  },
};
</script>

<style lang="scss" scoped>
.hours {
  overflow-x: scroll;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
    border-radius: 2rem;
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(0.72, rgb(73, 125, 189))
    );
  }
}
</style>