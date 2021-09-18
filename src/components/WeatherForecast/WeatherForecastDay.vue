<template>
  <div class="day-info p-4 rounded">
    <div class="">
      <h4 class="day-date text-white">{{ formatDay(day.date) }}</h4>
    </div>
    <div class="icon d-flex justify-content-center">
      <icon-image :imageLink="day.day.condition.icon" />
    </div>
    <div class="day-detail d-flex">
      <div
        class="
          day-temp
          d-flex
          align-items-center
          justify-content-center
          flex-column
        "
      >
        <h4 class="current-temp text-white pb-2">Nhiệt độ thấp nhất</h4>
        <h4 class="current-temp font-weight-bold text-white">
          {{ day.day.mintemp_c }} C - {{ day.day.mintemp_f }} F
        </h4>
      </div>
      <div
        class="
          day-temp
          d-flex
          align-items-center
          justify-content-center
          flex-column
        "
      >
        <h4 class="current-temp text-white pb-2">Nhiệt độ cao nhất</h4>
        <h4 class="current-temp font-weight-bold text-white">
          {{ day.day.maxtemp_c }} C - {{ day.day.maxtemp_f }} F
        </h4>
      </div>
      <div
        class="
          day-temp
          d-flex
          align-items-center
          justify-content-center
          flex-column
        "
      >
        <h4 class="current-temp text-white pb-2">Nhiệt độ trung bình</h4>
        <h4 class="current-temp font-weight-bold text-white">
          {{ day.day.avgtemp_c }} C - {{ day.day.avgtemp_f }} F
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import IconImage from "../IconImage.vue";
export default {
  components: { IconImage },
  name: "WeatherForecastDay",
  props: {
    day: {
      type: Object,
      required: true,
    },
  },
  methods: {
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
.day {
  &-info {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.19);
  }

  &-temp {
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }

  &-date {
    font-size: 1.4rem;
  }
}

.current-temp {
  font-size: 1.2rem;
}
</style>
