<style>
    .pg-shezhi {
        padding: 12px;
    }
    .row-p {
        margin: 25px 0;
    }
    .tip-text {
        color: #ccc;
        margin-top: 50px;
    }
</style>

<template>
    <div class="pg-shezhi">
        <div class="row-p flex">
            <span>按默认方式排列商品</span>
            <el-switch
                v-model="sort"
                active-color="#409EFF"
                inactive-color="#ccc">
            </el-switch>
        </div>
        <div class="row-p flex">
            <span>只显示我关注的商品</span>
            <el-switch
                v-model="care"
                active-color="#409EFF"
                inactive-color="#ccc">
            </el-switch>
        </div>
        <center class="tip-text">tip: 设置只在重启App后或者<span @click="reload" class="is-active-tab">点我</span>立即生效</center>
    </div>
</template>

<script>

export default {
    data() {
        const care = localStorage.getItem('care') === 'true' ? true : false;
        const sort = localStorage.getItem('sort') === 'true' ? true : false;
        return {
            care,
            sort
        }
    },
    methods: {
        reload() {
            location.reload();
        }
    },
    watch: {
        care(val) {
            localStorage.setItem('care', val)
        },
        sort(val) {
            localStorage.setItem('sort', val)
        }
    }
};
</script>
