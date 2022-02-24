<template>
  <div>
        <input :class="{inputContent: inputContentData, 
        inputError: statusError, 
        inputButton: inputButtonData}" 
        @keyup="$emit('input',$event.target.value)" 
        :type="type" 
        :value="value" 
        :placeholder="placeholder">       
        <img v-if="imageName" :src="require(`@/assets/${imageName}`)" :alt="alt">
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: "Input",
    props:{
        type: {
            type: String,
            require: true,
        },

        inputContent:{
            default: false,
        },

        inputButton:{
            default: false,
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
    data(){
        return{
            inputContentData: this.inputContent,
            inputErrorData: this.inputError,
            inputButtonData: this.inputButton,
            
        }
    },

    computed:{
        ...mapState(["statusError"])
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>