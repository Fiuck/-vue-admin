<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="activeMenu"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#BFCBD9"
      active-text-color="#409EFF"
      :unique-opened="true"
      mode="vertical"
      :router="true"
    >
      <side-bar-item
        v-for="route in menuList"
        :key="route.path"
        :item="route"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from "vuex";
import menuList from '@/json/menuList'
import SideBarItem from "components/content/sidebar/SideBarItem";
export default {
  name: "SideBar",
  components: { SideBarItem },
  data() {
    return {
      menuList: menuList.data
    };
  },
  computed: {
    ...mapGetters(["sidebar"]),
    // 此时激活状态的侧边栏标签
    activeMenu() {
      const route = this.$route;
      const { path } = route;
      return path;
    },
    // 侧边栏的关闭状态
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
      console.log(this.$route.matched);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
  },
};
</script>

<style lang='less' scoped>
.el-menu {
  border-right: solid 0px #e6e6e6;
}
.el-menu-vertical-demo {
  height: 100vh;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 210px;
}
.el-submenu__title i {
  color: #bfcbd9;
  margin-right: 15px;
}
</style>