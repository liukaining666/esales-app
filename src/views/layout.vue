<template>
  <div>
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar/tabbar.vue"
export default {
  name: "layout",
  components: {
    tabbar
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="less">
.px2rem(@name, @px) {
  @{name}: @px / 20px * 1rem;
}
</style>

