<template>
  <div id="app">
      <h1>Problema de Monty Hall</h1>
      <div class="form">
          <div v-if="!started">
              <label for="portsAmount">Quantas portas?</label>
              <input type="text" id="portsAmount" size="3"
                v-model.number="portsAmount"/>
          </div>
          <div v-if="started">
              <label for="selectedPort">Qual a porta é a premiada?</label>
              <!-- <input type="text" id="selectedPort" size="3"
                v-model.number="selectedPort"> -->
          </div>
          <button v-if="!started" @click="teste">Iniciar</button>
          <button v-if="started" @click="started= false">Reiniciar</button>
      </div>
      <div class="doors" v-if="started">
          <div v-for="i in portsAmount" :key="i">
              <door-mont :hasGift="i === selectedPort" :number="i" />
          </div>
     </div>
  </div>
</template>

<script>
import DoorMont from './components/DoorMont.vue';
export default {
    name: 'App',
    components: { DoorMont },
    data:function(){
        return{
            started: false,
            portsAmount: 3,
            selectedPort:null
        }
    },
    methods:{
        teste(){
            this.getRandomGiftPort()
            this.started = true
        },
        getRandomGiftPort(){
            this.selectedPort = Math.floor(Math.random() * this.portsAmount + 1)
        }
    },
    metaInfo:{
        title:'Porta dos Desesperados',
        titleTemplate: '%s | Monty Hall'
    }
}

</script>

<style>
*{
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body{
    color:#fff;
    background: linear-gradient(to right, rgb(21, 153, 87), rgb(21,87,153));
}

#app{
    display: flex;
    flex-direction: column;
    align-items: center;;
}

#app h1{
    border: 1px solid #000;
    background-color:#0004;
    padding: 1.25rem;
    margin-bottom: 3.75rem;
}

.form{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom:2.5rem;
}

.form, .form input, .form button{
    margin-bottom:10px;
    font-size: 2rem;
}
.form input{
    padding-left: 10px;
}
.form > div{
    margin-bottom:30px;
}
.doors{
    align-self: stretch;
    display:flex;
    justify-content: space-around;
    flex-wrap:wrap;
}
</style>