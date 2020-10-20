<template>


  <div id="app" class="container mt-5">
    <h3>{{texto}}</h3>
    <h3>{{alRevez}}</h3>
   <input type="text" v-model="texto">

    <div class="progress mt-5">
      <div class="progress-bar progress-bar-striped" 
          role="progressbar" 
          aria-valuenow="10" 
          aria-valuemin="0" 
          aria-valuemax="100"
          :style="{width:contador+'%'}" 
          :class="tipoBarra"
          >
          {{contador}}
      </div>
    </div>
    <button @click="contador--" class="btn btn-danger mt-5 ">-</button>
    <button @click="contador++" class="btn btn-danger mt-5 ml-4">+</button>
    
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return{
         texto: "Propiedades computadas",
         contador: 0
    }
  },
  computed:{
      alRevez(){
        //muestra el texto al revez
        return this.texto.split('').reverse().join('');
      },
      tipoBarra(){
        return {
            'bg-success':this.contador <=50,
            'bg-warning':this.contador >50 && this.contador <=75,
            'bg-danger':this.contador >75
        }
      }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
