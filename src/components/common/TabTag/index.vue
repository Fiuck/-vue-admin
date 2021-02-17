<template>
  <div class="tag-container">
    <el-tag
      v-for="tag in tags"
      :key="tag.path"
      :closable="tag.path !== '/'"
      :disable-transitions="true"
      size="medium"
      effect="dark"
      :class="{active: tag.path === routePath}"
      @click="clickMenu(tag)"
      @close="handleClose(tag)"
    >
      {{ tag.authName }}
    </el-tag>
  </div>
</template>

<script>
export default {
  name: "TabTag",
  data() {
    return {
      tags: []
    };
  },
  computed: {
      routePath(){
          return this.$route.path === '/' ? this.$route.path : this.$route.path.substring(1)
      }
  },
  created() {
    this.getMenuList();
  },
  methods: {
    getMenuList() {
      this.tags = JSON.parse(window.sessionStorage.getItem("menuList"))
    },
    // 点击标签
    clickMenu(tag){
        this.$router.push(tag.path)
        this.$store.dispatch('app/selectMenu', tag)
    },
    // 关闭标签
    handleClose(tag){
        let menuList = JSON.parse(window.sessionStorage.getItem('menuList'))
        let result = menuList.findIndex(item => item.path === tag.path)
        menuList.splice(result, 1)
        this.tags = menuList
        if(this.$route.path.substring(1) === tag.path){
            this.$router.push(this.tags[this.tags.length-1].path)
            this.$store.dispatch('app/selectMenu', this.tags[this.tags.length-1])
        }
        window.sessionStorage.setItem('menuList', JSON.stringify(menuList))
    }
  },
  watch: {
      $route(){
          this.getMenuList()
      }
  }
};
</script>

<style lang='less' scoped>
.tag-container {
  // width: 100%;
  height: 34px;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
  display: flex;
  align-items: center;
  padding-left: 10px;
}
.el-tag {
  margin: 2px;
  border-radius: 0px;
  cursor: pointer;
  border: 1px solid #d8dce5;
color: #495060;
    background: #fff;
}
.el-tag--medium {
  height: 26px;
  line-height: 24px;
}
.active{
    border: 1px solid #409EFF;
    background: #409EFF;
    color: #fff;
}
.active::before {
    content: "";
    width: 8px;
    height: 8px;
    background-color: #fff;
    border-radius: 50%;
    position: relative;
    display: inline-block;
    margin-right: 2px;
}
</style>