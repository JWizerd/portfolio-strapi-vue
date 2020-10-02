<template>
  <div class="service-item">
    <div class="icon"><i :class="'lnr lnr-' + service.icon"></i></div>
    <h4>{{ service.name }}</h4>
    <p>{{ service.experience }} years</p>
    <small class="text-left">{{ service.description }}</small>
  </div>
</template>

<script>
export default {
  props: {
    service: Object
  }
};
</script>

<style lang="scss" scoped></style>
