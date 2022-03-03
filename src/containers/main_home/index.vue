<template>
  <section>
      <div id="logoCompass">
        <img draggable="false" src="@/assets/ball_logo_compass.png" alt="Compass main logo">
      </div>
      <div id="contentMain">  
        <Title nameClass='firstTitle' type='h1' text="Our mission is"/>
        <textContent nameClass='paragraphContent' text="Nossa missão é"/> 
        <Title nameClass='titleContent' type='h2' text="to transform the world"/>
        <textContent nameClass='paragraphContent' text="tranformar o mundo"/> 
        <Title nameClass='titleContent' type='h3' text="building digital experiences"/>
        <textContent nameClass='paragraphContent' text="construindo experiências digitais"/> 
        <Title nameClass='titleContent' type='h4' text="that enable our client's growth"/>
        <textContent nameClass='paragraphContent' text="que permitam o crecimento dos nossos clientes"/> 
      </div>
  </section>
</template>

<script>

import Title from '@/components/title'
import textContent from '@/components/textContent'

export default {
    name: "mainHome",
    components:{
      Title,
      textContent,
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>