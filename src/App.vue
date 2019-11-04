<style>

</style>

<template>
  <div id="app">
      <h1>网站待更新...</h1>
      <img src="http://img.soogif.com/yOaiRUMu16q1X30YfhK6obpQNaqd2p50.gif_s400x0" alt="">
  </div>
</template>

<script lang="ts">

import { Component, Watch, Vue } from 'vue-property-decorator';
import VueRouter from 'vue-router';
import { Person } from './global.interface'
import { get, post } from './api'
@Component({
  components: {
  },
})
export default class App extends Vue {
    isnormal = 3333;
    isalways = '写法方便点咯';
    students: Array<Person> = [];
    created() {
        get('/add', {
            name: 'Sunbridger',
            age: 23
        }).then(res => {
            console.log(res);
        })
    }
    getData(row) {
        getIn(1)
        this.isnormal = + new Date();
    }
    @Watch('isnormal') 
    watcisnormalFn(a, b) {
        console.log('这个名字随意 可以直接匿名么', a, b);
    }
    add() {
        get('/add').then(res => {
            console.log(res);
        })
    }
}
</script>


