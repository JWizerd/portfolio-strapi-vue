<template>
  <div class="col-lg-6">
    <div class="subheading">
      <h3>{{ title }}</h3>
    </div>

    <ul :class="className">
      <li v-for="(item, index) in items" :key="index">
        <ExperienceCard :item="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import ExperienceCard from "./ExperienceCard";
export default {
  components: {
    ExperienceCard
  },
  props: {
    title: String,
    items: Array,
    className: String
  }
};
</script>

<style lang="scss" scoped></style>
