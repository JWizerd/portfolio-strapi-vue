<template>
  <div class="skill-item mt-40">
    <h4 class="progress-title">
      <span class="icon" v-if="skill.featured">
        <i class="lnr lnr-star"></i>
      </span>
      {{ skill.name }}
    </h4>
    <div v-if="displayDescription">
      <small>Experience: {{ skill.experience }} years</small>
      <small>{{ skill.description }}</small>
    </div>
    <div class="progress mt-40">
      <div class="progress-bar" :style="{ width: skill.proficiency + '%' }">
        <div class="progress-value">{{ skill.proficiency }}%</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skill: Object,
    displayDescription: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
