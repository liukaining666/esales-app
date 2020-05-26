<template>
  <van-tabbar route v-model="active">
    <van-tabbar-item replace @click="toHome">
      <template>
        <div class="u-icon-content">
          <img
            width="16"
            height="16"
            :src="active == 0 ? require('../../assets/img/home-active.png') : require('../../assets/img/home.png')"
          />
          <p>首页</p>
        </div>
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace @click="toHome">
      <template>
        <div class="u-icon-content">
          <img
            width="16"
            height="16"
            :src="active == 1 ? require('../../assets/img/home-active.png') : require('../../assets/img/home.png')"
          />
          <p>资讯</p>
        </div>
      </template>
    </van-tabbar-item>
    <van-tabbar-item class="m-main-tabbar" replace @click="toAccount">
      <template>
        <div class="u-icon-content">
          <img
            width="16"
            height="16"
            :src="active == 2 ? require('../../assets/img/loading.gif') : require('../../assets/img/loading.gif')"
          />
          <p>资源</p>
        </div>
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace @click="toHome">
      <template>
        <div class="u-icon-content">
          <img
            width="16"
            height="16"
            :src="active == 3 ? require('../../assets/img/home-active.png') : require('../../assets/img/home.png')"
          />
          <p>数据</p>
        </div>
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace @click="toAccount">
      <template>
        <div class="u-icon-content">
          <img
            width="16"
            height="16"
            :src="active == 4 ? require('../../assets/img/account-active.png') : require('../../assets/img/account.png')"
          />
          <p>我的</p>
        </div>
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
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

/deep/.van-tabbar-item {
  /deep/.u-icon-content {
    text-align: center;
    p {
      margin: 0.3rem 0;
      text-align: center;
    }
  }
}

/deep/.m-main-tabbar {
    img {
      transform-origin: 50% 100%;
      transform: scale(2.5);
    }
  }
</style>

