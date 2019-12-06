<style>
    body {
        margin: 0;
    }
    .index-box {
        z-index: 9999;
        position: fixed;
        width: 100%;
        background: white;
    }
    .el-tabs__nav-scroll {
        display: flex;
    }
    .el-tabs__nav {
        margin: auto;
    }
    .swiper-slide {
        height: 100vh;
        overflow-y: scroll;
    }
</style>

<template>
    <div>
        <div class="index-box">
            <el-tabs v-model="activeIndex" @tab-click="handleClick">
                <el-tab-pane label="监视JD商品" name="0"></el-tab-pane>
                <el-tab-pane label="收藏商品" name="1"></el-tab-pane>
                <el-tab-pane label="热榜可视化" name="2"></el-tab-pane>
            </el-tabs>
        </div>
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide>
                <watchTb />
            </swiper-slide>
            <swiper-slide>
                <taobao />
            </swiper-slide>
            <swiper-slide>
                <reban />
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>

import taobao from './taobao';
import reban from './reban';
import watchTb from './watchTb';

export default {
    data() {
        return {
            swiperOption: {
                on: {
                    slideChangeTransitionStart: () => {
                        this.activeIndex = String(this.$refs.mySwiper.swiper.realIndex);
                    }
                }
            },
            activeIndex: '0'
        }
    },
    methods: {
        handleClick() {
            this.$refs.mySwiper.swiper.slideTo(this.activeIndex);
        }
    },
    components: {
        taobao,
        reban,
        watchTb
    }
}
</script>
