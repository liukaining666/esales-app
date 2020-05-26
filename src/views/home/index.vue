<template>
  <div class="g-wrapper">
    <van-nav-bar title="首页" fixed v-if="this.wechat()"></van-nav-bar>
    <div class="m-inner top-banner">
      <van-swipe class="my-swipe" :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
      <div class="m-top-search-wrapper">
        <van-dropdown-menu class="top-select">
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
        <van-search class="top-search" v-model="value" shape="round" placeholder="请输入品名、材质、规格、产地" />
      </div>
    </div>
    <div class="m-inner menu-list">
      <van-grid :gutter="10" :column-num="5">
        <van-grid-item
          v-for="(item, index) in menuList"
          :key="index"
          icon="photo-o"
          :text="item.name"
          @click="linkTo(item.url)"
        />
      </van-grid>
    </div>

    <div class="m-inner shipment-card-list">
      <van-row>
        <van-col span="12">
          <div class="shipment-card shipment-card_1">
            <h4>238943</h4>
            <p>上月出货量(吨)</p>
          </div>
        </van-col>
        <van-col span="12">
          <div class="shipment-card shipment-card_2">
            <h4>238943</h4>
            <p>上月出货量(吨)</p>
          </div>
        </van-col>
      </van-row>
    </div>

    <div class="m-inner chart-tab">
      <van-tabs v-model="active" @click="tabChange">
        <van-tab title="实时出货量">
          <div ref="aChart1" style="width: 100%;height:200px;"></div>
        </van-tab>
        <van-tab title="出货量走势">
          <div ref="aChart2" style="width: 100%;height:200px;"></div>
        </van-tab>
      </van-tabs>
    </div>

    <div class="m-inner plan-tab">
      <van-tabs v-model="activePlan">
        <van-tab title="今日计划">
          <div class="c-plan-card" v-for="(itemP, indexP) in list" :key="indexP">
            <div class="c-title">
              <div class="inner">
                <div class="left">
                  <span class="title_1">盘螺</span>
                  <span class="title_2">抚顺新钢铁</span>
                  <span class="title_3 c-value">HT19099409401</span>
                </div>
                <div class="right">
                  <span class="title_4">建龙自营</span>
                </div>
              </div>
            </div>
            <div class="c-content">
              <div class="list-item" v-for="(item, index) in list" :key="index">
                <div>
                  <span class="c-value margin-right_30">HRB400E @10</span>
                </div>
                <div>
                  <span class="icon-label bg-red">总</span>
                  <span class="c-value">100吨</span>
                </div>
                <div>
                  <span class="icon-label bg-yellow">开单</span>
                  <span class="c-value">30吨</span>
                </div>
                <div>
                  <span class="icon-label bg-blue">实提</span>
                  <span class="c-value">30吨</span>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="发运进度">
          <div class="c-plan-card" v-for="(itemP, indexP) in list" :key="indexP">
            <div class="c-title">
              <div class="inner">
                <div class="left">
                  <span class="title_1">盘螺</span>
                  <span class="title_2">抚顺新钢铁</span>
                  <span class="title_3 c-value">HT19099409401</span>
                </div>
                <div class="right">
                  <span class="title_4">建龙自营</span>
                </div>
              </div>
            </div>
            <div class="c-content">
              <div class="list-item" v-for="(item, index) in list" :key="index">
                <div>
                  <span class="c-value margin-right_30">HRB400E @10</span>
                </div>
                <div>
                  <span class="icon-label bg-red">总</span>
                  <span class="c-value">100吨</span>
                </div>
                <div>
                  <span class="icon-label bg-yellow">开单</span>
                  <span class="c-value">30吨</span>
                </div>
                <div>
                  <span class="icon-label bg-blue">实提</span>
                  <span class="c-value">30吨</span>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import initEcharts from "@/utils/initEcharts";
