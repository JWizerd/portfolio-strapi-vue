<template>
  <div class="row services mb-30" v-if="$store.getters.services">
    <div class="col-md-12">
      <div class="subheading">
        <h3>Top Skills</h3>
      </div>
    </div>
    <div
      class="col-lg-3 col-sm-6"
      v-for="(service, index) in $store.getters.services"
      :key="index"
    >
      <TopSkillCard :service="service" />
    </div>
  </div>
</template>

<script>
import TopSkillCard from "@/components/TopSkillCard";
export default {
  components: {
    TopSkillCard
  }
};
</script>

<style lang="scss" scoped></style>
