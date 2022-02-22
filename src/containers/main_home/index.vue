<template>
  <section>
      <img draggable="false" src="@/assets/ball_logo_compass.png" alt="Compass main logo">
      <div>  
        <Title firstTitle=true type='h1' text="Our mission is"/>
        <textContent paragraphContent=true text="Nossa missão é"/> 
        <Title titleContent=true type='h2' text="to transform the world"/>
        <textContent paragraphContent=true text="tranformar o mundo"/> 
        <Title titleContent=true type='h3' text="building digital experiences"/>
        <textContent paragraphContent=true text="construindo experiências digitais"/> 
        <Title titleContent=true type='h4' text="that enable our client's growth"/>
        <textContent paragraphContent=true text="que permitam o crecimento dos nossos clientes"/> 
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