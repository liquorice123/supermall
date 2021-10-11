<template>
  <div class="tab-bar-item" @click="btn">
    <!-- <img src="../../assets/img/tabbar/home.png" alt="" />
    <div>首页</div> -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      //   isActive: true,
    };
  },
  computed: {
    isActive() {
      return this.$route.path == this.path;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    btn() {
      //   console.log("被点击");
      this.$router.push("/location").catch((err) => {
        console.log(err);
      });
      this.$router.push(this.path);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  /* position: absolute; */
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  margin-top: 2px;
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
/* .active {
  color: rgb(168, 72, 72);
} */
</style>