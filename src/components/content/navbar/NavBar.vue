<template>
      <div class="nav-bar-wrapper">
          <hamburger
          :is-active="sidebar.opened"
          class="hamburger-container"
          @toggleClick="toggleSideBar"
        />
        <breadcrumb></breadcrumb>
      </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from "components/common/Hamburger";
import Breadcrumb from 'components/common/Breadcrumb'
export default {
  name: "NavBar",
  components: { Hamburger,Breadcrumb },
  computed: {
      ...mapGetters([
          'sidebar'
      ])
  },
  methods: {
      toggleSideBar(){
          this.$store.dispatch('app/toggleSideBar')
      }
  }
};
</script>

<style lang='less' scoped>
.nav-bar-wrapper{
  width: 100%;
  height: 100%;
}
.hamburger-container {
  line-height: 46px;
  height: 100%;
  margin-right: 10px;
  float: left;
  cursor: pointer;
  transition: background 0.3s;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
}
</style>