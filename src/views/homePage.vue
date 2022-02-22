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
    }
}
</script>  
