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
        <div id="visit-chart" style="width: 100%; height: 350px;"></div>
        <div v-if="todayhotData.length">
            <div class="todayhot-box" v-for="el in todayhotData" :key="el.text">
                <p>{{el.text}} <i>热度{{el.num}}</i> </p>
            </div>
        </div>
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
