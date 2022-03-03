<template>
  <section>
    <div>
        <Title nameClass='erro401' type='h1' text="Error"/>
        <img draggable="false" src="@/assets/erro401.png">
        <textContent nameClass='unauthorized' text="Unauthorized"/>
        <textContent nameClass='redirecting' :text="textRequire"/>
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

    data(){
        return{
        seconds: '',
        textRequire: ''
        }
    },

    methods:{
        decrement(){
            if(this.seconds) {
                this.seconds--;
                if (this.seconds == 0){
                    router.push('/login')
                }
            }
        let textRequire = `Redirecting in ${this.seconds} seconds`
        this.textRequire = textRequire
        },
    },
    created(){
        this.seconds = 6
            setInterval(() => {
                this.decrement()
        }, 1000);
        const Title = document.getElementById("title");     
        Title.innerText = "ERROR 401";  
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>