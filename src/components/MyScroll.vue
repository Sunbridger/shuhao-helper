<template>
    <div ref="div" :class="className">
        <slot></slot>
    </div>
</template>
<script>

import _ from 'lodash';

export default {
    props: {
        pullUp: Function,
        className: {
            type: String,
            default: ''
        }
    },
    methods: {
        scrollLoad() {
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            let clientHeight = window.innerHeight || Math.min(document.documentElement.clientHeight,document.body.clientHeight);
            if(clientHeight + scrollTop + 200 >= scrollHeight){
                this.pullUp();
            }
        }
    },
    created() {
        this.pullUp();
    },
    mounted() {
        this.$refs.div.addEventListener('touchmove', _.throttle(this.scrollLoad, 200));
    }
};
</script>
