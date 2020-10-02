<template>
  <div class="row clients mb-70" v-if="$store.getters.clients">
    <div class="col-md-12">
      <div class="subheading">
        <h3>Clients</h3>
      </div>
    </div>
    <div
      class="col-lg-2 col-sm-6"
      v-for="(client, index) in $store.getters.clients"
      :key="index"
    >
      <div class="client-logo">
        <a :href="client.website">
          <img :src="client.logo.url" :alt="client.logo.alt" />
        </a>
      </div>
    </div>
  </div>
  <!-- row -->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
