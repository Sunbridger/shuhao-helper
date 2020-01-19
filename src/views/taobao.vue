<style>
    .pg-taobao {
        padding: 12px;
        padding-top: 25px;
        position: relative;
    }
    .taobao-box {
        width: 49%;
    }
    .tip-circle {
        background: rgba(211, 233, 233, 0.6);
        border-radius: 50%;
        width: 45px;
        height: 45px;
        text-align: center;
        line-height: 45px;
        color: #909399;
        font-size: 12px;
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
    .flex {
        display: flex;
        justify-content: space-between;
    }
    .el-message-box {
        width: 222px;
    }
</style>
<template>
    <swiper-slide>
        <div class="pg-taobao">
            <my-scroll :pullUp="pullUp" className="myflex">
                <div :class="sort ? 'taobao-box' : ''" v-for="item in data" :key="item.id">
                    <el-image :src="item.good_img"></el-image>
                    <el-link :href="item.good_url">{{item.good_title}}</el-link>
                    <div class="flex">
                        <el-button size="small" @click="deletetaobao(item.good_url)" type="danger">不再关注</el-button>
                        <el-button size="small" @click="item.showH = true" type="primary">价格趋势</el-button>
                    </div>
                    <p>当前价格：{{item.tit_price}}</p>
                    <p v-if="item.new_price" class="red-text">最新价格：{{formatePrice(item.new_price)}}</p>
                    <div v-if="item.showH">
                        <p v-for="(row, index) in Object.keys(item.new_price)" :key="index">{{timeForm(item.new_price, index)}} : {{row}}</p>
                    </div>
                </div>
            </my-scroll>
        </div>
    </swiper-slide>
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
            drawer: true
        }
    },
    props: {
        sort: {
            default: () => false,
            type: Boolean
        },
        addItem: {
            default: () => false,
            type: Boolean
        }
    },
    methods: {
        pullUp() {
            if (!this.canLoad) return;
            const { pageSize, index } = this;
            get('/mall', {
                index,
                pageSize
            }).then(({data}) => {
                if (data.length) {
                    data.forEach(row => {
                        row.showH = false;
                        if (row.new_price) {
                            row.new_price = JSON.parse(row.new_price || '{}');
                        }
                    });
                    this.data = this.data.concat(data);
                    this.index++;
                } else {
                    this.canLoad = false;
                }
            });
        },
        deletetaobao(good_url) {
            get('/deletetaobao', {good_url}).finally(() => {
                this.$message({
                    message: '成功移除改商品',
                    type: 'success'
                });
                this.reload();
            });
        },
        timeForm(item, index) {
            const t = Object.values(item);
            const tt = new Date(t[index]);
            const year = tt.getFullYear();
            const month = tt.getMonth()+1;
            const date = tt.getDate();
            const hour = tt.getHours();
            const minute = tt.getMinutes();
            const second = tt.getSeconds();
            return year + '/' + month + '/' + date + ' ' + hour + ':' + minute + ':' + second;
        },
        formatePrice(obj) {
            const arr = Object.keys(obj);
            const arrv = Object.values(obj);
            if (arr.length) {
                return arr.length === 1 ? arr[0] : arr[arrv.indexOf(Math.max(...arrv))];
            }
        },
        reload() {
            this.index = 0;
            this.canLoad = true;
            this.data = [];
            this.pullUp();
        }
    },
    watch: {
        addItem(v) {
            if (v) {
                this.reload();
            }
        }
    },
    components: {
        MyScroll
    }
};
</script>
