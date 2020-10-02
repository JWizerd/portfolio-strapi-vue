<template>
  <div class="header-mobile">
    <a class="header-toggle" @click.prevent="handleToggle"
      ><i :class="menuClass"></i
    ></a>
  </div>
</template>

<script>
export default {
  computed: {
    menuClass() {
      return this.$store.getters.menu ? "fas fa-times" : "fas fa-bars";
    }
  },
  methods: {
    handleToggle() {
      this.$store.commit("TOGGLE_MENU");
    }
  },
  props: {
    toggle: Boolean
  }
};
</script>
