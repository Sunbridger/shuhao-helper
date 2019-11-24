<style>
    .pg-watchTb {
        padding-top: 70px;
    }
    .el-message {
        margin-top: 30px;
    }
    .flex-box {
        justify-content: space-around;
    }
</style>
<template>
    <div class="pg-watchTb">
        <el-input v-model="url" placeholder="请输入链接"></el-input>
        <el-button type="primary" :disabled="load" :loading="load" @click="submit">{{load?'加载商品信息中...': '提交'}}</el-button>
        <div v-if="good.good_url">
            <el-image :src="good.good_img"></el-image>
            <el-link :href="good.good_url">{{good.good_title}}</el-link>
            <div class="flex flex-box">
                <p>当前价格：{{good.tit_price}}</p>
                <p v-if="good.new_price">最新价格趋势：{{good.new_price}}</p>
                <p v-else>价格暂时无变动哦</p>
            </div>
        </div>
    </div>
</template>
<script>

import { get } from 'api';

export default {
    data() {
        return {
            url: '',
            good: {},
            load: false
        }
    },
    methods: {
        submit() {
            this.load = true;
            if (!this.url.split('】')[1]) {
                this.load = false;
                this.$message('链接不正确');
                return;
            }
            let good_url = this.url.split('】')[1];
            good_url = good_url.split(' ')[0];
            get('/getpriceAndName', {good_url}).then(res => {
                this.good = res.data;
                this.load = false;
            }).catch(() => {
                this.url = '';
                this.load = false;
                this.$message('暂时不支持搞活动的商品 敬请期待');
            });
        },
        init() {
            get('')
        }
    },
    created() {

    },
    components: {

    }
};
</script>
