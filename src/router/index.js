import Vue from "vue";
import VueRouter from "vue-router";
import Cookies from "js-cookie";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: (resolve) => require(["../views/login/index.vue"], resolve),
  },
  {
    path: "/otherSystem",
    name: "otherSystem",
    component: (resolve) =>
      require(["../views/login/otherSystem.vue"], resolve),
  },
  {
    path: "/",
    name: "menu",
    component: (resolve) => require(["../views/layout.vue"], resolve),
    redirect: "/home",
    children: [
      {
        path: "/home", // 首页
        name: "home",
        component: (resolve) => require(["../views/home/index.vue"], resolve),
      },
      {
        path: "/account", // 我的
        name: "account",
        component: (resolve) =>
          require(["../views/account/index.vue"], resolve),
      },
      {
        path: "/myInformation", // 我的信息
        name: "myInformation",
        component: (resolve) =>
          require(["../views/myInformation/index.vue"], resolve),
      },
      {
        path: "/myInformation/updateLoginPassword", // 修改登录密码
        name: "updateLoginPassword",
        component: (resolve) =>
            require(["../views/myInformation/updateLoginPassword/index.vue"], resolve),
      },
      {
        path: "/resources", // 资源
        name: "resources",
        component: (resolve) =>
          require(["../views/resources/index.vue"], resolve),
      }
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  // base: process.env.BASE_URL,
  routes,
  //eslint-disable-next-line
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

// 免登陆白名单
const whiteLst = ["/login", "/home", "/otherSystem"];

router.beforeEach((to, from, next) => {
  if (whiteLst.indexOf(to.path) == -1) {
    // 哪些需要验证
    if (!Cookies.get("_tcdapt_")) {
      // token存在条件
      next({
        path: "/login", // 验证失败要跳转的页面
      });
    } else {
      next();
    }
  } else {
    next(); // 确保一定要调用 next()
  }
});

export default router;
