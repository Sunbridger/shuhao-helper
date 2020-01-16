<style>
    .pg-watchTb {
        padding: 25px 12px 0 12px;
    }
    .el-message {
        margin-top: 30px;
    }
    .flex-box {
        display: flex;
        justify-content: space-around;
        margin-bottom: 20px;
    }
    .center-share {
        position: absolute;
        top: 80%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .mt12 {
        margin-top: 12px;
    }
</style>
<template>
    <swiper-slide>
        <div class="pg-watchTb">
            <div>
                <el-input clearable v-model="url" placeholder="请输入商品链接"></el-input>
                <div class="flex mt12">
                    <el-input clearable v-model="verification" placeholder="请输入验证码"></el-input>
                    <div v-if="svgHtml" v-html="svgHtml"></div>
                </div>
            </div>

            <el-button type="primary" :disabled="load" :loading="load" @click="submit">{{load?'加载商品信息中...': '提交'}}</el-button>
            <el-button @click="shareApp">分享App</el-button>
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
import '../../plusShare';

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
            if (this.verification) {
                if (this.verification.toLocaleLowerCase() !== this.text.toLocaleLowerCase()) {
                    this.$message('验证码错误');
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
            } else {
                this.$message('请输入验证码');
            }
        },
        getCap() {
            get('/getcap').then(({data}) => {
                this.text = data.text;
                this.svgHtml = data.data;
            })
        },
        shareApp() {
            if(navigator.userAgent.indexOf("Html5Plus") > -1) {
                window.plusShare({
                    title: '数好助手',
                    content: '好助手，好帮手，一体消息，实时掌握，欢迎👏👏👏',
                    href: location.href,
                    thumbs: ['http://img-cdn-qiniu.dcloud.net.cn/icon3.png']
                }, function() {
                    this.$message('分享成功咯');
                });
            } else {
                this.$message('该版本暂不支持分享，请下载最新app端');
            }
        }
    },
    created() {
        this.getCap();
    },
    components: {

    }
};
</script>
