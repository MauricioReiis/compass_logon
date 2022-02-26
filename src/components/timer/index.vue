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
            countDown: "10"
        }
    },

    methods: {
        countDownTimer() {
            if(this.countDown > 0) {
                setTimeout(() => {
                    this.countDown -= 1
                    this.countDownTimer()
                }, 1000)

            } else {
                 setTimeout(() => {
                     this.countDownTimer()
                    this.countDown == 0
                    router.push({name:'login'})
                }, 1000)
            }
        }
    },

    created(){
        this.countDownTimer()
    }
}

</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>