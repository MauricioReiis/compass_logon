<template>
  <section>
    <div>
      <div id="salutation">
        <Title salutationTitle=true type='h1' text="Olá,"/>
        <textContent greetingParagraph=true text="Para continuar navegando de forma segura, efetue o login na rede."/> 
      </div>

      <div> 
        <textContent loginText=true text="Login"/> 
        <input>
        <input>
        <textContent errorMessage=true text="Ops, usuário ou senha inválidos. Tente novamente!"/> 
        <input>
      </div>
    </div>

  </section>
</template>


<script>

import Title from "@/components/title"
import textContent from "@/components/textContent"

export default {
  name: "leftLogin",
  components:{
    Title,
    textContent,
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>