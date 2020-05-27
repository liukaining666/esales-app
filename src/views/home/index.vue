<template>
  <div class="g-wrapper">
    <div class="m-top-search-wrapper">
      <van-search class="top-search"
                  v-model="value"
                  shape="round"
                  @click="show=true"
                  placeholder="请输入品名、材质、规格、产地"
      />
      <van-popup v-model="show" :style="{ height: '100%',width: '100%' }">
        <van-nav-bar title="钢材好" v-if="this.wechat()"  left-arrow @click-left="show = false"></van-nav-bar>
        <van-col span="24" class="search">
          <van-search
                  background="#d1d1d1"
                  autofocus
                  placeholder="搜索挂牌资源,请输入品名、材质、规格、产地"
                  shape="round"
          />
        </van-col>
        <van-col span="24" class="searchContent">
          <div>搜索指定内容</div>
        </van-col>
        <van-row class="searchTxt">
          <van-col span="4" offset="4" v-for="(value,index) in searchTxtList" :key="index" :class="{backColorStyle:backColor}">{{value.name}}</van-col>

        </van-row>


      </van-popup>
    </div>
    <div class="m-inner top-banner">
      <van-swipe class="my-swipe" :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>

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
            <h4>{{lastMonthShipment}}</h4>
            <p>上月出货量(吨)</p>
          </div>
        </van-col>
        <van-col span="12">
          <div class="shipment-card shipment-card_2">
            <h4>{{thisMonthShipment}}</h4>
            <p>本月出货量(吨)</p>
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

    <!--  <div class="m-inner plan-tab">
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
      </div>-->
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
    SwipeItem,
    Popup
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
      [SwipeItem.name]: SwipeItem,
      [Popup.name]: Popup
    },
    data() {
      return {
        backColor:true,
        show:true,
        images: [
          "https://img.yzcdn.cn/vant/apple-1.jpg",
          "https://img.yzcdn.cn/vant/apple-2.jpg"
        ],
        value: "",
        menuList: [
          { name: "订单", url: "/business/inventory" ,iconUrl: "http://testn.longscs.com/file/home/icon_7.png"},
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
        active: 0,
        activePlan: 1,
        list: [1, 2, 3],
        searchTxtList:[
          {id:1,name:'挂牌'},{id:2,name:'计划'},{id:3,name:'提单'},{id:4,name:'订单'},{id:5,name:'快讯'},{id:6,name:'公告'},
        ],
        //会员编码
        hydm:'001003',
        //上月出货量
        lastMonthShipment:'- -',
        //本月出货量
        thisMonthShipment:'- -',
        realTimeShipmentList:[],
        realTimeShipmentList2:[],
      };
    },
    mounted() {
      //this.queryTodayPlan()
      /*this.queryRealTimeShipment();
      this.queryLastMonthShipment();
      this.queryThisMonthShipment();
      this.querySevenDaysShipment();*/
    },
    methods: {
      //搜索
      shuru(){
        console.log(111);
      },
      //上月出货量
      queryLastMonthShipment(){
        this.$post('/public/shipmentData/queryLastMonthShipment.do',{hydm:this.hydm}).then(res =>{
          if (res.success){
            this.lastMonthShipment = res.values.lastMonthShipment;
          }
        })
      },

      //本月出货量
      queryThisMonthShipment(){
        this.$post('/public/shipmentData/queryThisMonthShipment.do',{hydm:this.hydm}).then(res =>{
          if (res.success){
            this.thisMonthShipment = res.values.thisMonthShipment;
          }
        })
      },
      //实时出货量
      async queryRealTimeShipment(){
        await this.$post('/public/shipmentData/queryRealTimeShipment.do',{hydm : this.hydm}).then(res =>{
          if (res.success) {
            this.realTimeShipmentList = res.values.realTimeShipmentList;
          }
        })
        await this.tabChange();
      },
      //出货量走势
      async querySevenDaysShipment(){
        await this.$post('/public/shipmentData/querySevenDaysShipment.do',{hydm : this.hydm}).then(res =>{
          if (res.success) {
            this.realTimeShipmentList2 = res.values.realTimeShipmentList;
          }
        });
        await this.tabChange();
      },
      ///public/startPage/queryTodayPlan.do
      queryTodayPlan(){
        this.$post('/public/startPage/queryTodayPlan.do',{hydm : this.hydm}).then(res =>{
          if (res.success) {
            console.log(res);
          }
        });
      },

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
            tooltip: {},
            dataset: {
              dimensions: ["product", "昨日出货量", "今日出货量", "昨日出货额", "今日出货额"],
              source: this.realTimeShipmentList
            },
            xAxis: { type: "category" },
            yAxis: [
              {
                type: 'value',
                name: '出货量',
              },
              {
                type: 'value',
                name: '出货额',
              },

            ],
            // Declare several bar series, each will be mapped
            // to a column of dataset.source by default.
            series: [{ type: "bar" }, { type: "bar" }, { type: "line" ,yAxisIndex: 1}, { type: "line" ,yAxisIndex: 1}]
          };
          myChart.setOption(option);
        });
      },
      draw_2() {
        this.$nextTick(() => {
          const myChart = initEcharts.init(this.$refs.aChart2);
          var option = {
            tooltip: {},
            dataset: {
              dimensions: ["product", "上周(吨)", "本周(吨)", "上周(笔)", "本周(笔)"],
              source: this.realTimeShipmentList2
            },
            xAxis: { type: "category" },
            yAxis: [
              {
                type: 'value',
                name: '出货量',
              },
              {
                type: 'value',
                name: '出货额',
              },
            ],
            // Declare several bar series, each will be mapped
            // to a column of dataset.source by default.
            series: [{ type: "bar" }, { type: "bar" }, { type: "line" ,yAxisIndex: 1}, { type: "line" ,yAxisIndex: 1}]
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
  .backColorStyle{
    background-color: #c5191e !important;
  }
  // 头部搜索
  .m-top-search-wrapper {
    width: 90%;
    padding: 0 5%;
    position: absolute;
    top: 0;
    left: 0;
    background: #c9151e;
    display: flex;
    .top-select {
      width: 4rem;
      .px2rem(margin-top, 9px);
      .px2rem(height, 36px);
      .px2rem(border-radius, 20px);
      background: rgba(0, 0, 0, 0.2) !important;
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
  .searchContent{
    text-align: center;
    .px2rem(font-size, 16px);
    .px2rem(margin-top, 9px);
    color: #c5191e;
  }
  .searchTxt{
    text-align: center;
    .px2rem(margin-top, 100px);
    .px2rem(font-size, 16px);
    .van-col{
      background-color: #f1f1f1;
      .px2rem(margin-top, 10px);
      .px2rem(border-radius, 15px);
      .px2rem(padding, 5px);

    }
  }
</style>
