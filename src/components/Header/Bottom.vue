<template>
  <div class="nav-footer">
    <ul class="social">
      <li
        v-for="(socialLink, index) in $store.getters.user.socialLinks"
        :key="index"
      >
        <a :href="socialLink.url" target="_blank">
          <i :class="'fab fa-' + socialLink.icon + '-square'"></i>
        </a>
      </li>
    </ul>
  </div>
</template>
