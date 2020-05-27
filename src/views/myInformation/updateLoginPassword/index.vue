<template>
    <div>
        <van-nav-bar title="修改密码" v-if="this.wechat()" fixed left-arrow @click-left="$router.go(-1)"></van-nav-bar>
        <div>

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
        name: "updateLoginPassword"
    }
</script>

<style scoped>

</style>