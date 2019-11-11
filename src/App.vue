<style>

</style>

<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">

import { Component, Watch, Vue } from 'vue-property-decorator';
import VueRouter from 'vue-router';
import { get } from './api'
@Component({
  components: {
  },
})
export default class App extends Vue {
    created() {
        // this.add();
    }
    add() {
        get('/add', {
            name: 'Sunbridger',
            age: 23
        }).then(res => {
            console.log(res);
        })
    }
}
</script>
