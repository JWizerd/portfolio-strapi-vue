<template>
  <div class="image-container">
    <img
      :src="$store.getters.user.headshot.formats.thumbnail.url"
      :alt="$store.getters.user.headshot.alt"
    />
    <h2 class="header-name">{{ $store.getters.name }}</h2>
  </div>
</template>
