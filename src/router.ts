import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/login.vue';
import Me from './views/me.vue';
import Index from './views/index.vue';
Vue.use(Router);


const router = new Router({
    mode: 'hash',
    routes: [{
        path: '/',
        component: Index,
        children: [
            { path: '', redirect: '/login' },
            { path: '/login', component: Login, name: '/login' },
            { path: '/me', component: Me, name: '/me' }
        ]
    }],
});

export default router;
