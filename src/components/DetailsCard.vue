<template>
  <div class="about-info">
    <h3 class="mb-20">{{ headline }}</h3>
    <ul>
      <li v-for="(item, index) in details" :key="index">
        <span class="title">{{ item.name }}</span>
        <span class="value uppercase">{{ item.value }}</span>
      </li>
    </ul>
    <div class="resume-button mt-30 mb-30">
      <a class="btn-main" :href="btn.link" target="_blank">{{ btn.text }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headline: String,
    details: Array,
    btn: Object
  }
};
</script>
