<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <Recommends :recommends="recommends"></Recommends>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import HomeSwiper from "./childrencomps/homeSwiper";
import Recommends from "./childrencomps/RecommendvView.vue";
import { getHomeMultidata } from "../../network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    Recommends,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: aliceblue;
}
</style>