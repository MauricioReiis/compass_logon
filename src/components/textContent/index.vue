<template>
    <p :class="nameClass"> {{ text }}</p>
</template>

<script>
export default {
  name: 'textContent',
  props: {

    nameClass:{
      type: String,
    },

    text: {
      type: String,
      default: 'null',
    },
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>