<template>
  <div class="preloader">
    <div class="loader">
      <h4>{{ name }}</h4>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
  props: {
    show: Boolean
  },
  data() {
    return {
      name: "Jeremiah Wodke"
    };
  }
};
</script>

<style scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #2c2d2f;
  z-index: 10000;
}

.preloader .loader {
  position: absolute;
  top: 50%;
  width: 100%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
}

.preloader .loader h4 {
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: 700;
  color: heading-color;
}

.loader span {
  width: 0.6em;
  height: 0.6em;
  margin: 0.19em;
  background: #007db6;
  -webkit-border-radius: 0.6em;
  border-radius: 0.6em;
  -webkit-animation: loading 1s infinite alternate;
  animation: loading 1s infinite alternate;
}

.loader span:nth-of-type(2) {
  background: #008fb2;
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}

.loader span:nth-of-type(3) {
  background: #009b9e;
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.loader span:nth-of-type(4) {
  background: #00a77d;
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.loader span:nth-of-type(5) {
  background: #00b247;
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
}

.loader span:nth-of-type(6) {
  background: #5ab027;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}

.loader span:nth-of-type(7) {
  background: #a0b61e;
  -webkit-animation-delay: 1.2s;
  animation-delay: 1.2s;
}

/*
 * Animation keyframes
 * Use transition opacity instead of keyframes?
 */

@-webkit-keyframes loading {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes loading {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
