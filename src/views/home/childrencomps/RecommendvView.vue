<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.acm">
      <a :href="item.link"
        ><img :src="item.image" alt="" />
        <div>{{ item.title }}</div></a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 15px 0 20px;
  border-bottom: 8px solid #eee;
}
.recommend > div {
  flex: 1;
}
.recommend > div a img {
  width: 65px;
  height: 65px;
  margin-bottom: 7px;
}
</style>