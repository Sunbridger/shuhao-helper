<style>

</style>

<template>
  <div id="app">
      
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import VueRouter from 'vue-router';


interface person {
  name: string;
  age: number;
}

@Component({
  components: {
  },
})
export default class App extends Vue {
  isnormal = 3333;
  isalways = '写法方便点咯';
  // 数组泛型
  students: Array<person> = [
    { name:'sss', age:9 }
  ]
}
</script>


