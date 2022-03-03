<template>
<section :style="style">
  <div id="containerCity">
    <div id="boxCity">
        <textContent :style="style" :text="`${city} - ${state}`" />
    </div>
    <div id="containerWeather">
        <img :src="require(`../assets/${icon}.png`)" />
        <textContent :style="style" id="temperature" :text="`${temperatureText}°`" />
    </div>
  </div>
</section>
</template>

<script>
import textContent from '../textContent/TextContent.vue'
export default {
    name: 'Weather',
    components: { textContent },
    props:{
        color:{
            type: String,
        },

        backgroundColor:{
            type: String
        },

        city:{
            type: String,
            required: true,
            default: 'Juiz de Fora'
        },

        state:{
            type: String,
            default: 'MG',
            validator: function(value){
                return ['MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', ].indexOf(value) !== -1;
            },
        },
        
        icon:{
            type: String,
            default: 'cloudy',
            validator: function(value){
                return ['cloudy', 'cloud', 'thunder', 'storm', 'raining', 'sun'].indexOf(value) !== -1;
            },
        },

        temperatureText:{
            type: String,
            default: '30',
        },
    },

    computed:{
        style(){
            return{
                color: this.color,
                backgroundColor: this.backgroundColor
            }
        }
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

section{
    display: flex;
    justify-content: center;
    align-items: center;
}

#containerCity{
    display: flex;
    font-family: 'Poppins', sans-serif;
    flex-direction: column;
    color: #222222;
}

#boxCity{
    height: 30px;
    font-size: 14px;
}

#containerWeather{
    display: flex;
    justify-content: space-between; 
    align-items: flex-start;
}
img{
    width: 40px;
    margin-top: 10px;
}

#temperature{
    display: flex;
    margin-top: -0px;
    color: #222222;
    font-weight: 500;
    font-size: 48px;
}
</style>