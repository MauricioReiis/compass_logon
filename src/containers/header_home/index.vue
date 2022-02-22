<template>
  <div> 
        <img draggable="false" src="../../assets/black_logo.png" alt="Compass black logo">
        <clock></clock>
        <h1>AQUI FICARÁ O CLIMA</h1>
  </div>
</template>

<script>
import clock from '@/components/clock'

export default {
    name: 'headerHome',
    components: {
      clock,
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>