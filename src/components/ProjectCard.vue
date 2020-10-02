<template>
  <div class="item col-lg-4 col-sm-6 graphic">
    <a class="ajax-link" @click.prevent="goToProject">
      <figure>
        <img :src="project.image.formats.small.url" :alt="project.image.alt" />
        <figcaption>
          <h4>{{ project.name }}</h4>
        </figcaption>
      </figure>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
    index: Number
  },
  methods: {
    goToProject() {
      this.$router.push(`/projects/${this.index}`);
    }
  }
};
</script>

<style lang="scss" scoped></style>
