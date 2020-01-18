<style>
    .pg-shezhi {
        padding: 12px;
    }
    .row-p {
        margin: 25px 0;
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
        <div class="row-p flex">
            <span>退出登录(重启生效)</span>
            <el-switch
                v-model="isLogin"
                active-color="#409EFF"
                inactive-color="#ccc">
            </el-switch>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        const care = localStorage.getItem('care') === 'true' ? true : false;
        const sort = localStorage.getItem('sort') === 'true' ? false : true;
        const isLogin = localStorage.getItem('isLogin') === 'true' ? false : true;
        return {
            care,
            sort,
            isLogin
        }
    },
    watch: {
        care(val) {
            localStorage.setItem('care', val)
        },
        sort(val) {
            localStorage.setItem('sort', val)
        },
        isLogin(val) {
            localStorage.removeItem('isLogin')
        }
    }
};
</script>
