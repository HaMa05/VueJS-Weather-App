<template>
  <div class="search">
    <form @submit.prevent="searchLocation">
      <div class="form-group d-flex">
        <input
          type="search"
          name="search"
          id="search"
          class="form-input form-control mr-sm-2"
          placeholder="Tên quốc gia"
          aria-label="Tên quốc gia"
          autocomplete="off"
          v-model="searchContent"
        />
        <button
          type="submit"
          @keyup.enter.prevent="searchLocation"
          class="btn btn-warning my-2 my-sm-0"
        >
          Tìm kiếm
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  data() {
    return {
      searchContent: "",
    };
  },
  methods: {
    async searchLocation() {
      await this.$store
        .dispatch("current/getCurrentWeather", {
          query: { q: this.searchContent },
        })
        .then(() => {
          this.$router.push({
            query: { q: this.searchContent.toLowerCase() },
          });
        })
        .catch((err) => {
          console.log(err);
        });
      this.resetInput();
    },
    resetInput() {
      this.searchContent = "";
    },
    putRoute() {},
  },
};
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
}

form * {
  font-size: 1.5rem;
}
</style>
