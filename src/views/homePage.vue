<template>
  <div class="home">
    <headerHome/>
    <mainHome/>
    <footerHome/>
  </div>
</template>

<script>
import headerHome from '@/containers/header_home'
import mainHome from '@/containers/main_home'
import footerHome from '@/containers/footer_home'

export default {
    name: 'homePage',
    components: {
      headerHome,
      mainHome,
      footerHome,
  },
  created() {     
    const Title = document.getElementById("title");     
    Title.innerText = "Compass | Home";   
  },
}
</script>  

<style lang="scss" scoped>

div{
  background: linear-gradient(105.96deg, #FFFFFF 0%, #F0F0F0 97.86%)
}
</style>