import {
  NavBar,
  DropdownMenu,
  DropdownItem,
  Search,
  Grid,
  GridItem,
  Row,
  Col,
  Tab,
  Tabs,
  Icon,
  Swipe,
  SwipeItem
} from "vant";
export default {
  name: "shopIndex",
  components: {
    [NavBar.name]: NavBar,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    [Search.name]: Search,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Row.name]: Row,
    [Col.name]: Col,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Icon.name]: Icon,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data() {
    return {
      value1: 0,
      option1: [
        { text: "全国", value: 0 },
        { text: "北京", value: 1 },
        { text: "上海", value: 2 }
      ],
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
      value: "",
      menuList: [
        { name: "订单", url: "/business/inventory" },
        { name: "计划", url: "/business/inventory" },
        { name: "提单", url: "/business/inventory" },
        { name: "物流", url: "/business/inventory" },
        { name: "异议", url: "/business/inventory" },
        { name: "结算", url: "/business/inventory" },
        { name: "发票", url: "/business/inventory" },
        { name: "贷款", url: "/business/inventory" },
        { name: "数据", url: "/business/inventory" },
        { name: "资讯", url: "/business/inventory" }
      ],
      active: 1,
      activePlan: 1,
      list: [1, 2, 3]
    };
  },
  mounted() {
    this.tabChange()
  },
  methods: {
    // 搜索
    onSearch() {},
    // 跳转链接
    linkTo(url) {
      this.$router.push({
        path: url
      });
    },
    // tabs切换
    tabChange() {
      if (this.active === 0) {this.draw_1()}
      if (this.active === 1) {this.draw_2()}
    },
    draw_1() {
      this.$nextTick(() => {
        const myChart = initEcharts.init(this.$refs.aChart1);
        var option = {
          legend: {},
          tooltip: {},
          dataset: {
            dimensions: ["product", "2015", "2016", "2017"],
            source: [
              {
                product: "Matcha Latte",
                "2015": 43.3,
                "2016": 85.8,
                "2017": 93.7
              },
              { product: "Milk Tea", "2015": 83.1, "2016": 73.4, "2017": 55.1 },
              {
                product: "Cheese Cocoa",
                "2015": 86.4,
                "2016": 65.2,
                "2017": 82.5
              },
              {
                product: "Walnut Brownie",
                "2015": 72.4,
                "2016": 53.9,
                "2017": 39.1
              }
            ]
          },
          xAxis: { type: "category" },
          yAxis: {},
          // Declare several bar series, each will be mapped
          // to a column of dataset.source by default.
          series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }]
        };
        myChart.setOption(option);
      });
    },
    draw_2() {
      this.$nextTick(() => {
        const myChart = initEcharts.init(this.$refs.aChart2);
        var option = {
          legend: {},
          tooltip: {},
          dataset: {
            dimensions: ["product", "2015", "2016", "2017"],
            source: [
              {
                product: "Matcha Latte",
                "2015": 43.3,
                "2016": 85.8,
                "2017": 93.7
              },
              { product: "Milk Tea", "2015": 83.1, "2016": 73.4, "2017": 55.1 },
              {
                product: "Cheese Cocoa",
                "2015": 86.4,
                "2016": 65.2,
                "2017": 82.5
              },
              {
                product: "Walnut Brownie",
                "2015": 72.4,
                "2016": 53.9,
                "2017": 39.1
              }
            ]
          },
          xAxis: { type: "category" },
          yAxis: {},
          // Declare several bar series, each will be mapped
          // to a column of dataset.source by default.
          series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }]
        };
        myChart.setOption(option);
      });
    }
  }
};
</script>

