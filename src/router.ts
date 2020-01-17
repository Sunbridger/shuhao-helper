import Vue from 'vue';
import Router from 'vue-router';
// import Login from 'views/login.vue';
import Me from 'views/me.vue';
import Index from 'views/index.vue';
import taoBao from 'views/taobao.vue';
// import hot from 'views/hot.vue';
import reban from 'views/reban.vue';
import watchTb from 'views/watchTb.vue';
import Variable from 'variable';
Vue.use(Router);

const router = new Router({
    mode: 'history',
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
        component: Index
    }, {
        path: '/*',
        redirect: '/'
    }]
});

router.beforeEach((to, from, next) => {
    // 保存路由的滚动条状态
    if (from.meta.keepAlive) {
        from.meta.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    }
    next();
});

export default router;
