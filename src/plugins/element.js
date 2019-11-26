import Vue from 'vue'
import {
    Button,
    Input,
    Message,
    Link,
    Image,
    Tabs,
    TabPane
} from 'element-ui'

Vue.use(Button);
Vue.use(Link);
Vue.use(Image);
Vue.use(Input);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.prototype.$message = Message;
