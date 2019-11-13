import Vue from 'vue'
import {
    Button,
    Input,
    Avatar,
    Carousel,
    CarouselItem,
    Form,
    FormItem,
    RadioGroup,
    Radio,
    Upload,
    Loading,
    Message,
    Badge,
    Switch,
    MessageBox,
    Dialog,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    InfiniteScroll,
    Tabs,
    TabPane
} from 'element-ui'

Vue.use(Button);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Input);
Vue.use(Avatar);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Upload);
Vue.use(Badge);
Vue.use(Switch);
Vue.use(Dialog);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$loading = Loading.service;
Vue.use(Loading.directive);
Vue.use(InfiniteScroll);
