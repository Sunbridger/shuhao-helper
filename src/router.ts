import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/login.vue'
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
    }],
});

export default router;
