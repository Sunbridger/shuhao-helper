<template>
    <div>
        <Home v-if="isLogin" />
        <Login :isLogin.sync="isLogin" v-else />
    </div>
</template>

<script>
import Home from './home';
import Login from './login';
// import Variable from 'variable';

export default {
    components: {
        Home,
        Login
    },
    data() {
        const isLogin = localStorage.getItem('isLogin');
        return {
           isLogin
        }
    }
};
</script>
