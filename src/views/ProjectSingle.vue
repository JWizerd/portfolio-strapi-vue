<template>
  <section
    id="portfolio"
    class="portfolio-section projects-section pt-page"
    v-if="project"
  >
    <div class="section-container">
      <PageHeading :title="project.name" />
      <div class="single-work">
        <div class="container">
          <div class="row">
            <div class="col-md-8 mb-0">
              <img
                :src="project.image.formats.medium.url"
                :alt="project.image.alt"
                class="featured-img"
              />
            </div>
            <div class="col-md-4">
              <div class="subheading mb-0 text-left"></div>
              <p>{{ project.description }}</p>
              <hr />
              <div class="resume-button mt-20 mb-20">
                <a class="btn-main" :href="project.website" target="_blank">
                  Visit Website
                </a>
              </div>
            </div>
          </div>
          <div class="row mb-40">
            <div class="col-md-12">
              <div class="subheading mb-0 text-left">
                <h3>Applied Skills</h3>
              </div>
            </div>
            <div
              v-for="skill in project.skills"
              :key="skill.id"
              class="col-md-4"
            >
              <div>
                <SkillCard
                  :key="skill.id"
                  :skill="skill"
                  :displayDescription="false"
                />
              </div>
            </div>
          </div>
          <Testimonials :testimonials="project.testimonials" />
          <div class="row">
            <div class="col-md-12">
              <div class="images" v-if="project.showcaseImages.length > 0">
                <figure
                  class="mt-30"
                  v-for="(image, index) in project.showcaseImages"
                  :key="index"
                >
                  <img :src="image.formats.medium.url" :alt="image.alt" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Testimonials from "@/components/Testimonials";
import PageHeading from "@/components/PageHeading";
import SkillCard from "@/components/SkillCard";
export default {
  components: {
    PageHeading,
    SkillCard,
    Testimonials
  },
  computed: {
    btn() {
      return {
        text: "Visit Website",
        link: this.project.website
      };
    },
    details() {
      const { type } = this.project;

      return [
        {
          name: "Type",
          value: type
        }
      ];
    },
    project() {
      return this.$store.getters.projects[this.$route.params.id];
    }
  },
  mounted() {
    if (!this.$route.params.id) this.goBack();
  }
};
</script>

<style lang="scss" scoped></style>
