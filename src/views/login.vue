<style>
    .pg-comment {
        padding: 12px;
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
            pageSize: 10,
            canLoad: true
        }
    },
    methods: {
        init() {
            const { pageSize, index } = this;
            get('/', {
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
            }
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
