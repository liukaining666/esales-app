<template>
  <div class="g-wrapper">
    <van-nav-bar title="我的" left-arrow v-if="this.wechat()" fixed @click-left="$router.go(-1)"></van-nav-bar>
    <!-- 卡片 -->
    <div class="m-inner top-card-area">
      <div class="card-wrapper">
        <div class="card-content">
          <div class="u-top">
            <div class="avatar-area">
              <img src="http://testn.longscs.com/file/my1/avatar.png" alt />
            </div>
            <div class="user-info">
              <h5>{{userName}}</h5>
              <p>{{userInfo.mbname}}</p>
            </div>
            <div class="user-account">
              <p @click="to_login()">
                账户管理
                <van-icon name="arrow" />
              </p>
            </div>
          </div>
          <div class="u-bottom">
            <div v-if="hyType == '1' || hyType == '3'">
              <span :class="userType=='1' ? 'isActive': ''" @click="changeUserType('1')">我是采购商</span>
            </div>
            <div v-if="hyType == '2' || hyType == '3'">
              <span :class="userType=='2' ? 'isActive': ''" @click="changeUserType('2')">我是供应商</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="m-inner menu-list" v-if="userType == '1'">
      <div class="menu-list-content">
        <div class="u-row">
          <div class="u-row-item width3">
            <div class="u-inner">
              <div class="icon-wrapper">
                <img src="http://testn.longscs.com/file/my2/icon_3.png" alt />
              </div>
              <p>我的计划</p>
            </div>
          </div>
          <div class="u-row-item width3">
            <div class="u-inner">
              <div class="icon-wrapper">
                <img src="http://testn.longscs.com/file/my2/icon_1.png" alt />
              </div>
              <p>我的购物车</p>
            </div>
          </div>
          <div class="u-row-item width3">
            <div class="u-inner">
              <div class="icon-wrapper">
                <img src="http://testn.longscs.com/file/my2/icon_4.png" alt />
              </div>
              <p>我的订单</p>
            </div>
          </div>
        </div>
        <div class="u-row">
          <div class="u-row-item width3">
            <div class="u-inner" @click="link_xj()">
              <div class="icon-wrapper">
                <img src="http://testn.longscs.com/file/my2/icon_6.png" alt />
              </div>
              <p>我的询价</p>
            </div>
          </div>
          <div class="u-row-item">
            <div class="u-inner-list">
              <div @click="link_Xdsh()">
                <h6>{{userJobInfo.xjdsh}}</h6>
                <p>待审核</p>
              </div>
              <div @click="link_Xdxj()">
                <h6>{{userJobInfo.xjdxj}}</h6>
                <p>待询价</p>
              </div>
              <div @click="link_Xshz()">
                <h6>{{userJobInfo.xjshz}}</h6>
                <p>审核中</p>
              </div>
            </div>
          </div>
        </div>
        <div class="u-row">
          <div class="u-row-item width3">
            <div class="u-inner" @click="link_bj()">
              <div class="icon-wrapper">
                <img src="http://testn.longscs.com/file/my2/icon_5.png" alt />
              </div>
              <p>我的比价</p>
            </div>
          </div>
          <div class="u-row-item">
            <div class="u-inner-list">
              <div @click="link_Bdsh()">
                <h6>{{userJobInfo.bjdsh}}</h6>
                <p>待审核</p>
              </div>
              <div @click="link_Bddb()">
                <h6>{{userJobInfo.bjddb}}</h6>
                <p>待定标</p>
              </div>
              <div @click="link_Bshz()">
                <h6>{{userJobInfo.bjshz}}</h6>
                <p>审核中</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="u-row-item width3">
            <div class="u-inner" @click="link_ht()">
              <div class="icon-wrapper">
                <img src="http://testn.longscs.com/file/my2/icon_2.png" alt />
              </div>
              <p>我的合同</p>
            </div>
          </div>
          <div class="u-row-item">
            <div class="u-inner-list">
              <div @click="link_Hdsh()">
                <h6>{{userJobInfo.htdsh}}</h6>
                <p>待审核</p>
              </div>
              <div @click="link_Hshz()">
                <h6>{{userJobInfo.htshz}}</h6>
                <p>审核中</p>
              </div>
              <div @click="link_Hdss()">
                <h6>{{userJobInfo.htdss}}</h6>
                <p>待送审</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="m-inner menu-list" v-if="userType == '2'">
      <div class="menu-list-content">
        <div class="u-row">
          <div class="u-row-item width3">
            <div class="u-inner">
              <div class="icon-wrapper">
                <img src="http://testn.longscs.com/file/my1/icon_2.png" alt />
              </div>
              <p>我的准入</p>
            </div>
          </div>
          <div class="u-row-item">
            <div class="u-inner-list">
              <div>
                <h6>{{userJobInfo.cgysdsh}}</h6>
                <p>待审核</p>
              </div>
            </div>
          </div>
        </div>
        <div class="u-row">
          <div class="u-row-item width3">
            <div class="u-inner" @click="my_bj()">
              <div class="icon-wrapper">
                <img src="http://testn.longscs.com/file/my1/icon_1.png" alt />
              </div>
              <p>我的报价</p>
            </div>
          </div>
          <div class="u-row-item">
            <div class="u-inner-list">
              <div @click="my_bj_dbj()">
                <h6>{{userJobInfo.gdbj}}</h6>
                <p>待报价</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="u-row-item width3">
            <div class="u-inner" @click="my_ht()">
              <div class="icon-wrapper">
                <img src="http://testn.longscs.com/file/my1/icon_3.png" alt />
              </div>
              <p>我的合同</p>
            </div>
          </div>
          <div class="u-row-item">
            <div class="u-inner-list">
              <div @click="my_ht_dqr()">
                <h6>{{userJobInfo.ghtdqr}}</h6>
                <p>待确认</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="u-row-item width3">
            <div class="u-inner">
              <div class="icon-wrapper">
                <img src="http://testn.longscs.com/file/my1/icon_4.png" alt />
              </div>
              <p>我的订单</p>
            </div>
          </div>
          <div class="u-row-item">
            <div class="u-inner-list"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NavBar, Icon, Button } from "vant";
