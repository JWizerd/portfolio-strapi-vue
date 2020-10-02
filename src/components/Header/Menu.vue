<template>
  <nav class="nav-menu">
    <ul>
      <li
        class="pt-link active"
        v-for="route in $router.options.routes"
        :key="route.path"
      >
        <router-link :to="route.path" v-if="icons[route.path]">
          {{ route.name }}
          <span class="nav-menu-icon">
            <i :class="icons[route.path]"></i>
          </span>
        </router-link>
      </li>
      <li v-if="githubLink">
        <a :href="githubLink.url" target="_blank">
          GitHub
          <span class="nav-menu-icon">
            <i class="fab fa-github-square"></i>
          </span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    githubLink() {
      return this.$store.getters.user.socialLinks.find(l =>
        l.icon.includes("github")
      );
    },
    icons() {
      return {
        "/": "lnr lnr-home",
        "/about": "lnr lnr-user",
        "/projects": "lnr lnr-license",
        "/contact": "lnr lnr-envelope",
        "/resume": "lnr lnr-chart-bars"
      };
    }
  }
};
</script>
