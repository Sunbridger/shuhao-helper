<style>
    .pg-sunbridger {
        padding: 12px;
        padding-top: 55px;
    }
    .flex {
        display: flex;
    }
    .el-avatar {
        margin: auto 0;
    }
    .mar p{
        margin: 5px 12px;
        color: #909399;
    }
    .mar .red-name {
        color: brown;
    }
    .text-comment {
        margin-bottom: 0;
        line-height: 30px;
    }
    .num-box {
        color: #909399;
        height: 30px;
    }
    .flex-space {
        justify-content: space-between;
    }
    .pg-sunbridger a {
        text-decoration: none;
        color: #3c6e9e;
    }
    .url-icon {
        display: inline-block;
        vertical-align: middle;
        margin-right: .125rem;
        width: 1rem;
        height: 1.5rem;
        line-height: 1.5rem;
    }
    .url-icon img {
        width: 1rem;
        height: 1rem;
    }
    .block {
        justify-content: space-between;
        flex-wrap: wrap;
    }
    /* TODO 图片压缩的问题 */
    .block img {
        max-width: 100%;
        height: auto;
        margin-bottom: 2%;
    }
    .block .img2 {
        width: 48%;
        height: 200px;
    }
    .block .img3 {
        width: 32%;
        height: 120px;
    }
</style>
<template>
    <div class="pg-sunbridger">
        <my-scroll :pullUp="pullUp">
            <div class="block-box" v-for="item in data" :key="item.id">
                <div class="flex" v-if="item.name">
                    <el-avatar shape="square" :size="50" :src="item.ava_url"></el-avatar>
                    <div class="mar">
                        <p class="red-name">{{item.name}}</p>
                        <p>{{item.time}}</p>
                    </div>
                </div>
                <p class="text-comment" v-html="item.text"></p>
                <div class="img-box" v-if="item.imgs.length === 1">
                    <div class="block flex">
                        <img class="img1" referrerpolicy="no-referrer" v-for="(src, index) in item.imgs" :key="index" :src="src" />
                    </div>
                </div>
                <div class="img-box" v-if="item.imgs.length === 2">
                    <div class="block flex">
                        <img class="img2" referrerpolicy="no-referrer" v-for="(src, index) in item.imgs" :key="index" :src="src" />
                    </div>
                </div>
                <div class="img-box" v-if="item.imgs.length >= 3">
                    <div class="block flex">
                        <img class="img3" referrerpolicy="no-referrer" v-for="(src, index) in item.imgs" :key="index" :src="src" />
                    </div>
                </div>
                <div class="num-box flex flex-space">
                    <span>
                        <i class="el-icon-share"></i>
                        {{item.send_num}}
                    </span>
                    <span>
                        <i class="el-icon-s-comment"></i>
                        {{item.comment_num}}
                    </span>
                    <span>
                        <i class="el-icon-s-flag"></i>
                        {{item.goods_num}}
                    </span>
                </div>
            </div>
        </my-scroll>
    </div>
</template>
<script>

import { get } from 'api';
import MyScroll from 'components/MyScroll';

export default {
    data() {
        return {
            data: [],
            index: 0,
            pageSize: 20,
            canLoad: true
        }
    },
    methods: {
        pullUp() {
            if (!this.canLoad) return;
            const { pageSize, index } = this;
            get('/me', {
                index,
                pageSize
            }).then(({data}) => {
                if (data.length) {
                    data.forEach(el => {
                        if (el.imgs) {
                            el.imgs = JSON.parse(el.imgs);
                        }
                    })
                    this.data = this.data.concat(data);
                    this.index++;
                } else {
                    this.canLoad = false;
                }
            });
        }
    },
    components: {
        MyScroll
    }
};
</script>
