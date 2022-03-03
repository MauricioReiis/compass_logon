<template>
  <section> 
      <textContent nameClass='textFooterContent' text="Essa janela do navegador é usada para manter sua sessão de autenticação ativa. 
        Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar."/>
      <span id="sideBar"/> 
      <textContent nameClass='refreshText' text="Aplication refresh in"/>
      <div id="boxSeconds">
        <timer/>
        <textContent nameClass='seconds' text="Seconds"/>
      </div>
      <textContent nameClass='continueText' text="Continuar Navegando"/>
      <div id="buttonLogout" @click="logout">Logout</div>
  </section>
</template>

<script>

import textContent from '@/components/textContent'
import timer from '@/components/timer'
import router from '@/router/index.js'
import { mapMutations } from 'vuex'

export default {
    name: "footerHome",
    components:{
      textContent,
      timer,
    },

    methods:{
      ...mapMutations(['setStartLogout']),
      logout(){
        router.push({name:'login'})
        this.setStartLogout()
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>