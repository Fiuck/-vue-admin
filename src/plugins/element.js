import Vue from 'vue'
import { Button,Message } from 'element-ui'

Vue.use(Button)
/**
 * Message和MessageBox两个组件比较特殊，在import引入之后不需要Vue.use
 */
Vue.prototype.$message = Message;
