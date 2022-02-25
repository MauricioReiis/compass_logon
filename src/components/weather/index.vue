<template>
  <section>

      <div id="local">
        <textContent textDay=true :text= "`${localActual}`"/>
      </div>

      <div id="clima">
          <img :src="require(`@/assets/${imageName}.png`)" alt="Weather Icon">
          <Title degreesCelsius=true type='h3' :text= "`${temp}°`"/>
      </div>

  </section>
</template>

<script>
import Title from '../title'
import textContent from '../textContent'
import regionAbbreviation from '../../constants/regions'

export default {
    name: 'weather',
    components:{
        textContent,
        Title,
    },

    data(){
        return{
            imageName: "",
            local: "",
            temp: "",
            regionAbbreviation: "",
            abbreviation: "",
            localActual: ""
        }
    },

    methods:{

        weatherActual(){
        
            fetch ("https://api.weatherapi.com/v1/current.json?key=1908e74e14814574bc602922220602&q=Juiz-de-Foraa&aqi=no")

            .then(resposta => resposta.json()) 
            .then(dados => {
            
            this.local = dados.location.name 
            this.state = dados.location.region
            this.temp = dados.current.temp_c.toFixed(0)

            this.imageName = this.iconWeather(dados.current.condition.text)

            this.abbreviation = regionAbbreviation(this.state)
            this.localActual = `${this.local} - ${this.abbreviation}`
                
        })
        },

        iconWeather(weather){
        
            let addIcon = ""

            if(weather.includes("thunder")){
                addIcon = "storm"
        
            }else if(weather.includes("Sun")){
                addIcon = "sun"

            }else if(weather.includes("Fog") || weather.includes("Mist")){
                addIcon = "cloud"

            }else if(weather.includes("Cloudy") || weather.includes("Overcast") || weather.includes("cloudy")){
                addIcon = "cloudy"
        
            }else if(weather.includes("rain") || weather.includes("drizzle")){
                addIcon = "raining" 

            } 
            
            return addIcon 
        }
    },

    created(){
        this.weatherActual()
        this.regionAbbreviation()
    }
}

</script>

<style lang="scss" scoped>
@import './index.scss';
</style>