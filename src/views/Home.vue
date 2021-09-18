<template>
  <div class="home">
    <weather-current />
    <div class="">
      <weather-forecast-list />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import WeatherCurrent from "../components/WeatherCurrent/WeatherCurrent.vue";
import store from "@/store/index";
import WeatherForecastList from "../components/WeatherForecast/WeatherForecastList.vue";

export default {
  name: "Home",
  components: { WeatherCurrent, WeatherForecastList },
  beforeRouteEnter(routeTo, routeFrom, next) {
    getWeather(routeTo, next);
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getWeather(routeTo, next);
  },
  methoads: {
    ...mapActions("current", ["getCurrentWeather"]),
    async getData() {
      await this.getCurrentWeather();
    },
  },
};

function getWeather(routeTo, next) {
  const location = routeTo.query.q ? routeTo.query.q : "VietNam";
  store
    .dispatch("current/getCurrentWeather", { query: { q: location } })
    .then(() => {
      routeTo.params.q = location;
      next();
    });
}
</script>
