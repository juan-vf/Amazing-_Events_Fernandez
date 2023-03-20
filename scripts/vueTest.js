const {createApp} = Vue
createApp({
    data(){
        return{
            message: 'asdadasd!'
        }
    },
    computed:{
        //utiliza las propiedades y realiza calculos sonbre las mismas
    },
    method(){
        
    },
    created(){
        console.log("created")
    }
}).mount('#app')