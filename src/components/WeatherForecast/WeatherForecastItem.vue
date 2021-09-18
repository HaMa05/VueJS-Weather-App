<template>
  <div class="weather-forecast-item hour d-flex flex-column align-items-center">
    <div class="hour-day">
      <h4 class="text-white font-weight-bold">{{ formatDay(hour.time) }}</h4>
    </div>
    <div class="hour-info m-2 p-2">
      <div class="icon d-flex justify-content-center">
        <icon-image :imageLink="hour.condition.icon" :height="10" :width="10" />
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
        <h4 class="current-temp text-white pb-2">Nhiệt độ</h4>
        <h4 class="current-temp font-weight-bold text-white">
          {{ hour.temp_c }} C - {{ hour.temp_f }} F
        </h4>
      </div>
    </div>
    <div class="hour-text">
      <h4 class="text-white font-weight-bold">{{ formatHour(hour.time) }}</h4>
    </div>
  </div>
</template>

<script>
import IconImage from "../IconImage.vue";
export default {
  name: "WeatherForecastItem",
  components: { IconImage },
  props: {
    hour: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatHour(hourString) {
      const date = new Date(hourString);
      const hour = date.getHours();
      const minutes = date.getMinutes();
      return `${hour > 9 ? hour : `0${hour}`} : ${
        minutes > 9 ? minutes : `0${minutes}`
      }`;
    },
    formatDay(dayString) {
      const date = new Date(dayString);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day > 9 ? day : `0${day}`} - ${
        month.lenth > 9 ? month : `0${month}`
      } - ${year}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.hour {
  &-info {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.19);
  }

  &-text {
    font-size: 1.4rem;
  }

  &-day {
    font-size: 1rem;
  }
}

.weather-forecast-hours .weather-forecast-hour {
  &:first-child {
    .weather-forecast-item {
      &:first-child {
        .hour-info {
          margin-left: 0 !important;
        }
      }
    }
  }
}
.weather-forecast-hours .weather-forecast-hour {
  &:last-child {
    .weather-forecast-item {
      &:last-child {
        .hour-info {
          margin-right: 0 !important;
        }
      }
    }
  }
}
</style>
