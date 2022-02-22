<template>
  <div>
    <p :class="{
    textFooterContent: textFooterData,
    sideBar: sideBarData,
    refreshText: refreshTextData,
    seconds: secondsData,
    continueText: continueTextData,
    paragraphContent: paragraphContentData,
    }">{{ text }}</p>
   </div>
</template>

<script>
export default {
  name: 'textContent',
  props: {
    textFooterContent: {
      default: false,
    },

    sideBar:{
      default: false,
    },

    refreshText:{
      default: false,
    },

    seconds:{
      default: false,
    },

    continueText:{
      default: false,
    },

    paragraphContent:{
      default: false,
    },

    text: {
      type: String,
      required: true,
      default: 'Texto Padrão',
    },
  },

  data(){
    return{
      textFooterData: this.textFooterContent,
      sideBarData: this.sideBar,
      refreshTextData: this.refreshText,
      secondsData: this.seconds,
      continueTextData: this.continueText,
      paragraphContentData: this.paragraphContent,
    }
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>