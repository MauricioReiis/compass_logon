<template>
  <section>
    <div>
      <div id="salutation">
        <Title nameClass='salutationTitle' type='h1' text="Olá,"/>
        <textContent nameClass='greetingParagraph' 
        text="Para continuar navegando de forma segura, efetue o login na rede."/> 
      </div>
      <div> 
        <textContent nameClass='loginText' text="Login"/> 
        <form @submit.prevent="validationUser">
          <Input @blur="validation" 
          nameClass="inputContent" 
         :style="{'border': `${styleName}`}"
          type="text" 
          placeholder="Usuário" 
          imageName="logo_user.png" 
          alt="Icon User" 
          v-model="userData"/> 

          <Input @blur="validation" 
          nameClass="inputContent"
          :style="{'border': `${styleName}`}"
          type="password" 
          placeholder="Senha" 
          imageName="logo_password.png" 
          alt="Icon password" 
          v-model="passwordData"/> 

          <div id="errorPassaword"> 
            <textContent nameClass="errorMessage" 
            v-show="statusError" text="Ops, usuário ou senha inválidos. Tente novamente!"/> 
          </div>
          <Input nameClass="inputButton" 
          type="submit" 
          value="Continuar"/>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "@/components/title"
import textContent from "@/components/textContent"
import Input from "@/components/input"
import {loginValidation} from '@/constants/users.js'
import {mapMutations, mapState} from 'vuex'


export default {
  name: "leftLogin",
  components:{
    Title,
    textContent,
    Input,
  },

  data(){
    return{
      idName:"",
      userData: "",
      passwordData: "",
      styleError: "",
      styleName: ''
    }    

  },
  methods:{
    ...mapMutations(["validation", "alterUser", "alterPassword"]),
    validationUser(){
      this.alterUser(this.userData)
      this.alterPassword(this.passwordData)
      this.validation(loginValidation)
      this.setStyle()
    },
    setStyle(){
      if(this.statusError){
        this.styleName = '1px solid #E9B425'
      }
    }
  },
    computed:{
      ... mapState(['statusError']),
      
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>