<template>
  <div id="app">
      <h1>Problema de Monty Hall</h1>
      <div class="form">
          <div v-if="!started">
              <h2>
                  <p>O jogo consiste em, encontrar o presente que 
                  está escondindo em uma porta aleatória, e abrir
                  as demais. Caso o presente apareça em uma porta na qual 
                  não foi a escolhida, você PERDE!.</p>
              </h2>
              <div>
                  <label for="portsAmount">Quantas portas?</label>
                  <input type="text" id="portsAmount" size="3"
                v-model.number="portsAmount" autofocus/>
              </div>
          </div>
          <div v-if="started" style="text-align:center;">
              <label for="selectedPort" style="font-size:1.9rem;">Qual a porta é a premiada?</label>
          </div>
          <button v-if="!started" @click="sortPort">Iniciar</button>
          <button v-if="started" @click="started= false">Reiniciar</button>
      </div>
      <div class="doors" v-if="started">
          <div v-for="i in portsAmount" :key="i">
              <door-mont :hasGift="i === selectedPort" :number="i" @open-door="clickDiv"/>
          </div>
     </div>
     
     <transition>
      <balon-message :message="textBallon" v-if="show"/>
     </transition>
  </div>
</template>

<script>
import DoorMont from './components/DoorMont.vue';
import BalonMessage from './components/Balon-Message.vue'
export default {
    name: 'App',
    components: { DoorMont, BalonMessage },
    data:function(){
        return{
            started: false,
            portsAmount: 3,
            selectedPort:null,
            textBallon:null,
            show:false
        }
    },
    methods:{
        sortPort(){
            this.getRandomGiftPort()
            this.started = true
        },
        getRandomGiftPort(){
            this.selectedPort = Math.floor(Math.random() * this.portsAmount + 1)
        },
        clickDiv(event){
            const messages ={
                'win':'Parabéns, você achou o PRESENTE!',
                'continue':'deseja trocar de porta ou continuar na selecionada',
                'defeat':'Perdeu! Infelizmente você fez uma escolha errada... :('
            }
            
            if(event.selected && event.monsterOrGift){
                this.showMessage(messages['win'], true)
            }
            else if((event.selected && !event.monsterOrGift) ||
                    (!event.selected && event.monsterOrGift)){
                this.showMessage(messages['defeat'], true)
            }
            else{
                this.showMessage(messages['continue'])
            }
        },
        reload(){
            setTimeout(() => {
                    this.started = false
                    this.show = false
            },4000)
        },
        clearBalon(){
          this.textBallon = null;
          this.show = false;
        },
        showMessage(text, reload = false){
            this.clearBalon()
            this.textBallon = text,'Parabéns, você achou o PRESENTE!';
            this.show = !this.show;
            if(reload){
                this.reload()
            }
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
    padding:0;
    margin:0;
    font-family: 'Montserrat', sans-serif;
}

html{
    height: 100%;
    min-height: 100%;
}

body{
    color:#fff;
    background: linear-gradient(to right, rgb(21, 153, 87), rgb(21,87,153));
    display: flex;
    flex-direction: column;
    min-height: 100%;
}

#app{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100%;
    margin-top: 3rem;
    position: relative;
}

#app h1{
    border: 1px solid #000;
    background-color:#0004;
    padding: 1.25rem;
    margin-bottom: 3.75rem;
    
}

#app h2{
    font-size: 1.5rem;
    line-height: 1.3;
    letter-spacing: 0.04em;
    text-align: justify;
}

#app .form div{
    width:430px;
}

#app h2 ~ div{
    margin-top: 20px;
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
    margin-left:60px;
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
footer{
    margin-top:auto;
    margin-bottom: 1rem;
    align-self: center;
}

footer span{
    text-align: center;
    margin-top:30px;
    font-size:12px;
    color:#999;
}

@media(max-width: 430px){
    #app h1{
        font-size: 1.75rem;
    }
    #app .form div{
     width:300px;
    }

    #app h2 {
        font-size: 0.95rem;
    }

    .form input{
        width:100%;
        margin-left:0;
    }
    .form button{
        width:100%;
    }
}
</style>