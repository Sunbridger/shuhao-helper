<style>

</style>

<template>
  <div id="app">
      <img src="http://img.soogif.com/yOaiRUMu16q1X30YfhK6obpQNaqd2p50.gif_s400x0" alt="">
      <p v-for="item in students" :key="item.id" @click="getData(item)">{{item.name}}:{{item.age}}</p>
      
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
        get('/').then(res => {
            this.students = res.data;
        })
    }
    getData(row) {
        this.isnormal = + new Date();
    }
    @Watch('isnormal') 
    watcFn(a, b) {
        console.log(99999, a, b);
    }
    add() {
        get('/add').then(res => {
            console.log(res);
        })
    }
}
</script>


