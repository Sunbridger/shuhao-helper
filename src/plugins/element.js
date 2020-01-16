import Vue from 'vue'
import {
    Button,
    Input,
    Message,
    Link,
    Image,
    Tabs,
    TabPane,
    Card,
    Switch
} from 'element-ui'

Vue.use(Button);
Vue.use(Link);
Vue.use(Image);
Vue.use(Input);
Vue.use(Tabs);
Vue.use(Card);
Vue.use(TabPane);
Vue.use(Switch);
Vue.prototype.$message = Message;
