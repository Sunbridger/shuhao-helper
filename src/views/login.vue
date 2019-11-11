<template>
    <div>
        <el-input placeholder="请输入姓名" v-model="name" maxlength="10" show-word-limit></el-input>
        <el-input type="number" placeholder="请输入年龄" v-model="age" ></el-input>
        <el-button type="info" icon="el-icon-message" circle @click="submit"></el-button>
    </div>
</template>
<script>

import { get } from '../api';

export default {
    name: 'login',
    data() {
        return {
            name: '',
            age: ''
        }
    },
    methods: {
        submit() {
            const { name, age } = this;
            get('/add', {
                name,
                age
            }).then(res => {
                this.$message('ok');
            });
        }
    }
};
</script>
