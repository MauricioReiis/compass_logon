<template>
  <div :class="nameClass">
        <input  
        @keyup="$emit('input',$event.target.value)" 
        :type="type" 
        :value="value" 
        :placeholder="placeholder"> 
        <img draggable="false" v-if="imageName" :src="require(`@/assets/${imageName}`)" :alt="alt">
  </div>
</template>
<script>
export default {
    name: "Input",
    props:{
        nameId:{
            type: String,
        },
        
        type: {
            type: String,
            default: 'null',
        },

       nameClass:{
           type: String,
       },

        placeholder:{
            type: String,
        },

        value:{
            type: String,
        },

        imageName:{
            type: String,
        },

        alt:{
            type: String,
        }
    },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>