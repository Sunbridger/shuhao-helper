<style>
    .pg-taobao {
        padding: 12px;
        padding-top: 55px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        position: relative;
    }
    .taobao-box {
        width: 49%;
    }
    .tip-circle {
        background: rgba(211, 233, 233, 0.4);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        color: #909399;
        font-size: 12px;
        position: fixed;
        bottom: 20px;
        right: 2px;
    }
</style>
<template>
    <div class="pg-taobao">
        <div :class="excStyle ? 'taobao-box' : ''" v-for="item in data" :key="item.id">
            <el-image :src="item.good_img" lazy></el-image>
            <el-link :href="item.good_url">{{item.good_title}}</el-link>
            <p>¥{{item.tit_price}}</p>
        </div>
        <transition name="el-fade-in">
            <div class="tip-circle" v-if="showTip" @click="changeStyle">切换</div>
        </transition>
    </div>
</template>
<script>

import { get } from '../api';
import _ from 'lodash';

export default {
    name: 'login',
    data() {
        return {
            data: [],
            index: 0,
            pageSize: 20,
            canLoad: true,
            showTip: false,
            excStyle: false
        }
    },
    methods: {
        init() {
            const { pageSize, index } = this;
            get('/mall', {
                index,
                pageSize
            }).then(({data}) => {
                if (data.length) {
                    this.data = this.data.concat(data);
                } else {
                    this.canLoad = false;
                }
            });
        },
        scrollLoad() {
            //文档内容实际高度（包括超出视窗的溢出部分）
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
            //滚动条滚动距离
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            //窗口可视范围高度
            let clientHeight = window.innerHeight || Math.min(document.documentElement.clientHeight,document.body.clientHeight);

            if(clientHeight + scrollTop >= scrollHeight && this.canLoad){
                this.index++;
                this.init();
                if (this.index >= 2) {
                    this.showTip = true;
                }
            }
        },
        changeStyle() {
            this.excStyle = !this.excStyle;
        }
    },
    created() {
        this.init();
    },
    mounted() {
        window.addEventListener('scroll', _.throttle(this.scrollLoad, 200));
    }
};
</script>
