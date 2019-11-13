import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/login.vue'
import Me from './views/me.vue'
Vue.use(Router);


const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: {
                name: 'login'
            },
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/me',
            name: 'me',
            component: Me,
        }
    ],
});

export default router;
