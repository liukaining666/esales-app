<template>
  <div class="g-wrapper">
    <!-- 头部 -->
    <div class="van-nav-bar van-nav-bar--fixed van-hairline--bottom" style="z-index: 1;">
      <div class="van-nav-bar__left" @click-left="$router.go(-1)">
        <i class="van-icon van-icon-arrow-left van-nav-bar__arrow"></i>
      </div>
      <div class="van-nav-bar__title van-ellipsis">
        <div class="m-resources-button">
          <div>
            <span :class="resourcesType=='1' ? 'isActive': ''" @click="changeUserType('1')">竞价资源</span>
          </div>
          <div>
            <span :class="resourcesType=='2' ? 'isActive': ''" @click="changeUserType('2')">挂牌资源</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 竞价资源 -->
    <bidding v-if="resourcesType=='1'"></bidding>
    <!-- 挂牌资源 -->
    <hang v-if="resourcesType=='2'"></hang>
  </div>
</template>

<script>
import { NavBar } from "vant";
import bidding from "./components/bidding"
import hang from "./components/hang"
export default {
  name: "resources",
  components: {
    [NavBar.name]: NavBar,
    bidding,
    hang
  },
  data() {
    return {
      resourcesType: "1"
    };
  },
  mounted() {},
  methods: {
    // 改变资源类型
    changeUserType(type) {
      this.resourcesType = type;
    }
  }
};
</script>

<style scoped lang="less">
@theme-red: #c9151e;
@theme-gray: #eeeeee;
@icon-size: 50px;
.px2rem(@name, @px) {
  @{name}: @px / 20px * 1rem;
}

.m-resources-button {
  display: flex;
  justify-content: center;
  margin-top: 0.3rem;
  & > div {
    width: 50%;
    text-align: center;
    span {
      display: block;
      width: calc(100%-0.04rem);
      height: 1.6rem;
      margin: 0 auto;
      line-height: 1.6rem;
      border: 0.04rem solid #ffffff;
      .px2rem(font-size, 18px);
      font-weight: 500;
    }
    .isActive {
      background: #ffffff;
      color: @theme-red;
    }
  }
}
</style>
