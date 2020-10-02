<template>
  <div class="image-container">
    <h2 class="header-name">{{ $store.getters.name }}</h2>
    <img
      :src="$store.getters.user.headshot.formats.thumbnail.url"
      :alt="$store.getters.user.headshot.alt"
    />
  </div>
</template>
