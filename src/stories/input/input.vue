<template>
    <section>
        <div :class="classes">
            <input :type="type" :placeholder="login" :class="classes" :value="text">
            <img v-if="icon" :src="require(`../assets/${icon}.png`)">
        </div>
    </section>
</template>

<script>
export default {
    name: 'Input',
    props:{
        text:{
            type: String,
            default: ''
        },

        backgroundColor:{
            type: String,
        },

        type:{
            type: String,
            authenticator: function(value){
                return ['text', 'password', 'submit'].indexOf(value) !== -1
            }
        },

        login:{
            type: String,
            authenticator: function (value) {
                return ['Usuário', 'Senha'].indexOf(value) !== -1;
            },
        },

        icon:{
            type: String,
            authenticator: function(value){
                return ['user', 'password', false].indexOf(value) !== -1
            }
        }
    },

    computed: {
        classes() {
            return { [`${this.apply}`]: true,'submit': this.type == 'submit',
        }
    },

    style() {
      return {
        backgroundColor: this.backgroundColor
      };
    },
  },
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

section{
    display: flex;
    justify-content: center;
    align-items: center;
}

div{
    display: flex;
    justify-content: row;
    justify-content: space-between;
    font-family: 'Poppins', sans-serif;
    border-radius: 50px;
    height: 40px;
    width: 350px;
    padding: 10px;
}
input{
    background: transparent;
    color: #E0E0E0;
    width: 85%;
    height: 100%;
    border: 0;
    border-radius: 50px;
    padding-left: 10px;
    font-size: 16px;
}
input:focus{
    outline: 0;
}

input::placeholder{
    color: #E0E0E0;
    opacity: 1;
}

img{
    height: 20px;
    margin-top: 9px;
}
.submit{
    padding: 0;
    font-size: 18px;
    cursor: pointer;
    font-weight: bold;
    width: 379px;
    height: 60px;
    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%); 
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
}

</style>