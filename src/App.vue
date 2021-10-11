<template>
  <div id="app">
    <router-view></router-view>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
import MainTabBar from "./components/comtent/maintabbar/MainTabBar";
export default {
  components: { MainTabBar },
  name: "App",
  comments: {
    MainTabBar,
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
