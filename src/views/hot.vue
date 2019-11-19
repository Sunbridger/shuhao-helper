<style>
    .pg-hot {
        padding: 12px;
        padding-top: 55px;
        position: relative;
    }
    .hot-box {
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
</style>
<template>
    <div class="pg-hot">
        <my-scroll :pullUp="pullUp" className="myflex">
            <div :class="excStyle ? 'hot-box' : ''" v-for="item in data" :key="item.id">
                <el-image :src="item.url"></el-image>
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
            get('/getweibo', {
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
