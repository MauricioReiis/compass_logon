<template>
  <div>
        <input :class="{inputContent: inputContentData, 
        inputError: inputErrorData, 
        inputButton: inputButtonData}" 
        :type="type" 
        :value="value"
        :placeholder="placeholder">
  </div>
</template>

<script>

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

        inputError:{
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
    },

    data(){
        return{
            inputContentData: this.inputContent,
            inputErrorData: this.inputError,
            inputButtonData: this.inputButton,
        }
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>