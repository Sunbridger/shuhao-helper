<style>
    .pg-watchTb {
        padding: 70px 30px;
    }
    .el-message {
        margin-top: 30px;
    }
    .flex-box {
        justify-content: space-around;
        margin-bottom: 20px;
    }
</style>
<template>
    <div class="pg-watchTb">
        <div class="flex flex-box">
            <el-input clearable v-model="url" placeholder="请输入链接"></el-input>
            <el-button type="primary" :disabled="load" :loading="load" @click="submit">{{load?'加载商品信息中...': '提交'}}</el-button>
        </div>
        <div v-if="good.good_url">
            <el-image :src="good.good_img"></el-image>
            <el-link :href="good.good_url">{{good.good_title}}</el-link>
            <div class="flex flex-box">
                <p>当前售价：{{good.tit_price}}</p>
                <p v-if="good.new_price">最新价格：{{good.new_price}}</p>
                <p v-else>价格暂时无变动哦~</p>
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
            let good_url = this.url.split('?')[0];
            if (!good_url) {
                this.$message('输入正确的链接');
                return;
            }
            get('/getJDinfo', {good_url}).then(res => {
                this.good = res.data;
                this.load = false;
            }).catch(() => {
                this.url = '';
                this.load = false;
                this.$message('暂时不支持搞活动的商品 敬请期待');
            });
        },
        init() {

        }
    },
    created() {

    },
    components: {

    }
};
</script>
