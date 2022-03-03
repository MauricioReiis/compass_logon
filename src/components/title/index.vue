<template>
  <div>
      <h1 :class="nameClass" v-if="type === 'h1'"> {{ text }}</h1>
      <h2 :class="nameClass" v-else-if="type === 'h2'"> {{ text }} </h2>
      <h3 :class="nameClass" v-else-if="type === 'h3'"> {{ text }} </h3>
      <h4 :class="nameClass" v-else-if="type === 'h4'"> {{ text }} </h4>
      <h5 v-else-if="type === 'h5'"> {{ text }} </h5>
      <h6 v-else-if="type === 'h6'"> {{ text }} </h6>
  </div>
</template>

<script>
export default {
    name: 'Title',
    props:{
        type: {
            type: String,
            require: true,
        },

        nameClass: {
            type: String,
        },

        text:{
            type: String,
            default: 'null',
        },
    },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>