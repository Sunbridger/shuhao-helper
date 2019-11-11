<template>
    <div>
        <el-input v-model="input" placeholder="请输入内容..."></el-input>
    </div>
</template>
<script lang="ts">
export default {
    name: 'login',
    data() {
        return {
            input: ''
        }
    }
};
</script>
