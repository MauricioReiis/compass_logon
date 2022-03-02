<template>
  <section :style="style">
    <div :style="style">{{ hours }}:{{ minutes }}</div>
    <TextContent :style="style" :text="`${weekDay}, ${monthDays} de ${months} de ${years}`" />
  </section>
</template>

<script>
import TextContent from "../textContent/TextContent.vue";
export default {
  name: "Clock",
  components: { TextContent },

  props: {
    hours: {
      type: String,
      default: "12",
      authenticator: function (value) {
        return (
          ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23",
          ].indexOf(value) !== -1
        );
      },
    },

    minutes: {
      type: String,
      default: "00",
      authenticator: function (value) {
        return (
          ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25",
          "26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51",
          "52","53","54","55","56","57","58","59",
          ].indexOf(value) !== -1
        );
      },
    },
    weekDay: {
      type: String,
      default: "terça-feira",
      authenticator: function (value) {
        return (
          ["domingo","segunda-feira","terça-feria","quarta-feira","quinta-feira","sexta-feira","sábado",
          ].indexOf(value) !== -1
        );
      },
    },
    monthDays: {
      type: String,
      default: "09",
      authenticator: function (value) {
        return (
          ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26",
          "27","28","29","30","31",
          ].indexOf(value) !== -1
        );
      },
    },
    months: {
      type: String,
      default: "setembro",
      authenticator: function (value) {
        return (
          ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro",
          ].indexOf(value) !== -1
        );
      },
    },

    years: {
      type: String,
      default: "1999",
      authenticator: function (value) {
        return (
          ["1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","1999","2000","2001","2002","2003","2004",
          "2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020",
          "2021","2022"].indexOf(value) !== -1
        );
      },
    },

    color: {
        type: String,
    },

    backgroundColor:{
        type: String
    }
  },

  computed: {
    classes() {
      return { [`${this.apply}`]: true };
    },
    style() {
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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

section{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
div{
  font-family: "Poppins", sans-serif;
  height: 160px;
  font-weight: bold;
  font-size: 140px;
  color: #222222;
}
</style>