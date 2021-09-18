<template>
  <div id="app" class="d-flex justify-center">
    <background-image :nameImage="typeWeather"></background-image>
    <div class="container">
      <h1 class="title text-white font-weight-bold text-center my-4">
        Dự báo thời tiết
      </h1>
      <template>
        <search-input />
      </template>
      <router-view />
    </div>
  </div>
</template>
<script>
import BackgroundImage from "./components/BackgroundImage.vue";
import SearchInput from "./components/SearchInput.vue";
export default {
  name: "Home",
  components: {
    BackgroundImage,
    SearchInput,
  },
  data() {
    return {
      typeWeather: "sun",
    };
  },
};
</script>

<style lang="scss">
@import "./scss/main";
.title {
  background: transparent;
  text-transform: uppercase;
  font-size: 5rem;
  letter-spacing: 0.75rem;
}
</style>
