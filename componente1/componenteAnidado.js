//COMPONENTE PADRE
Vue.component('padre',{
    template:
    `
        <div class="p-5 bg-dark text-white">
        <h2>  PAPA {{numeroPadre}}</h2><br>
        <h2>Mostrando el Nombre del Hijo: {{nombreHijo}}</h2>
        <button @click="numeroPadre++" class="btn btn-warning">+</button>



        <hijo :numero=numeroPadre  @nombreHijo="nombreHijo=$event"></hijo>
        </div>
    `,
    data(){
        return {
            numeroPadre: 0, 
            nombreHijo: ''
        }
    }

});

//El hijo esta comunicandose con el div padre
//COMPONENTE HIJO
Vue.component('hijo',{
    template:
    `
        <div class="p-5 bg-success text-white">
            Hijo
            <h2>{{numero}}</h2>
            
            <h2>{{nombreHijo}}</h2>

            
        </div>
    `,
    props: ['numero'],
    data(){
        return {
            nombreHijo: 'Pepito'
        }
    },
    //cuando se monta la informacion envio datos del hijo al padre
    mounted(){
        this.$emit('nombreHijo', this.nombreHijo)
    }

});