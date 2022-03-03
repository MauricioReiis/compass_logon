<template>
    <div> {{ countDown }} </div>
</template>

<script>

import router from '../../router/index.js'

export default {
    name: 'timer',

    props:{
        text: {
            type: Number
        }
    },

   data() {
        return {
            timerEnabled: true,
            countDown: ''
        }
    },

    methods: {
        increment() {
            if (this.timerEnabled) {
                this.countDown--;
                if (this.countDown == 0){
                    this.pause()
                }
            }
        },
        pause() {
            this.timerEnabled = false;
            router.push({name:'login'})
        }
    },

    created(){
        this.countDown = 600
            setInterval(() => {
            this.increment()
        }, 1000);
    }
}

</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>