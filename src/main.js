import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import Strapi from "./services/strapi--javascript-sdk/build/main";
import Pixabay from "@/services/pixabay";

Vue.config.productionTip = false;
store.$env = process.env.NODE_ENV;
store.$username = process.env.VUE_APP_BACKEND_USERNAME;
store.$token = process.env.VUE_APP_BACKEND_PUBLIC_TOKEN;
store.$pixabay = new Pixabay(process.env.VUE_APP_PIXABAY_KEY);
store.$strapi = new Strapi(process.env.VUE_APP_BACKEND_PRODUCTION_URL);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
