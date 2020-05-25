<template>
  <div></div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  name: "otherSystem",
  beforeMount() {
    this.init()
  },
  methods: {
    // 从其他系统登录
    init() {
      const ticket = this.$route.query.ticket;
      const hyType = this.$route.query.hyType;
      if (ticket) {
        Cookies.set("_tcdapt_", ticket, { expires: 90 });
        Cookies.set("hyType", hyType, { expires: 90 });
        this.$router.push({
          name: "account"
        });
      }
    }
  }
};
</script>

<style scoped lang="less">
</style>
 