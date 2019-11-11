import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'
import './plugins/element';
import router from './router'

Vue.use(VueRouter);
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
