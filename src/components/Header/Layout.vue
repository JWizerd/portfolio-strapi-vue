<template>
  <header>
    <div class="header-content">
      <TopMobile :toggle="$store.getters.menu" />
      <div :class="headerClass">
        <Top />
        <Menu />
        <Bottom />
      </div>
    </div>
    <!-- header content -->
  </header>
</template>

<script>
import Top from "./Top";
import TopMobile from "./TopMobile";
import Menu from "./Menu";
import Bottom from "./Bottom";
export default {
  name: "Header",
  components: {
    Menu,
    Top,
    TopMobile,
    Bottom
  },
  data() {
    return {
      toggle: false,
      name: "Jeremiah Wodke"
    };
  },
  computed: {
    headerClass() {
      return window.outerWidth < 768 && this.$store.getters.menu
        ? "header-main mobile-friendly"
        : "header-main";
    }
  }
};
</script>
