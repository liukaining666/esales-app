<template>
  <div>
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item replace @click="toHome" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace @click="toAccount" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  name: "layout",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      active: 0
    };
  },
  methods: {
    // 首页
    toHome() {
      this.$router.push({
        name: "home"
      });
    },
    // 我的
    toAccount() {
      this.$router.push({
        name: "account"
      });
    }
  }
};
</script>

<style scoped>
</style>

