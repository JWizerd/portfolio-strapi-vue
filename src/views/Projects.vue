<template>
  <section id="portfolio" class="portfolio-section pt-page">
    <div class="section-container">
      <PageHeading title="Projects" />

      <div class="row" v-if="$store.getters.projectFilters">
        <div class="col-md-12 portfolio-filter text-center">
          <ul>
            <li
              v-for="(filter, index) in $store.getters.projectFilters"
              :key="index"
              :class="filter === activeFilter ? 'active' : null"
              @click="() => filterProjects(filter)"
            >
              {{ filter }}
            </li>
          </ul>
        </div>
      </div>

      <div class="row portfolio-items mb-50">
        <ProjectCard
          v-for="(project, index) in filteredProjects"
          :key="index"
          :index="index"
          :project="project"
        />
      </div>
    </div>
  </section>
  <!--Porfolio Section End-->
</template>

<script>
import ProjectCard from "@/components/ProjectCard";
import PageHeading from "@/components/PageHeading";
export default {
  components: {
    ProjectCard,
    PageHeading
  },
  data() {
    return {
      activeFilter: "all",
      projects: []
    };
  },
  computed: {
    filteredProjects() {
      if (this.activeFilter === "all") return this.$store.getters.projects;
      return this.$store.getters.filterProjects(this.activeFilter);
    }
  },
  methods: {
    filterProjects(type) {
      this.activeFilter = type;
    }
  }
};
</script>
