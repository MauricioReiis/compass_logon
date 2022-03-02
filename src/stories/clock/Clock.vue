<template>
    <div> 
      <h1>11:20</h1>
      <p>dia da semana </p>
    </div>
</template>

<script>
export default {
  name: "clock",

  props: {
    label: {
      type: String,
      required: true,
    },
  }
}
</script>

<style>

</style>