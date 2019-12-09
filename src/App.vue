<style>

</style>

<template>
    <div id="app">
        <transition name="slide">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

import VueRouter from 'vue-router';
import '../plusShare';
export default {
    methods: {
        share() {
            if(navigator.userAgent.indexOf("Html5Plus") > -1) {
                //5+ 原生分享
                window.plusShare({
                    title: "Sunbridger的app",//应用名字
                    content: "很好玩的东西哦",
                    href: location.href,//分享出去后，点击跳转地址
                    thumbs: ["https://lh3.googleusercontent.com/-JO6aXzDjbGw/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rd1rskfzc7PVxXgGWHOSQjGkEhJ4g.CMID/s64-c/photo.jpg"] //分享缩略图
                }, function(result) {
                    this.$message('分享成功咯');
                });
            }
        },
        created() {
            // if (navigator.userAgent.indexOf("Html5Plus") > -1) {
            //     alert(JSON.stringify(plus))
            //     plus.nativeUI.alert('message', this.share, '标题处哦', '按钮显示内容');
            // }
        }
    }
}
</script>
