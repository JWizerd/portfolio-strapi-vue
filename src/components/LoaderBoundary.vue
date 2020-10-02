<template>
  <div class="loader-boundary">
    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :opacity="1"
      :is-full-page="isFullPage ? isFullPage : false"
      loader="dots"
      color="#34e3ff"
    ></loading>
    <slot />
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  props: {
    isFullPage: Boolean,
    isLoading: Boolean
  },
  name: "LoaderBoundary",
  components: {
    Loading
  }
};
</script>

<style lang="scss">
.vld-overlay .vld-background {
  background: #222;
}

.loader-boundary {
  position: relative;
  min-height: 100vh;
}
</style>
