<template>
  <div class="m-screen-wrapper">
    <div>
      建材
      <span class="u-sort m-deopdown-icon">
        <van-icon class="u-sort__down" name="play" />
      </span>
    </div>
    <div @click="handleSortChange">
      挂牌量
      <span class="u-sort">
        <van-icon class="u-sort__top" :class="sort==1 ? 'active' : ''" name="play" />
        <van-icon class="u-sort__down" :class="sort==2 ? 'active' : ''" name="play" />
      </span>
    </div>
    <div @click="handleSortChange">
      规格
      <span class="u-sort">
        <van-icon class="u-sort__top" :class="sort==1 ? 'active' : ''" name="play" />
        <van-icon class="u-sort__down" :class="sort==2 ? 'active' : ''" name="play" />
      </span>
    </div>
    <div @click="handleSortChange">
      价格
      <span class="u-sort">
        <van-icon class="u-sort__top" :class="sort==1 ? 'active' : ''" name="play" />
        <van-icon class="u-sort__down" :class="sort==2 ? 'active' : ''" name="play" />
      </span>
    </div>
    <div>
        <van-icon size="20px" name="bar-chart-o" />
    </div>
  </div>
</template>

<script>
import { Icon } from "vant";
export default {
  name: "resources",
  components: {
    [Icon.name]: Icon
  },
  data() {
    return {
      sort: null
    };
  },
  mounted() {},
  methods: {
    //   挂牌量排序
    handleSortChange() {
      if (this.sort == 1) {
        this.sort = 2;
      } else {
        this.sort = 1;
      }
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

.m-screen-wrapper {
    position: relative;
  background: #ffffff;
  height: 2rem;
  line-height: 2rem;
  display: flex;
  & > div {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.u-sort {
  margin-left: 0.2rem;
  position: relative;
  .px2rem (height, 22px);
  i {
    color: #dddddd;
  }
  .u-sort__top {
    transform: rotate(-90deg);
    position: absolute;
    top: 0;
    left: 0;
  }
  .u-sort__down {
    transform: rotate(90deg);
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .active {
    color: @theme-red;
  }
}

.m-deopdown-icon {
  .u-sort__down {
    transform: rotate(90deg);
    position: absolute;
    bottom: 0.15rem;
    left: 0;
  }
}
</style>
