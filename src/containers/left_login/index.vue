<template>
  <section>
    <div>
      <div id="salutation">
        <Title salutationTitle=true type='h1' text="Olá,"/>
        <textContent greetingParagraph=true text="Para continuar navegando de forma segura, efetue o login na rede."/> 
      </div>
      <div> 
        <form action=" ">
          <textContent loginText=true text="Login"/> 
          <Input inputContent=true type="text" placeholder="Usuário"/>
          <Input inputContent=true type="password" placeholder="Senha"/>
          <textContent errorMessage=true text="Ops, usuário ou senha inválidos. Tente novamente!"/> 
          <Input inputButton=true type="submit" value="Continuar"/>
        </form>
      </div>
    </div>

  </section>
</template>


<script>

import Title from "@/components/title"
import textContent from "@/components/textContent"
import Input from "@/components/input"

export default {
  name: "leftLogin",
  components:{
    Title,
    textContent,
    Input,
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>