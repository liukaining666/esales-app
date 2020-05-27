<template>
    <div class="bgColor">
        <van-row class="userMessageTop">
            <div class="userMessage">账户信息</div>
            <van-col cpan="4" offset="1">
                <img src="../../assets/img/headPortrait.png" height="52" width="52"/>
            </van-col>
            <van-col span="14" offset="1" class="userName">
                <div>张三</div>
                <div>大连瑞丰金属有限公司</div>
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
                        用户名 : qbx
                    </van-col>

                    <van-col span="24" offset="2" class="phone">
                        <van-icon name="phone" color="#B3B3B3" size="1.5em"/>
                        手机号 : 18643205210
                    </van-col>
                </van-row>
            </div>
            <div class="psdMaintenance">
                <van-cell title="修改登录密码" is-link to="myInformation/updateLoginPassword"/>
                <van-cell title="维护业务密码" is-link />
                <van-cell title="维护财务密码" is-link />
            </div>
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
        name: "myInformation"
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
</style>