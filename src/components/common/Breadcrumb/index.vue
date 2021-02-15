<template>
  <transition name="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item
        :to="{ path: toPath }"
        v-if="showMenu"
        class="no-redirect"
        >{{ menuName }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Breadcrumb",
  computed: {
    ...mapGetters(["navbar"]),
    showMenu() {
      return this.sessionData === "null" ? false : true;
    },
    toPath() {
      return this.navbar.currentMenu
        ? "/" + this.navbar.currentMenu.path
        : "/" + JSON.parse(this.sessionData).path;
    },
    menuName() {
      return this.navbar.currentMenu
        ? this.navbar.currentMenu.authName
        : JSON.parse(this.sessionData).authName;
    },
  },
  data() {
    return {
      sessionData: "",
    };
  },
  created() {
    this.refreshRoute();
  },
  methods: {
    refreshRoute() {
      this.sessionData = window.sessionStorage.getItem("selectMenu");
    },
  },
  watch: {
    $route() {
      if (this.$route.path === "/") {
        this.$store.dispatch("app/selectMenu", {
          path: "/",
        });
      }
      this.refreshRoute();
    },
  },
};
</script>

<style lang='less' scoped>
.el-breadcrumb {
  margin-left: 8px;
  line-height: 49px;
}
</style>

<style lang="less">
.no-redirect {
  > .is-link {
    color: #97a8be;
    cursor: text;
  }
}
.el-breadcrumb__inner a,
.el-breadcrumb__inner.is-link {
  font-weight: 500 !important;
  color: #303133;
}
</style>