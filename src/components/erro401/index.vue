<template>
  <section>
    <div>
        <Title nameClass='erro401' type='h1' text="Error"/>
        <img draggable="false" src="@/assets/erro401.png">
        <textContent nameClass='unauthorized' text="Unauthorized"/>
        <textContent nameClass='redirecting' text="Redirecting in 5 seconds"/>
    </div>
  </section>
</template>

<script>
import Title from '@/components/title'
import textContent from '@/components/textContent'
import router from '@/router'
export default {
    name: 'erro401',
    components:{
        textContent,
        Title,
    },

    methods:{
        erro401(){
            router.push('/login')
        }
    },

    created(){
        setTimeout(this.erro401, 5000)
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>