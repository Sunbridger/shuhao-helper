<style>
    .pg-login-box {
        padding: 25px;
        background: rgb(62, 62, 219, .1);
        box-sizing: border-box;
        height: 100vh;
    }
    .tip-text {
        color: #409EFF;
    }
    .btn-input-s {
        margin: 25px 0;
    }
</style>

<template>
    <div class="pg-login-box">
        <center class="tip-text">为方便及时推送消息，请留下你常用的邮箱吧</center>
        <el-input v-model="email" placeholder="在此输入邮箱" class="btn-input-s"></el-input>
        <el-input v-model="name" placeholder="在此输入你的昵称" class="btn-input-s"></el-input>
        <el-button type="success" @click="submit">提交</el-button>
    </div>
</template>

<script>

import { get } from 'api';
export default {
    data() {
        return {
            email: '',
            name: ''
        }
    },
    methods: {
        submit() {
            if (this.name && this.email) {
                const reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
                if (reg.test(this.email)) {
                    const { name, email } = this;
                    get('/sendEmail', {
                        email,
                        name
                    }).then(res => {
                        if (res) {
                            this.$emit('update:isLogin', true);
                            localStorage.setItem('isLogin', true);
                            this.$message({
                                showClose: true,
                                message: '欢迎登陆👏',
                                type: 'success'
                            });
                        }
                    })
                } else {
                    this.$message('请输入正确的邮箱');
                }
            } else {
                this.$message('请按要求输入以下信息');
            }

        }
    }
};
</script>
