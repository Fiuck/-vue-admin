<template>
  <el-container class="home-container">
    <!-- 侧边栏 -->
    <el-aside :width="collapseWidth">
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#304156"
        text-color="#BFCBD9"
        active-text-color="#409EFF"
        :unique-opened="true"
        :collapse="isCollapse"
        :collapse-transition="false"
        :router="true"
      >
        <el-submenu
          :index="'/' + item.path"
          v-for="item in menuList"
          :key="item.id"
        >
          <template slot="title">
            <i class="iconfont" :class="icons[item.id]"></i>
            <span>{{ item.authName }}</span>
          </template>
          <el-menu-item
            v-for="subItem in item.children"
            :key="subItem.id"
            :index="'/' + subItem.path"
            >{{ subItem.authName }}</el-menu-item
          >
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <!-- 顶部区 -->
      <el-header>
        <div class="hamburger-container" @click="doCollapse">
          <i :class="collapseIcon"></i>
        </div>
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <!-- 主体区 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Home",
  created() {
    this.getMenus();
  },
  data() {
    return {
      menuList: [],
      // 一级菜单图标
      icons: {
        "0000": "icon-home",
        101: "icon-goodsfill",
        102: "icon-order",
        103: "icon-lock",
        125: "icon-yonghu",
        145: "icon-DataHistogram",
      },
      // 是否折叠侧边栏
      isCollapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
      console.log(this.$route.matched);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    // 根据用户权限获取左侧的菜单
    getMenus() {
      this.$request({
        url: "/menus",
        method: "get",
      }).then((res) => {
        if (res.meta.status !== 200) return this.$message.error(res.meta.msg);
        this.menuList = res.data;
        this.menuList.unshift({
          authName: "首页",
          id: "0000",
          path: '/home'
        });
      });
    },
    // 折叠侧边栏
    doCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
  // 计算属性
  computed: {
    // 折叠侧边栏的宽度计算
    collapseWidth() {
      return this.isCollapse ? "64px" : "210px";
    },
    // 折叠侧边栏按钮的图标样式
    collapseIcon() {
      return this.isCollapse ? "el-icon-s-unfold" : "el-icon-s-fold";
    },
  },
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100vh;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 50px;
  height: 50px !important;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  padding-left: 0;
}

.el-aside {
  background-color: #304156;
  color: #333;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-submenu__title i {
  color: #bfcbd9;
  margin-right: 15px;
}
.el-menu {
  border-right: solid 0px #e6e6e6;
}
.hamburger-container {
  float: left;
  width: 50px;
  height: 50px;
  font-size: 22px;
  line-height: 50px;
  cursor: pointer;
  transition: 0.2s all;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
}
.el-breadcrumb {
  float: left;
  line-height: 50px;
  padding-left: 15px;
  font-size: 14px;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Arial, sans-serif;
}
</style>
