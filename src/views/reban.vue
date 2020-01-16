<style>
    .refress {
        background: rgba(221, 122, 23, .6);
        border-radius: 50%;
        width: 45px;
        height: 45px;
        text-align: center;
        line-height: 45px;
        color: #909399;
        font-size: 12px;
        float: right;
    }
    .icon-text {
        width: 16px;
        height: 16px;
        vertical-align: -3px;
        margin: 0 5px;
    }
    .text-num {
        color: #808080;
        margin-left: 10px;
    }
    .el-card__body {
        padding: 25px 12px 0 12px;
        height: 100%;
    }
    .is-img-center {
        margin: 0 auto;
        display: block;
    }
</style>
<template>
    <swiper-slide>
        <div class="co-visit-data-box">
            <!-- <div id="visit-chart" style="width: 100%; height: 400px;"></div> -->
            <el-card  v-if="todayhotData.length">
                <div>
                    <img class="is-img-center" src="https://img.t.sinajs.cn/t4/appstyle/searchpc/css/pc/img/search_logo.png" @click="reload" />
                    <div v-for="el in todayhotData" :key="el.text">
                        <p>
                            <el-link :href="el.link">
                                {{el.text}}
                                <span class="text-num">{{el.num}}</span>
                                <img v-if="el.icon" :src="el.icon" class="icon-text" />
                            </el-link>
                        </p>
                    </div>
                </div>
            </el-card>
        </div>
    </swiper-slide>
</template>

<script>

import echarts from 'echarts';
import { get } from 'api';

export default {
    data() {
        return {
            xAxisDataForVisit: [],
            yAxisDataForVisit: [],
            todayhotData: []
        };
    },
    methods: {
        reload() {
            this.init();
        },
        drawCategoryChart() {
            const this_ = this;
            const visitChart = echarts.init(document.getElementById('visit-chart'));
            const option = {
                tooltip: {
                    trigger: 'axis'
                },
                title: {
                    left: 'center',
                    text: '热点微博榜单图',
                },
                xAxis: {
                    type: 'category',
                    axisTick: {
                        show: false
                    },
                    show: false,
                    data: this_.xAxisDataForVisit
                },
                yAxis: {
                    type: 'value',
                    axisTick: {
                        show: false
                    }
                },
                dataZoom: [{
                        type: 'inside',
                        start: 0,
                        end: 10
                    }, {
                        start: 0,
                        end: 10,
                        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                        handleSize: '70%',
                        handleStyle: {
                            color: '#fff',
                            shadowBlur: 3,
                            shadowColor: 'rgba(0, 0, 0, 0.6)',
                            shadowOffsetX: 2,
                            shadowOffsetY: 2
                        }
                }],
                series: [{
                    data: this_.yAxisDataForVisit,
                    type: 'line',
                    smooth: true,
                    sampling: 'average',
                    itemStyle: {
                        color: 'rgb(255, 70, 131)'
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 158, 78)'
                        }, {
                            offset: 1,
                            color: 'rgb(255, 70, 139)'
                        }])
                    }
                }]
            };
            visitChart.setOption(option);
        },
        getVisitData() {
            return get('/gethot').then(({data}) => {
                this.xAxisDataForVisit = [];
                this.yAxisDataForVisit = [];
                data.forEach((item) => {
                    this.xAxisDataForVisit.push(item.text);
                    this.yAxisDataForVisit.push(item.num);
                });
            });
        },
        async todayhot() {
            get('/todayhot').then(({data}) => {
                this.todayhotData = data;
            });
        },
        async init() {
            // await this.getVisitData();
            // this.drawCategoryChart();
            this.todayhot();
        }
    },
    mounted() {
        this.init();
    }
};
</script>
