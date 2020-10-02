<template>
  <div class="row mb-50" v-if="$store.getters.skills">
    <div class="col-lg-6 skills">
      <SkillCard
        v-for="(skill, index) in skills.left"
        :key="index"
        :skill="skill"
      />
    </div>
    <div class="col-lg-6 skills">
      <SkillCard
        v-for="(skill, index) in skills.right"
        :key="index"
        :skill="skill"
      />
    </div>
  </div>
  <!--Skills Row End-->
</template>

<script>
import SkillCard from "@/components/SkillCard";
export default {
  components: {
    SkillCard
  },
  computed: {
    skills() {
      const skills = this.$store.getters.skills;
      const naiveSplitter = Math.round(skills.length) / 2;
      const left = skills.slice(0, naiveSplitter);
      const right = skills.slice(naiveSplitter, skills.length);
      return {
        left,
        right
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>
