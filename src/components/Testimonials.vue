<template>
  <div
    class="row testimonials mb-50"
    v-if="Array.isArray(testimonials) && testimonials.length > 0"
  >
    <div class="col-md-12">
      <div class="subheading">
        <h3>Testimonials</h3>
      </div>
    </div>
    <!-- col-md-12 -->
    <TestimonialCard
      v-for="(testimonial, index) in testimonials"
      :testimonial="testimonial"
      :key="index"
    />
  </div>
  <!-- row -->
</template>

<script>
import TestimonialCard from "./TestimonialCard";
export default {
  props: {
    testimonials: Array
  },
  components: {
    TestimonialCard
  }
};
</script>

<style lang="scss" scoped></style>
