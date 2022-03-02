<template>
  <section> 
    <div> 
      <Title nameClass='numberClock' type='h1' :text="condHours"/>
      <textContent textDay=true :text= "condWeek" />
    </div>
  </section>
</template>

<script>
import textContent from '../textContent'
import Title from '../title'
import {Months} from '@/constants/monthsYear'
import {Days} from '@/constants/dayWeek'

export default {
    name: "clock",
    components: {
       textContent,
       Title,
    },

    data() {
    return{
      hours: "",
      minutes: "",
      condHours: "",

      weekDay: "",
      day: "",
      month: "",
      year: "",
      condWeek: ""
    }
  },
    methods:{
        clockActual(){
            let date = new Date()
            let hours = date.getHours()
            let minutes =date.getMinutes()
            this.hours = hours
            this.minutes = minutes
            let condHours = `${hours <= 9 ? "0" : ""}${hours}:${minutes <=9 ? "0" : ""}${minutes}`
            this.condHours = condHours   

            let weekDay = date.getDay();
            this.weekDay = weekDay;

            let day = date.getDate();
            this.day = day

            let month = date.getMonth();
            this.month = month

            let year = date.getFullYear();
            this.year = year

            let condWeek = `${Days[weekDay]}, ${day<=9 ? "0" : ""}${day} de ${Months[month]} de ${year}`
            this.condWeek = condWeek
    }
  },
    created(){
    setInterval(() => {
        this.clockActual()
    }, 1000);
  }
} 
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>