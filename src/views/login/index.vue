<template>
  <div>
    <van-nav-bar title="登录" v-if="this.wechat()" left-arrow @click-left="$router.go(-1)"></van-nav-bar>
    <van-cell-group class="login-form">
      <van-field
        v-model="username"
        clearable
        placeholder="请输入用户名或手机号码"
        @click-icon="username=''"
        :error-message="userErr"
        @input="userErr = ''"
      />
      <van-field
        v-model="password"
        type="password"
        clearable
        placeholder="请输入密码"
        @click-icon="password=''"
        :error-message="passErr"
        @input="passErr = ''"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit" @click="onSubmit">登录</van-button>
    </div>
  </div>
</template>

<script>
import { NavBar, Cell, CellGroup, Field, Button } from "vant";
import Cookies from "js-cookie";
export default {
  name: "login",
  components: {
    [NavBar.name]: NavBar,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Button.name]: Button
  },
  data() {
    return {
      username: "",
      password: "",
      userErr: "",
      passErr: ""
    };
  },
  methods: {
    // 校验
    verification() {
      if (!this.username) {
        this.userErr = "请输入用户名！";
        return false;
      }

      if (!this.password) {
        this.passErr = "请输入密码！";
        return false;
      }

      return true;
    },
    // 提交登录
    onSubmit() {
      this.verification() &&
        this.$post("/public/frame/login.do", {
          username: this.username.trim(),
          password: this.password.trim()
        }).then(res => {
          if (res.success) {
            Cookies.set("_tcdapt_", res.values.ticket, { expires: 90 })
            Cookies.set("hyType", res.values.hyType, { expires: 90 })
            
            if (res.values.hyType == 2) {
              sessionStorage.setItem("CURRENT_HYTYPE","2")
            } else {
              sessionStorage.setItem("CURRENT_HYTYPE","1")
            }

            this.$router.push({
              name: 'menu'
            })
          } else {
            this.passErr = res.message
          }
        });
    }
  }
};
</script>

<style scoped lang="less">
.login-form {
  width: 80%;
  margin: 0 auto;
}
</style>
 