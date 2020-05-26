<template>
  <!-- 竞价资源 -->
  <div class="m-resources-wrapper">
    <!-- 搜索 -->
    <div class="m-sceen">
      <screen></screen>
    </div>
    <!-- 列表 -->
    <div class="m-resources-list">
      <div class="list-item" v-for="(item, index) in list" :key="index">
        <div class="g-bill-list">
          <div class="m-list-head">螺纹钢(HRB400E/12*2000)</div>
          <div class="m-basic-info">
            <div>
              <p class="fc-red">1000.00</p>
              <p>起拍价(元/吨)</p>
            </div>
            <div>
              <p>11件22吨</p>
              <p>起拍价(元/吨)</p>
            </div>
            <div>
              <p>理计</p>
              <p>计量方式</p>
            </div>
          </div>
        </div>
        <div class="g-bill-list">
          <div class="m-area-info">
            <div>
              <div>
                <span class="u-label">仓库</span>
              </div>
              <div>
                <span>山西建龙库</span>
              </div>
            </div>
            <div>
              <div>
                <span class="u-label">产地</span>
              </div>
              <div>
                <span>山西建龙</span>
              </div>
            </div>
            <div>
              <div>
                <span class="u-label">定价区域</span>
              </div>
              <div>
                <span>西南区域</span>
              </div>
            </div>
            <div>
              <div>
                <span class="u-label">卖方</span>
              </div>
              <div>
                <span>山西建龙</span>
              </div>
            </div>
          </div>
        </div>
        <div class="m-operation-button">
          <div>
            <!-- <van-button class="u-button__addCar">加入购物车</van-button> -->
            <van-button class="u-buttom__addedCar">已加购物车</van-button>
          </div>
          <div>
            <van-button class="u-button__buy">直接采购</van-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from "vant";
import screen from "./screen";
export default {
  name: "resources",
  components: {
    [Button.name]: Button,
    screen
  },
  data() {
    return {
      resourcesType: "1",
      list: [1, 2, 3]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
@import url("./components.less");

@button-width: 40vw;
.u-button__addCar {
  width: @button-width;
  border: 0.05rem solid @theme-orange;
  color: @theme-orange;
  background: rgba(255, 255, 0, 0.1);
}
.u-buttom__addedCar {
  width: @button-width;
  border: 0.05rem solid #aaaaaa;
  color: #333333;
  background: rgba(100, 100, 100, 0.1);
}
.u-button__buy {
  width: @button-width;
  border: 0.05rem solid @theme-red;
  color: @theme-red;
  background: rgba(255, 0, 0, 0.1);
}
.m-operation-button {
  display: flex;
  justify-content: space-around;
}
</style>
