<template>
  <div id="app">
    <router-view />
    <global-loading v-show="LOADING"></global-loading>
  </div>
</template>

<script>
import { mapState } from "vuex";
import globalLoading from "@/components/globalLoading/globalLoading.vue";
import { isIOS } from "mobile-device-detect";
export default {
  computed: {
    ...mapState(["LOADING"])
  },
  name: "App",
  components: {
    globalLoading
  },
  mounted(){

  },
  methods: {},
  beforeMount() {
    sessionStorage.setItem("isIOS", isIOS);
  }
};
</script>
<style lang="less">
.px2rem(@name, @px) {
  @{name}: @px / 20px * 1rem;
}
@media screen and (min-width: 1080px) {
  html {
    font-size: 57.6px !important;
  }
}
html {
  font-size: 5.33333vw;
}
body {
  max-width: 1080px;
  margin: 0 auto !important;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
  background: #eeeeee;
  min-height: 100vh;
  margin: 0 auto;
  .px2rem(font-size, 14px)
}
</style>
