<template>
  <section>
    <div>
      <img draggable="false" src="@/assets/not_found.gif">
    </div>
  </section>
</template>

<script>
export default {
    name: 'erro404',
    created() {     
    const Title = document.getElementById("title");     
    Title.innerText = "ERROR 404";   
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>