import Cookies from "js-cookie";
export default {
  name: "account",
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Button.name]: Button
  },
  data() {
    return {
      userType: "1",
      hyType: "1", // '1':采购商 '2':供应商 '3':综合
      userInfo: {},
      userName: '',
      userJobInfo: {
        cgdsh: 0, // 采购商-询价-待审核
        cgdxj: 0, // 采购商-询价-待询价
        cgshz: 0, // 采购商-询价-审核中

        cbjdsh: 0, // 采购商-比价-待审核
        cbjddb: 0, // 采购商-比价-待定标
        cbjdhz: 0, // 采购商-比价-审核中

        ghtdss: 0, // 采购商-合同-待送审
        ghtshz: 0, // 采购商-合同-审核中
        chtdsh: 0, // 采购商-合同-待审核

        cgysdsh: 0, // 供应商-准入-待审核
        ghtdqr: 0, // 供应商-合同-待确认
        gdbj: 0 // 供应商-我的报价-待报价
      }
    };
  },
  mounted() {
    this.init();
    this.getUserInfo();
  },
  methods: {
    init() {
      // hyType: '1':采购商 '2':供应商 '3':综合
      this.hyType = Cookies.get("hyType");
      const current_hytype = sessionStorage.getItem("CURRENT_HYTYPE")

      if (current_hytype == "2") {
        this.userType = "2";
      } else {
        this.userType = "1";
        if(this.hyType == "2") {
          sessionStorage.setItem("CURRENT_HYTYPE","2")
        }else {
          sessionStorage.setItem("CURRENT_HYTYPE","1")
        }
      }
    },
    // 改变用户角色
    changeUserType(type) {
      this.userType = type;
      sessionStorage.setItem("CURRENT_HYTYPE",type)
    },
    // 获取用户信息
    getUserInfo() {
      this.$post("/public/ebIndex/queryMyCount.do").then(res => {
        if (res.success && res.values.countObj) {
          res.values.countObj && (this.userJobInfo = res.values.countObj);
          res.values.countObj && (this.userInfo = res.values.countObj.menber);
          res.values.user && (this.userName = res.values.user.userName);
        } else {
          this.$toast("查询失败！")
        }
      });
    },
    //账户管理
    to_login(){
      this.$router.push({
        name: 'login',
      })
    },
    //询价跳转
    link_xj(){
      this.$router.push({
        name: 'appinquiryPriceList',
        query : {
            status:'',
        }
      })
    },
   link_Xdsh(){
      this.$router.push({
        name: 'appinquiryPriceList',
        query : {
          status:'02',
          fla:'1',
        }
      })
    },
    link_Xdxj(){
      this.$router.push({
        name: 'appinquiryPriceList',
        query : {
          status:'01',
          fla:'2',
        }
      })
    },
    link_Xshz(){
      this.$router.push({
        name: 'appinquiryPriceList',
        query : {
          status:'02',
          fla:'2',
        }
      })
    },
    link_bj(){
      this.$router.push({
        name: 'parity',
        query : {
          status:'',
          fla:''
        }
      })
    },
    link_Bdsh(){
      this.$router.push({
        name: 'parity',
        query : {
          status:'',
          fla:1,
        }
      })
    },
    link_Bddb(){
      this.$router.push({
        name: 'parity',
        query : {
          status:'',
          fla:2,
        }
      })
    },
    link_Bshz(){
      this.$router.push({
        name: 'parity',
        query : {
          status:'',
          fla:3,
        }
      })
    },
    link_ht(){
      this.$router.push({
        name: 'appcontractPurchase',
        query : {
          status:'',
        }
      })
    },
    link_Hdsh(){
      this.$router.push({
        name: 'appcontractPurchase',
        query : {
          status:'1',
          fla:'1'
        }
      })
    },
    link_Hshz(){
      this.$router.push({
        name: 'appcontractPurchase',
        query : {
          status:'1',
          fla:''
        }
      })
    },
    link_Hdss(){
      this.$router.push({
        name: 'appcontractPurchase',
        query : {
          status:'0',
          fla:'2'
        }
      })
    },
    /*供应商*/
    my_bj(){
      this.$router.push({
        name: 'appofferList',
        query : {
          status:'',
          fla:''
        }
      })
    },
    my_bj_dbj(){
      this.$router.push({
        name: 'appofferList',
        query : {
          status:'',
          fla:'1'
        }
      })
    },
    my_ht(){
      this.$router.push({
        name: 'appcontractSupplier',
        query : {
          status:'',
        }
      })
    },
    my_ht_dqr(){
      this.$router.push({
        name: 'appcontractSupplier',
        query : {
          status:'11',
          fla:'2'
        }
      })
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
.g-wrapper {
  min-height: 100vh;
  padding-bottom: 3rem;
  background-color: @theme-gray;
}
.m-inner {
  margin-bottom: 0.5rem;
  & > h5 {
    margin: 0;
    padding: 0.5rem 0.8rem;
  }
}

.top-card-area {
  .card-wrapper {
    width: 96%;
    margin: 0 auto;
    padding: 0.5rem 0;
    .card-content {
      background: url("http://testn.longscs.com/file/home/bg_1.png") center no-repeat;
      background-size: cover;
      color: #ffffff;
      padding: 0.8rem;
      border-radius: 0.3rem;
      .u-top {
        display: flex;
        align-items: center;
        padding-bottom: 0.4rem;
        margin-bottom: 0.6rem;
        border-bottom: 0.05rem dashed @theme-gray;
        .avatar-area {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background: #ffffff;
          overflow: hidden;
          margin-right: 0.5rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .user-info {
          flex-grow: 1;
          h5 {
            .px2rem(font-size, 20px);
            margin: 0.5rem 0;
          }
          p {
            .px2rem(font-size, 12px);
          }
        }
        .user-account {
          p {
            .px2rem(font-size, 14px);
          }
        }
      }
      .u-bottom {
        .px2rem(font-size, 16px);
        display: flex;
        justify-content: center;
        & > div {
          width: 50%;
          text-align: center;
          span {
            display: block;
            width: 5rem;
            height: 1.6rem;
            margin: 0 auto;
            line-height: 1.6rem;
            border-radius: 0.8rem;
            .px2rem(font-size, 14px);
          }
          .isActive {
            background: #ffffff;
            color: @theme-red;
          }
        }
      }
    }
  }
}

.menu-list {
  background: @theme-gray;
  .width3 {
    width: 33%;
  }
  .no-padding {
    padding: 0;
  }
  &-content {
    width: 94%;
    margin: 0 auto;
    background: #ffffff;
    & > div {
      padding: 0.5rem;
      display: flex;
      .u-row-item {
        margin: 0 0.5rem;
        text-align: center;
        .icon-wrapper {
          .px2rem(width, @icon-size);
          .px2rem(height, @icon-size);
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto;
          img {
            width: 100%;
            height: 100%;
          }
        }
        p {
          .px2rem(font-size, 14px);
          font-weight: 600;
          margin: 0.5rem 0;
        }
        .u-inner-list {
          display: flex;
          margin-left: -1rem;
          & > div {
            padding: 0 0.5rem;
          }
          h6 {
            color: @theme-red;
            margin: 0;
            .px2rem(font-size, 18px);
            .px2rem(line-height, @icon-size);
            font-weight: 500;
          }
          p {
            color: #999999;
          }
        }
      }
    }
    .u-row {
      border-bottom: 0.05rem dashed @theme-gray;
      position: relative;
      &::before {
        content: "";
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: @theme-gray;
        position: absolute;
        bottom: -0.25rem;
        left: -0.25rem;
      }
      &::after {
        content: "";
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: @theme-gray;
        position: absolute;
        bottom: -0.25rem;
        right: -0.25rem;
      }
    }
  }
}
</style>
