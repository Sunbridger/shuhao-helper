<style>
    .pg-watchTb {
        padding: 70px 30px;
    }
    .el-message {
        margin-top: 30px;
    }
    .flex-box {
        display: flex;
        justify-content: space-around;
        margin-bottom: 20px;
    }
</style>
<template>
    <swiper-slide>
        <div class="pg-watchTb">
            <div>
                <el-input clearable v-model="url" placeholder="请输入商品链接"></el-input>
                <el-input clearable v-model="verification" placeholder="请输入验证码"></el-input>
            </div>
            <div v-if="svgHtml" v-html="svgHtml"></div>
            <el-button type="primary" :disabled="load" :loading="load" @click="submit">{{load?'加载商品信息中...': '提交'}}</el-button>
            <div v-if="good.good_url">
                <el-image :src="good.good_img"></el-image>
                <el-link :href="good.good_url">{{good.good_title}}</el-link>
                <div class="flex flex-box">
                    <p>当前售价：{{good.tit_price}}</p>
                </div>
            </div>
        </div>
    </swiper-slide>
</template>
<script>

/**
 * @param {String} url jd商品链接
 * @param {Object} good jd商品的属性
 * @param {Boolean} load 是否可点击加载中判断
 * @param {String} svgHtml svg的验证码
 * @param {Object} methods
 * @param {Function} methods.submit 提交商品
 * @param {Function} methods.getCap 获取验证码
 */

import { get } from 'api';

export default {
    data() {
        return {
            url: '',
            good: {},
            load: false,
            svgHtml: '',
            text: '',
            verification: ''
        }
    },
    methods: {
        submit() {
            if (this.verification !== this.text) {
                this.$message('请输入验证码');
                return;
            }
            this.load = true;
            let good_url = this.url.split('?')[0];
            if (!good_url.includes('https')) {
                this.$message('请输入JD商品的链接');
                this.load = false;
                return;
            }
            get('/getJDinfo', {good_url}).then(({data}) => {
                if (!data.good_title) {
                    this.$message('商品链接有误，请重试');
                } else {
                    this.good = data;
                }
            }).catch(() => {
                this.url = '';
                this.$message('暂时不支持搞活动的商品 敬请期待');
            }).finally(() => {
                this.load = false;
                this.verification = '';
                this.getCap();
            });
        },
        getCap() {
            get('/getcap').then(({data}) => {
                this.text = data.text;
                this.svgHtml = data.data;
            })
        }
    },
    created() {
        this.getCap();
    },
    components: {

    }
};
</script>
