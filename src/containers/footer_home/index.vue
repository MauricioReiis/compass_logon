<template>
  <section> 
      <textContent textFooterContent=true :style="{'grid-column':2}" text="Essa janela do navegador é usada para manter sua sessão de autenticação ativa. 
        Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar."/>
      <span><textContent sideBar=true :style="{'grid-column':3}" text=""/></span>
      <textContent refreshText=true :style="{'grid-column':4}" text="Aplication refresh in"/>
      <div :style="{'grid-column':5}">
        <timer/>
        <textContent seconds=true text="Seconds"/>
      </div>
      <textContent continueText=true :style="{'grid-column':7}" text="Continuar Navegando"/>
      <div id="buttonLogout" :style="{'grid-column':8}" @click="logout">Logout</div>
  </section>
</template>

<script>

import textContent from '@/components/textContent'
import timer from '@/components/timer'
import router from '@/router/index.js'

export default {
    name: "footerHome",
    components:{
      textContent,
      timer,
    },

    methods:{
      logout(){
        router.push({name:'login'})
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>