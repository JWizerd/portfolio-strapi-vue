<template>
  <div class="col-md-6">
    <div class="testimonial-item">
      <div class="testimonial-content">
        <p>{{ testimonial.text }}</p>
      </div>
      <div class="testimonial-meta">
        <img :src="testimonial.headshot.url" :alt="testimonial.headshot.alt" />
        <div class="meta-info">
          <h4>{{ testimonial.name }}</h4>
          <p>{{ testimonial.relation }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    testimonial: Object
  }
};
</script>

<style lang="scss" scoped></style>
