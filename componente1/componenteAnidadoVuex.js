//COMPONENTE PADRE
Vue.component('padre',{
    template:
    `
    <div class="p-5 bg-dark text-white">
    <h2>numero: {{$store.state.numero}}</h2>  
        <hijo></hijo>
    </div>
    `,
    data(){
        return {
            
        }
    }

});


//COMPONENTE HIJO
Vue.component('hijo',{
    template:
    `
    <div class="p-5 bg-success text-white">
        
    </div>
    `,
   
    data(){
        return {
            
        }
    },
});