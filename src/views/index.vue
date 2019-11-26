<style>
    body {
        margin: 0;
    }
    .index-box {
        z-index: 9999;
        position: fixed;
        width: 100%;
        background: white;
    }
    .el-tabs__nav-scroll {
        display: flex;
    }
    .el-tabs__nav {
        margin: auto;
    }
</style>

<template>
    <div>
        <div class="index-box">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <!-- <el-tab-pane label="榜姐评论排行" name="/login"></el-tab-pane> -->
                <!-- <el-tab-pane label="热点微博" name="/me"></el-tab-pane> -->
                <el-tab-pane label="监视淘宝商品" name="/watchTb"></el-tab-pane>
                <el-tab-pane label="淘宝数据" name="/taobao"></el-tab-pane>
                <el-tab-pane label="热榜可视化" name="/reban"></el-tab-pane>
                <!-- <el-tab-pane label="微博热搜" name="/hot"></el-tab-pane> -->
            </el-tabs>
        </div>
        <keep-alive>
            <router-view />
        </keep-alive>
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
            if (this.activeName === this.$route.path) return;
            this.$router.push({
                name: this.activeName
            })
        }
    }
}
</script>
