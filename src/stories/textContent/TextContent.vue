<template>
  <div>
    <p :class="{
    textDay: textDayData,
    textCity: textCityData,
    textFooterContent: textFooterData,
    sideBar: sideBarData,
    refreshText: refreshTextData,
    seconds: secondsData,
    continueText: continueTextData,
    paragraphContent: paragraphContentData,
    greetingParagraph: greetingParagraphData,
    loginText: loginTextData,
    errorMessage: errorMessageData,

    }">{{ text }}</p>
   </div>
</template>

<script>
export default {

}
</script>

<style>

</style>