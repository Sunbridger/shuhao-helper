<style>
    .pg-comment {
        padding: 12px;
        padding-top: 55px;
        height: 100%;
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
        line-height: 30px;
    }
</style>
<template>
    <div class="pg-comment">
        <my-scroll :pullUp="pullUp">
            <div class="block-box" v-for="item in data" :key="item.id">
                <div class="flex" v-if="item.name">
                    <el-avatar shape="square" :size="50" :src="item.ava_url"></el-avatar>
                    <div class="mar">
                        <p class="red-name">{{item.name}}</p>
                        <p>{{item.time}}</p>
                    </div>
                </div>
                <p class="text-comment">{{item.text}}</p>
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
            get('/', {
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
        }
    },
    components: {
        MyScroll
    }
};
</script>
