<template>
  <section
    id="home"
    class="banner-section pt-page"
    :style="{ backgroundImage: 'url(' + $store.getters.background + ')' }"
  >
    <div class="banner-content">
      <h1 class="mb-20">{{ $store.getters.name }}</h1>
      <p class="cd-headline clip is-full-width">
        <span class="cd-words-wrapper">
          <b>{{ fact }}</b>
        </span>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      fact: null
    };
  },
  methods: {
    setIndex() {
      if (this.index === this.$store.getters.facts.length - 1) {
        this.index = 1;
      } else {
        this.index = this.index + 1;
      }
    },
    setFact() {
      this.setIndex();
      this.fact = this.$store.getters.facts[this.index].text;
    }
  },
  mounted() {
    if (this.$store.getters.facts) {
      this.fact =
        this.$store.getters.facts &&
        this.$store.getters.facts[0] &&
        this.$store.getters.facts[0].text;
      setInterval(this.setFact.bind(this), 4000);
    }
  }
};
</script>
