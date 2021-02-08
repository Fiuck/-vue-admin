import Vue from 'vue'
import { Button,Message,Container,Header,Aside,Main } from 'element-ui'
import { Menu,Submenu,MenuItemGroup,MenuItem} from 'element-ui'

Vue.use(Button)
/**
 * Message和MessageBox两个组件比较特殊，在import引入之后不需要Vue.use
 */
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)

Vue.prototype.$message = Message;
