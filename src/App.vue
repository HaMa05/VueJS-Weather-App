<template>
  <div id="app">
    <h1 class="title position-absolute text-white font-weight-bold">
      Dự báo thời tiết
    </h1>
    <background-image :nameImage="typeWeather"></background-image>
    <router-view />
  </div>
</template>
<script>
import BackgroundImage from "./components/BackgroundImage.vue";
export default {
  name: "Home",
  components: {
    BackgroundImage,
  },
  props: {
    typeWeather: {
      type: String,
      required: true,
      default: "sun",
    },
  },
};
</script>

<style lang="scss">
@import "./scss/main";
.title {
  background: transparent;
  left: 50%;
  text-transform: uppercase;
  font-size: 5rem;
  transform: translateX(-50%);
  margin-top: 3rem;
  letter-spacing: 0.75rem;
}
</style>
