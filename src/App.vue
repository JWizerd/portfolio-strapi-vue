<template>
  <div id="app">
    <LoaderBoundary
      :isLoading="$store.getters.pageLoading"
      :isFullPage="false"
    />
    <div id="page" v-if="$store.getters.user">
      <Header />
      <div id="main" class="site-main">
        <router-view />
      </div>
      <!-- main -->
    </div>
    <!-- page -->
  </div>
  <!-- app -->
</template>

<script>
import LoaderBoundary from "@/components/LoaderBoundary";
import Header from "@/components/Header/Layout";
export default {
  components: {
    Header,
    LoaderBoundary
  },
  async created() {
    await this.$store.dispatch("GET_USER");
  }
};
</script>

<style>
@import "./assets/css/plugins.css";
@import "./assets/css/blue-color.css";
@import "./assets/css/main.css";
</style>
