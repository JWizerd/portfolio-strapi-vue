<template>
  <div v-if="item">
    <span class="line-left"></span>
    <div class="content">
      <h4>{{ item.title }}</h4>
      <h5 v-if="item.location">{{ item.location }}</h5>
      <small class="info">{{ item.description }}</small>
    </div>
    <span class="year">
      <span class="to">{{ item.to }}</span>
      <span class="from">{{ item.from }}</span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  }
};
</script>

<style lang="scss" scoped></style>
