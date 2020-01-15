import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'
import './plugins/element';
import router from './router'

const version = '1.0.1';
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js', {scope: '/'})
            .then(function (registration) {
                // 注册成功
                if (localStorage.getItem('version') !== version) {
                    registration.update().then(() => {
                        localStorage.setItem('version', version);
                    })
                }
            })
            .catch(function (err) {
                // 注册失败:(
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}



Vue.use(VueRouter);
Vue.use(VueAwesomeSwiper);
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
