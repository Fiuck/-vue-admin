import Vue from "vue";
import { Button, Message, Container, Header, Aside, Main } from "element-ui";
import {
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Scrollbar,
  Tooltip,
  Tag,
  Card,
  Input,
  Row,
  Col,
  Table,
  TableColumn,
  Switch,
} from "element-ui";

Vue.use(Button);
/**
 * Message和MessageBox两个组件比较特殊，在import引入之后不需要Vue.use
 */
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Scrollbar);
Vue.use(Tooltip);
Vue.use(Tag);
Vue.use(Card);
Vue.use(Input);
Vue.use(Row);
Vue.use(Col);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Switch);

Vue.prototype.$message = Message;
