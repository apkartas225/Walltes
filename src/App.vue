<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header';
import store from "./Store";

export default {
  name: "App",

  components: {
    Header
  },
  created() {
    this.getUserToken();
  },
  methods: {
    getUserToken() {
      const token = localStorage.getItem("token");
      if (token) {
        store.dispatch('setToken', token);
      } else {
        this.$router.push('/EnterPage');
      }
    }
  }
};
</script>

<style scoped>
#app {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #1c1c1c;
  overflow: hidden;
}
</style>
