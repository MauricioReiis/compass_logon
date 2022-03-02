<template>
  <h1 v-if="type === 'h1'" :style="style" :class="classes">{{ text }}</h1>
  <h2 v-else-if="type === 'h2'" :style="style" :class="classes">{{ text }}</h2>
  <h3 v-else-if="type === 'h3'" :style="style" :class="classes">{{ text }}</h3>
  <h4 v-else-if="type === 'h4'" :style="style" :class="classes">{{ text }}</h4>
  <h5 v-else-if="type === 'h5'" :style="style" :class="classes">{{ text }}</h5>
  <h6 v-else-if="type === 'h6'" :style="style" :class="classes">{{ text }}</h6>
</template>

<script>
export default {
  name: "Title",

  props: {
    text: {
      type: String,
      required: true,
      default: "Simple text",
    },

    apply: {
        type: String,
        default: "firstTitle",
        authenticator: function (value) {
            return (
            ["firstTitle",
            "titleContent",
            "salutationTitle",
            "numberClock",
            "degreesCelsius",
            "erro401",
            ].indexOf(value) !== -1
        );
      },
    },

    type: {
        type: String,
        default: "",
        authenticator: function (value) {
            return ["h1", "h2", "h3", "h4", "h5", "h6"].indexOf(value) !== -1;
        },
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
* {
  font-family: "Poppins", sans-serif;
}
.firstTitle {
    font-size: 32px;
    font-weight: 600;
    color: #C12D18;
}
.titleContent {
    font-size: 57px;
    color: #C12D18;
    font-weight: 600;
}

.salutationTitle{
    font-size: 60px;
    font-weight: 400;
    color: #E0E0E0;
}

.numberClock{  
    font-size: 140px;
    font-weight: 600;
    color: #222222;
}

.degreesCelsius{
    font-size: 48px;
    color: #222222;
    font-weight: 600;
}

.erro401{
    font-size: 50px;
    font-weight: bold;
    color: #222222;
}

</style>