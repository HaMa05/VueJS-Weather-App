<template>
  <div class="home">
    <template>
      <icon-image :codeImage="116" :width="5" :height="5" />
    </template>
  </div>
</template>

<script>
import IconImage from "../components/IconImage.vue";

export default {
  name: "Home",
  components: {
    IconImage,
  },
};
</script>
