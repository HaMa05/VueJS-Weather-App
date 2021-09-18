<template>
  <div class="current">
    <h2 class="current-title text-white mb-2">Hôm nay</h2>
    <div class="current-info p-3 rounded">
      <div class="d-flex align-items-center justify-content-center">
        <h3 class="current-location font-weight-bold text-white">
          {{ weather.location.country }}
        </h3>
        <icon-image :image-link="weather.current.condition.icon" />
      </div>
      <div
        class="
          current-detail
          d-flex
          flex-row
          align-items-center
          justify-content-around
          flex-wrap
        "
      >
        <div
          class="
            current-item
            d-flex
            align-items-center
            justify-content-center
            flex-column
          "
        >
          <h4 class="current-temp text-white pb-2">Nhiệt độ</h4>
          <h4 class="current-temp font-weight-bold text-white">
            {{ weather.current.temp_c }} C - {{ weather.current.temp_f }} F
          </h4>
        </div>
        <div
          class="
            current-item
            d-flex
            align-items-center
            justify-content-center
            flex-column
          "
        >
          <h4 class="current-temp text-white pb-2">Độ ẩm</h4>
          <h4 class="current-temp font-weight-bold text-white">
            {{ weather.current.humidity }} %
          </h4>
        </div>
        <div
          class="
            current-item
            d-flex
            align-items-center
            justify-content-center
            flex-column
          "
        >
          <h4 class="current-temp text-white pb-2">Tỷ lệ mây</h4>
          <h4 class="current-temp font-weight-bold text-white">
            {{ weather.current.cloud }} %
          </h4>
        </div>
        <div
          class="
            current-item
            d-flex
            align-items-center
            justify-content-center
            flex-column
          "
        >
          <h4 class="current-temp text-white pb-2">Tốc độ gió</h4>
          <h4 class="current-temp font-weight-bold text-white">
            {{ weather.current.wind_kph }} km/h
          </h4>
        </div>
        <div
          class="
            current-item
            d-flex
            align-items-center
            justify-content-center
            flex-column
          "
        >
          <h4 class="current-temp text-white pb-2">Gió giật</h4>
          <h4 class="current-temp font-weight-bold text-white">
            {{ weather.current.gust_kph }} km/h
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import IconImage from "../IconImage.vue";
export default {
  components: { IconImage },
  name: "WeatherCurrent",
  computed: {
    ...mapState("current", ["weather"]),
  },
};
</script>

<style lang="scss" scoped>
.current {
  &-title {
    font-size: 2rem;
    padding: 1rem 0;
    border-bottom: 0.2rem solid currentColor;
  }
  &-info {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.19);
  }
  &-location {
    font-size: 4rem;
    letter-spacing: 0.5rem;
  }
  &-temp {
    font-size: 2.5rem;
    letter-spacing: 0.2rem;
  }
  &-item {
    margin: 2rem;
  }
}
</style>