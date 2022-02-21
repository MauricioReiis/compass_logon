<template>
  <div class="home">
    <HelloWorld msg="essa é a login page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'loginPage',
  components: {
    HelloWorld
  }
}

</script>  