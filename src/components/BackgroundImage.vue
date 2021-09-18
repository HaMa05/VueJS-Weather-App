<template>
  <div class="">
    <div class="background-image position-absolute">
      <div class="overlay position-absolute"></div>
      <img
        :src="require('@/assets/images/' + nameImage + '.jpg')"
        alt="icon-image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "BackgroundImage",
  props: {
    nameImage: {
      type: String,
      required: true,
      default: "sun",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/helpers/_mixins.scss";
.background-image {
  @include positionImg(-2);
  overflow: hidden;
}

.overlay {
  @include positionImg(-1);
  background: rgb(0, 98, 143);
  background: linear-gradient(
    180deg,
    #00628f66 0%,
    rgba(255, 255, 255, 0) 100%
  );
}

img {
  @include positionImg();
}
</style>
