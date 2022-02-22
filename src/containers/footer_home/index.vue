<template>
  <section> 
      <textContent textFooterContent=true :style="{'grid-column':2}" text="Essa janela do navegador é usada para manter sua sessão de autenticação ativa. 
        Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar."/>
      <span><textContent sideBar=true :style="{'grid-column':3}" text=""/></span>
      <textContent refreshText=true :style="{'grid-column':4}" text="Aplication refresh in"/>
      <div>
        <p id="seicentos">600</p>
        <textContent seconds=true :style="{'grid-column':5}" text="Seconds"/>
      </div>
      <textContent continueText=true :style="{'grid-column':7}" text="Continuar Navegando"/>
      <div id="buttonLogout" :style="{'grid-column':8}">Logout</div>
      
  </section>
</template>

<script>

import textContent from '@/components/textContent'

export default {
    name: "footerHome",
    components:{
      textContent,
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>