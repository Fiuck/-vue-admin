<template>
  <div>
    <el-submenu :index="toPath" v-if="isOnly">
      <template slot="title">
        <i :class="item.icon"></i>
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item
        v-for="subItem in item.children"
        :key="subItem.id"
        :index="'/' + subItem.path"
        @click="clickMenu(subItem)"
        >{{ subItem.authName }}</el-menu-item
      >
    </el-submenu>

    <el-menu-item :index="toPath" @click="clickMenu(item)" v-else>
      <i :class="item.icon"></i>
      <span slot="title">{{ item.authName }}</span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: "HomeSideBarItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isOnly() {
      return this.item.children.length > 0;
    },
    toPath(){
      return this.item.path === '/' ? this.item.path : '/' + this.item.path
    }
  },
  methods: {
    clickMenu(item){
      this.$store.dispatch('app/selectMenu', item)
    }
  }
};
</script>

<style lang="less">
.el-menu--collapse {
  > div {
    > .el-submenu {
      > .el-submenu__title {
        .el-submenu__icon-arrow.el-icon-arrow-right {
          display: none;
        }
      }
    }
  }
}
</style>

<style lang='less' scoped>
.el-menu--collapse > div > .el-submenu > .el-submenu__title span {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}
.el-menu-item {
  > i {
    margin-right: 15px;
    color: #bfcbd9;
  }
}
.el-submenu__title {
  > i {
    margin-right: 15px;
    color: #bfcbd9;
  }
}
</style>