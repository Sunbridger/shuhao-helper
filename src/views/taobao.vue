<style>
    .pg-taobao {
        padding: 12px;
        padding-top: 55px;
        position: relative;
    }
    .taobao-box {
        width: 49%;
    }
    .tip-circle {
        background: rgba(211, 233, 233, 0.4);
        border-radius: 50%;
        width: 45px;
        height: 45px;
        text-align: center;
        line-height: 45px;
        color: #909399;
        font-size: 12px;
        position: fixed;
        bottom: 20px;
        right: 8px;
    }
    .myflex {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .gray {
        color: #909399;
    }
    .red-text {
        color: red;
    }
</style>
<template>
    <div class="pg-taobao">
        <my-scroll :pullUp="pullUp" className="myflex">
            <div :class="excStyle ? 'taobao-box' : ''" v-for="item in data" :key="item.id">
                <el-image :src="item.good_img"></el-image>
                <el-link :href="item.good_url">{{item.good_title}}</el-link>
                <p>当前价格：{{item.tit_price}}</p>
                <p v-if="item.new_price" class="red-text">最新价格：{{item.new_price}}</p>
                <p v-else class="gray">价格暂时无变动哦</p>
            </div>
        </my-scroll>
        <transition name="el-fade-in">
            <div class="tip-circle" v-if="showTip" @click="changeStyle">切换</div>
        </transition>
    </div>
</template>
<script>

import { get } from 'api';
import MyScroll from 'components/MyScroll';

export default {
    name: 'login',
    data() {
        return {
            data: [],
            index: 0,
            pageSize: 20,
            canLoad: true,
            showTip: true,
            excStyle: false
        }
    },
    methods: {
        pullUp() {
            if (!this.canLoad) return;
            const { pageSize, index } = this;
            if (index >= 3) {
                this.showTip = true;
            }
            get('/mall', {
                index,
                pageSize
            }).then(({data}) => {
                if (data.length) {
                    this.data = this.data.concat(data);
                    this.index++;
                } else {
                    this.canLoad = false;
                }
            });
        },
        changeStyle() {
            this.excStyle = !this.excStyle;
        }
    },
    components: {
        MyScroll
    }
};
</script>
