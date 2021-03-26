import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("./components/WalletPage"),

    },
    {
      path: "/RegistrationPage",
      component: () => import("./components/RegistrationPage"),

    },
    {
      path: "/EnterPage",
      component: () => import("./components/EnterPage"),

    },
    {
      path: "/WalletPage",
      component: () => import("./components/WalletPage"),

    },
    {
      path: "/OutPage",
      component: () => import("./components/OutPage"),

    },
  ],
  mode: "history",
});
