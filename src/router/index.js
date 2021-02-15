import Vue from "vue";
import VueRouter from "vue-router";

/** layout */
import layout from 'components/content/layout'

Vue.use(VueRouter);

const routes = [
  {
    name: "login",
    path: "/login",
    component: () => import("views/login/Login"),
  },
  {
    path: "/",
    component: layout,
    children: [
      {
        name: 'dashboard',
        path: '/',
        component: () => import("views/dashboard/Dashboard"),
        meta: { title: '首页'}
      },
      {
        path: 'users',
        name: '/users',
        component: () => import("views/user/Users"),
        meta: { title: '用户列表'}
      }
    ]
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 路由导航守卫，判断登录权限
router.beforeEach((to, from, next) => {
  //to and from are Route Object,next() must be called to resolve the hook}
  if (to.path === "/login") return next();

  const token = window.sessionStorage.getItem("token");
  if (!token) return next("/login");
  next();
});

export default router;
