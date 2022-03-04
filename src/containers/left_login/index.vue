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
        <form @submit.prevent="callValidate">
          <Input nameClass="inputContent" :style="{'border': `${styleName}`}" type="text" placeholder="Usuário" imageName="logo_user.png" alt="Icon User" v-model="userData"/> 
          <Input nameClass="inputContent" :style="{'border': `${styleName}`}" type="password" placeholder="Senha" imageName="logo_password.png" alt="Icon password" v-model="passwordData"/> 
          <div id="errorPassaword"> 
            <textContent nameClass="errorMessage" 
            v-show="statusError" text="Ops, usuário ou senha inválidos. Tente novamente!"/> 
          </div>
          <Input nameClass="inputButton" type="submit" value="Continuar"/>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "@/components/title"
import textContent from "@/components/textContent"
import Input from "@/components/input"
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
    ...mapMutations(["alterUser", "alterPassword", "validationUser"]),
    callValidate(){
      if(localStorage.getItem("user") && localStorage.getItem("password")){
        this.alterUser(localStorage.getItem("user")) 
        this.alterPassword(localStorage.getItem("password"))
        this.setStyle()
        this.userData = localStorage.getItem("user")
        this.passwordData = localStorage.getItem("password")
        setTimeout(this.validationUser, 5000)
      } else {
        localStorage.setItem("user", this.userData)
        localStorage.setItem("password", this.passwordData)
        this.alterUser(this.userData)
        this.alterPassword(this.passwordData)
        this.validationUser()
        this.setStyle()
      }
    },
    setStyle(){
      if(this.statusError){
        this.styleName = '1px solid #E9B425'
      }
    }
  },
    computed:{
    ... mapState(['statusError']),
      
  },

  created(){
    if(localStorage.getItem("user") && localStorage.getItem("password")){
      this.callValidate()
    }
  }

}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>