<template>
  <div class="page-heading">
    <slot>
      <h2>{{ title }}</h2>
    </slot>
    <span class="icon" @click="goBack">
      <i class="lnr lnr-arrow-left-circle"></i>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    prev: String
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped></style>
