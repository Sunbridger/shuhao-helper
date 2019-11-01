<style>

</style>

<template>
  <div id="app">
      <p v-for="item in students" :key="item.id">{{item.name}}</p>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
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
    // 数组泛型
    students: Array<Person> = [];
    created() {
        get('/eggapi').then(res => {
            this.students = res.data;
        })
    }
}
</script>


