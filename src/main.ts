import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueAwesomeSwiper from 'vue-awesome-swiper';
// import 'swiper/dist/css/swiper.css'
import './plugins/element';
import router from './router'

Vue.use(VueRouter);
Vue.use(VueAwesomeSwiper);
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
