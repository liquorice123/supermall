<template>
  <TabBar>
    <TabBarItem path="/home" activeColor="orange">
      <img slot="item-icon" src="../../../assets/img/home.png" alt="" />
      <img
        slot="item-icon-active"
        src="../../../assets/img/home_active.png"
        alt=""
      />
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category" activeColor="orange">
      <img slot="item-icon" src="../../../assets/img/kinds.png" alt="" />
      <img
        slot="item-icon-active"
        src="../../../assets/img/kinds_active.png"
        alt=""
      />
      <div slot="item-text">分类</div></TabBarItem
    >
    <TabBarItem path="/cart" activeColor="orange">
      <img slot="item-icon" src="../../../assets/img/car.png" alt="" />
      <img
        slot="item-icon-active"
        src="../../../assets/img/car_active.png"
        alt=""
      />
      <div slot="item-text">购物车</div></TabBarItem
    >
    <TabBarItem path="/profile" activeColor="orange">
      <img slot="item-icon" src="../../../assets/img/me.png" alt="" />
      <img
        slot="item-icon-active"
        src="../../../assets/img/me_active.png"
        alt=""
      />
      <div slot="item-text">我的</div></TabBarItem
    >
  </TabBar>
</template>

<script>
import TabBar from "../../common/tabbar/Tabbar";
import TabBarItem from "../../common/tabbar/TabBarItem";
export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>