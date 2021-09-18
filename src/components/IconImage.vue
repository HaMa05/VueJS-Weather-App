<template>
  <div class="image" :style="style">
    <img :src="imageLink" alt="icon-image" />
  </div>
</template>

<script>
export default {
  name: "IconImage",
  props: {
    imageLink: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      required: false,
      default: 7,
    },
    height: {
      type: Number,
      required: false,
      default: 7,
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
