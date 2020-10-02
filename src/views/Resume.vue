<template>
  <section id="resume" class="resume-section pt-page">
    <div class="section-container">
      <PageHeading title="Resume">
        <div>
          <h2>
            Resume
            <a
              class="icon ml-10"
              :href="$store.getters.resume.url"
              target="_blank"
            >
              <i class="lnr lnr-download"></i>
            </a>
          </h2>
        </div>
      </PageHeading>
      <div class="row mb-20">
        <ExperienceList
          :items="$store.getters.experience"
          title="Experience"
          className="experience"
        />
        <ExperienceList
          :items="$store.getters.education"
          title="Education"
          className="education"
        />
      </div>
      <div class="subheading text-center mb-0">
        <h3>Skills</h3>
      </div>
      <Skills />
    </div>
  </section>
</template>

<script>
import ExperienceList from "@/components/ExperienceList";
import Skills from "@/components/Skills";
import PageHeading from "@/components/PageHeading";
export default {
  components: {
    Skills,
    ExperienceList,
    PageHeading
  }
};
</script>
