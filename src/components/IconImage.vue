<template>
  <div class="image" :style="style">
    <img
      :src="require('@/assets/weather/day/' + codeImage + '.png')"
      alt="icon-image"
    />
  </div>
</template>

<script>
export default {
  name: "IconImage",
  props: {
    codeImage: {
      type: Number,
      required: true,
    },
    width: {
      type: Number,
      required: true,
      default: 2,
    },
    height: {
      type: Number,
      required: true,
      default: 2,
    },
  },
  computed: {
    style() {
      return {
        width: this.width + "rem",
        height: this.height + "rem",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/helpers/_mixins.scss";
img {
  @include positionImg();
}
</style>
