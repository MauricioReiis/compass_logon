<template>
  <section>
    <div>
      <div id="salutation">
        <Title salutationTitle=true type='h1' text="Olá,"/>
        <textContent greetingParagraph=true text="Para continuar navegando de forma segura, efetue o login na rede."/> 
      </div>
      <div> 
        <form @submit.prevent="submitForm">
          <textContent loginText=true text="Login"/> 
          <Input inputContent=true type="text" placeholder="Usuário" imageName="logo_user.png" alt="Icon User" v-model="userData"/>
          <Input inputContent=true type="password" placeholder="Senha" imageName="logo_password.png" alt="Icon password" v-model="passwordData"/>
          <div id="errorPassaword"> 
            <textContent v-show="logar" errorMessage=false text="Ops, usuário ou senha inválidos. Tente novamente!"/> 
          </div>
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
import { mapMutations } from 'vuex'

export default {
  name: "leftLogin",
  components:{
    Title,
    textContent,
    Input,
  },

  data(){
    return{
      userData: "",
      passwordData: "",
      logar: false
    }    

  },
  methods:{
    ...mapMutations(["setStatusError"]),
    submitForm(){
      if (this.userData == "a" && this.passwordData == "a"){
        alert("Você logou")

      } else {
        this.setStatusError()
        this.logar = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>