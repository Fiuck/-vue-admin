import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    name: "login",
    path: "/login",
    component: () => import("components/content/Login"),
  },
  {
    name: "home",
    path: "/home",
    component: () => import("components/content/Home"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 路由导航守卫，判断登录权限
router.beforeEach((to, from, next) => {
  //to and from are Route Object,next() must be called to resolve the hook}
  if (to.path === "/login") return next();

  const token = window.sessionStorage.getItem("token");
  if (!token) return next("/login");
  next();
});

export default router;
