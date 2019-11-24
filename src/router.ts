import Vue from 'vue';
import Router from 'vue-router';
import Login from 'views/login.vue';
import Me from 'views/me.vue';
import Index from 'views/index.vue';
import taoBao from 'views/taobao.vue';
import hot from 'views/hot.vue';
import reban from 'views/reban.vue';
import watchTb from 'views/watchTb.vue';
Vue.use(Router);


const router = new Router({
    mode: 'hash',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return {
                x: 0,
                y: to.meta.scrollTop || 0
            };
        }
    },
    routes: [{
        path: '/',
        component: Index,
        children: [
            { path: '', redirect: '/login' },
            { path: '/login', component: Login, name: '/login', meta: { keepAlive: true} },
            { path: '/me', component: Me, name: '/me' , meta: { keepAlive: true}},
            { path: '/taobao', component: taoBao, name: '/taobao', meta: { keepAlive: true} },
            { path: '/hot', component: hot, name: '/hot', meta: { keepAlive: true} },
            { path: '/reban', component: reban, name: '/reban', meta: { keepAlive: true} },
            { path: '/watchTb', component: watchTb, name: '/watchTb', meta: { keepAlive: true} }
        ]
    }],
});

router.beforeEach((to, from, next) => {
    // 保存路由的滚动条状态
    if (from.meta.keepAlive) {
        from.meta.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    }
    next();
});

export default router;
