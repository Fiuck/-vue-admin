import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
// 引入css
import "normalize.css/normalize.css";
// 引入封装的axios
import {request} from 'network/request'
Vue.prototype.$request = request;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
