<style>
    .todayhot-box {
        padding: 5px 20px;
    }
    i {
        color: #F56C6C;
    }
</style>
<template>
    <div class="co-visit-data-box">
        <el-card>
            <div id="visit-chart" style="width: 100%; height: 350px;"></div>
        </el-card>
        <el-card  v-if="todayhotData.length">
            <!-- <el-tabs v-model="day">
                <el-tab-pane label="今日热点" name="first">今日热点</el-tab-pane>
                <el-tab-pane label="昨日热点" name="second">昨日热点</el-tab-pane>
            </el-tabs> -->
            <div>
                <h4>今日热点：</h4>
                <div class="todayhot-box" v-for="el in todayhotData" :key="el.text">
                    <p>{{el.text}} <i>热度{{el.num}}</i> </p>
                </div>
            </div>
        </el-card>
        <div class="refress" @click="reload">刷新</div>
    </div>
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
                series: [{
                    data: this_.yAxisDataForVisit,
                    type: 'line',
                    smooth: true,
                    itemStyle: {
                        normal: {
                            color: '#409eff',
                            lineStyle: {
                                color: '#409eff'
                            }
                        }
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
            await this.getVisitData();
            this.drawCategoryChart();
            this.todayhot();
        }
    },
    mounted() {
        this.init();
    }
};
</script>
