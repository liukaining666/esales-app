<template>
  <div>
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item replace @click="toHome" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item replace @click="toHome" icon="wap-home">资讯</van-tabbar-item>
      <van-tabbar-item class="m-main-tabbar" replace @click="toAccount">
        <template>
          <div>
            <img width="35" height="35" src="../assets/img/loading.gif" />
            <p>资源</p>
          </div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace @click="toHome" icon="wap-home">数据</van-tabbar-item>
      <van-tabbar-item replace @click="toAccount" icon="manager">我的</van-tabbar-item>
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

<style scoped lang="less">
.px2rem(@name, @px) {
  @{name}: @px / 20px * 1rem;
}

.m-main-tabbar {
  p {
    margin-top: 0.5rem;
    padding-bottom: 0.6rem;
    text-align: center;
  }
}
</style>

