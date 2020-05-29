<template>
    <div class="bgColor">
        <van-row class="userMessageTop">
            <div class="userMessage">账户信息</div>
            <van-col cpan="4" offset="1">
                <img src="../../assets/img/headPortrait.png" height="52" width="52"/>
            </van-col>
            <van-col span="14" offset="1" class="userName">
                <div>{{bsMbOptVO.username}}</div>
                <div>{{bsMbOptVO.str04}}</div>
            </van-col>
            <van-col span="2">
                <van-button color="#ff8847"  @click="$router.go(-1)"  size="small">返回</van-button>
            </van-col>
        </van-row>
        <div style="margin-top: 10px">
            <div class="userNumber">
                <van-row>
                    <van-col span="24" offset="2" class="userName2">
                        <van-icon name="manager" color="#B3B3B3" size="1.5em"/>
                        用户名 : {{bsMbOptVO.userid}}
                    </van-col>


                    <van-col span="24" offset="2" class="phone">
                        <van-icon name="phone" color="#B3B3B3" size="1.5em"/>
                        手机号 : {{bsMbOptVO.mobile}}
                    </van-col>
                </van-row>
            </div>
            <div class="psdMaintenance">
                <van-cell title="修改登录密码" is-link to="myInformation/updateLoginPassword"/>
                <van-cell title="维护业务密码" is-link />
                <van-cell title="维护财务密码" is-link />
            </div>
        </div>
        <div class="quitDiv">
            <van-button @click="quitLogin" round type="danger" size="large">退出登录</van-button>
        </div>

    </div>
</template>

<script>
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
        Popup,
        Button,
        Cell,
        CellGroup
    } from "vant";
    import Cookies from "js-cookie";
    export default {
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
            [Popup.name]: Popup,
            [Button.name]: Button,
            [CellGroup.name]: CellGroup,
            [Cell.name]: Cell,
    },
        name: "myInformation",
        data(){
          return{
              //我的信息
              bsMbOptVO:{},
          }
        },
        mounted(){
            this.menberData();
        },
        methods:{
            //我的信息
            menberData(){
                this.$post('/public/elgrzc/menberData.do').then(res =>{
                    if(res.success){
                        this.bsMbOptVO = res.values.bsMbOptVO;
                    }
                })
            },
            //退出登录
            quitLogin(){
                this.$toast("退出12121")
                this.$post('/public/elgrzc/loginout.do',{ticket:Cookies.get("_tcdapt_")}).then(res =>{
                    console.log(res);
                })
                this.$router.push({
                    name: 'home',
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .px2rem(@name, @px) {
            @{name}: @px / 20px * 1rem;
    }
    .bgColor{
        background: #fff;
    }
    /deep/.userMessageTop{
        background: #c5191e;
        .px2rem(line-height, 25px);
        .userMessage{
            text-align: center;
            .px2rem(padding-top, 20px);
            .px2rem(padding-bottom, 20px);
            .px2rem(font-size, 20px);
            color: #fff;
        }
        .userName div:first-child{
            color: #fff;
        }
        .userName div:last-child{
            color: #FF8D93;
        }
    }
    .userNumber{
        width: 97%;
        .px2rem(height, 125px);
        background-image: url("../../assets/img/user.png");
        box-shadow: 2px 2px 2px #ccc;
        .userName2{
            .px2rem(padding-top, 25px);
        }
        .phone{
            .px2rem(padding-top, 30px);
        }
    }
    .psdMaintenance{
        .px2rem(padding-top, 30px);
    }
    .quitDiv{
        .px2rem(padding-top, 30px);
        .px2rem(padding-bottom, 30px);
        width: 70%;
        margin: auto;
    }
</style>