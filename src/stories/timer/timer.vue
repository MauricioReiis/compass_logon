<template>
  <div :style="style"> {{ seconds }} </div>
</template>

<script>
export default {
    name: 'Timer',
    props:{
        seconds:{
            type: Number,
            required: true,
            default: 600
        },

        color: {
            type: String,
        },

        fontSize:{
            type: String
        },

        backgroundColor:{
            type: String
        }
    },

  computed: {
    style(){
      return {
        color: this.color,
        fontSize: this.fontSize,
        backgroundColor: this.backgroundColor
      };
    },
  },
};

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

div{
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 48px;
}
</style>