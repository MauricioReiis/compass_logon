<template>
  <p :style="style" :class="classes"> {{ text }} </p>
</template>

<script>
export default {
    name: 'TextContent',

    props:{
      text:{
        type: String,
        required: true,
        default: 'Simple text',
      },

      apply: {
        type: String,
        validator: function (value) {
        return ['greetingParagraph', 
        'loginText', 
        'errorMessage', 
        'textDay', 
        'textCity', 
        'paragraphContent', 
        'textFooterContent', 
        'refreshText', 
        'seconds', 
        'continueText', 
        'unauthorized', 
        'redirecting'].indexOf(value) !== -1;
        }
      },

    color: {
      type: String,
    },
  },
    
  computed:{
    classes() { 
      return {[`${this.apply}`]: true,}
    },

    style() {
      return {
        color: this.color,
      }
    },
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

p{
  font-family: 'Poppins', sans-serif;
}

.greetingParagraph{
  font-size: 16px;
  color: #E0E0E0;
   
}

.loginText{
  font-size: 30px;
  color: #E0E0E0;
}

.errorMessage{
  font-size: 16px;
  color: #E9B425;   
}

.textDay{
  font-size: 15px;
}

.textCity{
  font-size: 15px;
}

.paragraphContent{
  font-size: 22px;
}

.textFooterContent{
  display: flex;
  color: #FFFFFF;
}

.refreshText{
  font-size: 14px;

}

.seconds{
  font-size: 13px; 
}

.continueText{
  color: #C13216;
}

.unauthorized{
  font-size: 40px;
  color: #222222;
}

.redirecting{
  font-size: 20px;
  color: #222222;
}

</style>