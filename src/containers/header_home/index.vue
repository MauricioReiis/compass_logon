<template>
  <div> 
        <img draggable="false" src="../../assets/black_logo.png" alt="Compass black logo">
        <clock/>
        <weather/>
  </div>
</template>

<script>

import clock from '@/components/clock'
import weather from '../../components/weather'

export default {
    name: 'headerHome',
    components: {
      clock,
      weather,
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>