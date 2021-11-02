import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import Strapi from "@autom8apps/strapi-sdk-javascript";

Vue.config.productionTip = false;
store.$env = process.env.NODE_ENV;
store.$username = process.env.VUE_APP_BACKEND_USERNAME;
store.$token = process.env.VUE_APP_BACKEND_PUBLIC_TOKEN;
store.$strapi = new Strapi(process.env.VUE_APP_BACKEND_PRODUCTION_URL);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
