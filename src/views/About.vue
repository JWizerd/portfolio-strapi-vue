<template>
  <section id="about" class="about-section pt-page">
    <div class="section-container">
      <PageHeading title="About" />
      <!-- page-heading -->

      <div class="row about mb-70">
        <div class="col-lg-8">
          <div>
            {{ $store.getters.user.biographies[0].text }}
          </div>
        </div>
        <div class="col-lg-4">
          <DetailsCard headline="Details" :details="details" :btn="btn" />
        </div>
      </div>
      <!-- row -->

      <TopSkills />

      <Testimonials :testimonials="latestTestimonials" />
    </div>
  </section>
</template>

<script>
import PageHeading from "@/components/PageHeading";
import DetailsCard from "@/components/DetailsCard";
import TopSkills from "@/components/TopSkills";
import Testimonials from "@/components/Testimonials";

export default {
  components: {
    DetailsCard,
    TopSkills,
    PageHeading,
    Testimonials
  },
  computed: {
    btn() {
      return {
        text: "Download Resume",
        link: this.$store.getters.resume.url
      };
    },
    latestTestimonials() {
      return this.$store.getters.testimonials.slice(0, 3);
    },
    details() {
      return [
        {
          name: "Name",
          value: this.$store.getters.name
        },
        {
          name: "Status",
          value: this.$store.getters.user.status
        },
        {
          name: "Location",
          value: this.$store.getters.user.location
        }
      ];
    }
  }
};
</script>
