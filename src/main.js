import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import VueI18n from "vue-i18n";
import Store from "./Store";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  Store,
  VueI18n,
}).$mount("#app");
