<template>
  <el-container class="app-wrapper">
    <el-aside width="210">
      <side-bar></side-bar>
    </el-aside>
    <el-container>
      <el-header height="50px">
        <nav-bar></nav-bar>
        <tab-tag></tab-tag>
      </el-header>
      <el-main>
        <app-main></app-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideBar from "components/content/sidebar/SideBar";
import NavBar from 'components/content/navbar/NavBar'
import AppMain from 'components/content/layout/AppMain'
import TabTag from 'components/common/TabTag'
export default {
  name: "Layout",
  components: { SideBar,NavBar,AppMain,TabTag },
};
</script>

<style lang="less" scoped>
.app-wrapper {
    height: 100vh;
}
.el-header {
  height: 50px;
  padding: 0;
  background-color: #fff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
.el-aside {
  background-color: #304156;
  color: #333;
  line-height: 200px;
}
.el-main {
  margin-top: 34px;
}
</style>