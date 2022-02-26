<template>
  <section>
    <div id="local">
      <textContent textCity="true" :text="`${localActual}`" />
    </div>
    <div id="clima">
      <img
        draggable="false"
        :src="require(`@/assets/${imageName}.png`)"
        alt="Weather Icon"
      />
      <Title degreesCelsius="true" type="h3" :text="`${temp}°`" />
    </div>
  </section>
</template>

<script>
import Title from "../title";
import textContent from "../textContent";
import regionAbbreviation from "../../constants/regions.js";


export default {
  name: "weather",
  components: {
    textContent,
    Title,
  },

  data() {
    return {
      imageName: "",
      local: "",
      temp: "",
      regionAbbreviation: "",
      abbreviation: "",
      localActual: "",
      city: "",
      hifenCity: "",
    };
  },

  methods: {
    weatherActual() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          let long = position.coords.longitude;
          let lat = position.coords.latitude;

          fetch(
            "https://us1.locationiq.com/v1/reverse.php?key=pk.86d8d93a4b08f9dc0fed49fbb3d9df7f&lat=" +
              lat +
              "&lon=" +
              long +
              "&format=json"
          )
            .then((resposta) => resposta.json())
            .then((dadosCity) => {
              this.city = dadosCity.address.city.replace(/ /g, "-");

              fetch(
                "https://api.weatherapi.com/v1/current.json?key=1908e74e14814574bc602922220602&q=" +
                  this.city +
                  "a&aqi=no"
              )
                .then((resposta) => resposta.json())
                .then((dados) => {
                  this.local = dados.location.name;
                  this.state = dados.location.region;
                  this.temp = dados.current.temp_c.toFixed(0);
                  this.imageName = this.iconWeather(
                    dados.current.condition.text
                  );
                  this.abbreviation = regionAbbreviation(this.state);
                  this.localActual = `${this.local} - ${this.abbreviation}`;
                });
            });
        });
      }
    },

    iconWeather(weather) {
      let addIcon = "";

      if (weather.includes("thunder")) {
        addIcon = "storm";
      } else if (weather.includes("Sun")) {
        addIcon = "sun";
      } else if (weather.includes("Fog") || weather.includes("Mist")) {
        addIcon = "cloud";
      } else if (
        weather.includes("Cloudy") ||
        weather.includes("Overcast") ||
        weather.includes("cloudy")
      ) {
        addIcon = "cloudy";
      } else if (weather.includes("rain") || weather.includes("drizzle")) {
        addIcon = "raining";
      }

      return addIcon;
    },
  },
  
  created() {
    this.weatherActual();
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>