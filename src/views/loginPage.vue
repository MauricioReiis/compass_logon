<template>
  <div :style="{'display':'flex'}" class="login">
    <leftLogin/> 
    <rightLogin/>  
  </div>
</template>

<script>
import rightLogin from '@/containers/right_login'
import leftLogin from '@/containers/left_login'

export default {
  name: 'loginPage',
  components:{
    rightLogin,
    leftLogin,
  }
}
</script>  