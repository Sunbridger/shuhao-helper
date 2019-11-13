<style>
    body {
        margin: 0;
    }
    .index-box {
        position: fixed;
        width: 100%;
        background: white;
    }
</style>

<template>
    <div>
        <div class="index-box">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="榜姐评论排行" name="/login"></el-tab-pane>
                <el-tab-pane label="乔乔乔的微博" name="/me"></el-tab-pane>
            </el-tabs>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    data() {
        return {
            activeName: this.$route.path
        }
    },
    methods: {
        handleClick() {
            this.$router.push({
                name: this.activeName
            })
        }
    }
}
</script>