<style scoped lang="less">
.px2rem(@name, @px) {
  @{name}: @px / 20px * 1rem;
}
.margin-right_30 {
  .px2rem(margin-right, 10px);
}
.bg-red {
  background-color: #ee6666;
}
.bg-yellow {
  background-color: #66ee66;
}
.bg-blue {
  background-color: #6666ee;
}
.g-wrapper {
  min-height: 100vh;
  padding-bottom: 3rem;
  background-color: #eeeeee;
}
.m-inner {
  background-color: #ffffff;
  margin-bottom: 0.5rem;
}
// 头部banner
.top-banner {
  width: 100%;
  height: 12rem;
  position: relative;
}

// 头部搜索
.m-top-search-wrapper {
  width: 90%;
  padding: 0 5%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  .top-select {
    width: 4rem;
    .px2rem(margin-top, 9px);
    .px2rem(height, 36px);
    .px2rem(border-radius, 20px);
    background: rgba(0, 0, 0, 0.2);
    border-width: 0 !important;
  }
  /deep/.van-hairline--top-bottom::after {
    border-width: 0px !important;
  }
  /deep/.van-hairline-unset--top-bottom::after {
    border-width: 0px !important;
  }
  /deep/.van-dropdown-menu__title {
    color: #ffffff !important;
  }
  /deep/.van-ellipsis {
    color: #ffffff !important;
  }
  .top-search {
    flex-grow: 1;
    background: rgba(255, 255, 255, 0) !important;
  }
  .van-search__content {
    background-color: rgba(255, 255, 255, 0.8) !important;
  }
}
// 头部轮播图
.my-swipe {
  height: 100%;
  .van-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.menu-list {
  padding: 0.5rem 0;
  /deep/.van-grid-item__content--surround::after {
    border-width: 0;
  }
  /deep/.van-grid-item__content::after {
    border-width: 0;
  }
}
.shipment-card-list {
  padding: 0.8rem 0;
}
.shipment-card {
  width: 90%;
  margin: 0 auto;
  .px2rem(border-radius, 6px);
  color: #ffffff;
  text-align: center;
  h4 {
    padding: 0.6rem 0;
    border-bottom: 0.05rem solid #eeeeee;
    font-size: 1.4rem;
    margin: 0;
  }
  p {
    padding: 0.5rem 0;
    font-size: 1rem;
    margin: 0;
  }
}
.shipment-card_1 {
  background: #ffa233;
}
.shipment-card_2 {
  background: #ff3333;
}
.chart-tab {
  text-align: center;
  .van-icon {
    .px2rem(font-size, 100px);
  }
}

.plan-tab {
  padding-bottom: 0.8rem;
}
.c-plan-card {
  width: 94%;
  margin: 0 auto;
  border: 0.05rem solid #eeeeee;
  .px2rem(border-radius, 8px);
  margin-top: 0.5rem;
  box-shadow: 0px 2px 4px #dddddd;
  .c-value {
    color: #999999;
    .px2rem(font-size, 14px);
  }
  .c-title {
    border-bottom: 0.05rem solid #f9f9f9;
    .inner {
      height: 2rem;
      line-height: 2rem;
      padding: 0 0.5rem;
      .px2rem(font-size, 12px);
      .left {
        float: left;
        span {
          margin-right: 0.3rem;
        }
      }
      .right {
        float: right;
      }
      .title_1 {
        .px2rem(font-size, 18px);
        .px2rem(margin-right, 10px) !important;
      }
      .title_2 {
        padding: 0.1rem;
        .px2rem(border-radius, 2px);
        border: 0.05rem solid #ff0000;
        color: #ff0000;
      }
      .title_4 {
        padding: 0.1rem;
        .px2rem(border-radius, 2px);
        background: #dd0000;
        color: #ffffff;
      }
    }
  }
  .c-content {
    .icon-label {
      padding: 0 0.15rem;
      margin: 0 0.2rem;
      .px2rem(font-size, 14px);
      .px2rem(border-radius, 2px);
      color: #ffffff;
      text-align: center;
    }
    .list-item {
      padding: 0 0.5rem;
      margin: 0.4rem 0;
      display: flex;
    }
  }
}
</style>
