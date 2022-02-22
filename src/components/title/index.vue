<template>
  <div>
      <h1 :class="{firstTitle: firstTitleData}" v-if="type === 'h1'"> 
          {{ text }}
      </h1>
      <h2 :class="{titleContent: titleContentData}" v-else-if="type === 'h2'"> 
          {{ text }}
      </h2>
      <h3 :class="{titleContent: titleContentData}" v-else-if="type === 'h3'">
          {{ text }}
      </h3>
      <h4 :class="{titleContent: titleContentData}" v-else-if="type === 'h4'">
          {{ text }}
      </h4>
      <h5 v-else-if="type === 'h5'">
          {{ text }}
      </h5>
      <h6 v-else-if="type === 'h6'">
          {{ text }}
      </h6>
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
        text:{
            type: String,
            require: true,
        },

        firstTitle:{
            default: false,
        },

        titleContent:{
            default: false,
        }
    },

    data(){
        return{
            titleContentData: this.titleContent,
            firstTitleData: this.firstTitle,
        }
    },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>