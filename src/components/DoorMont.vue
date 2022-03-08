<template>
  <div class="door-area">
      <div class="door-frame" :class="{ selected: selected && !open }">
          <GiftMont v-if="open && hasGift" />
          <monster-door v-if="open && !hasGift" />
      </div>
      <div class="door" :class="{open}"
        @click="selected = !selected">
          <div class="number" :class="{ selected }">{{number}}</div>
          <div class="knob" title="Abrir a porta" :class="{ selected }"
            @click.stop="openDoor($event)"></div>
      </div>
  </div>
</template>

<script>
import GiftMont from './GiftMont'
import MonsterDoor from './MonsterDoor.vue'

export default {
    components:{ GiftMont, MonsterDoor},
    props:{
        number:{},
        hasGift:{type:Boolean},
    },
    data:function(){
        return{
            open:false,
            selected:false
        }
    },
    methods:{
        openDoor(){
            const action = {}
            this.open = !this.open;
            action.selected = this.selected
            action.monsterOrGift = this.hasGift
            this.$emit('open-door', action)
            
        }
    }
}
</script>

<style>
:root{
    --door-border:5px solid brown;
    --selected-border:10px solid yellow;
}

.door-area{
    position:relative;
    width: 200px;
    height:310px;
    border-bottom:10px solid #aaa;
    margin-bottom:20px;
    font-size:3rem;

    display: flex;
    justify-content: center;
}
.door-frame{
    position: absolute;
    height: 300px;
    width:180px;

    border-left:var(--door-border);
    border-top:var(--door-border);
    border-right: var(--door-border);

    display: flex;
    justify-content: center;
    align-items:flex-end;
}

.door{
    position: absolute;
    top: 5px;
    height: 295px;
    width: 170px;
    background-color:chocolate;

    display: flex;
    flex-direction:column;
    align-items: center;
    padding: 20px;
}

.door .knob{
    height:20px;
    width: 20px;
    border-radius: 20px;
    background-color: brown;
    align-self: flex-start;
    margin-top: 3.75rem;
}

.door-frame.selected{
    border-left: var(--selected-border);
    border-top: var(--selected-border);
    border-right: var(--selected-border);
}

.door > .number.selected{
    color:yellow;
}

.door > .knob.selected{
    background-color:yellow;
}

.door.open{
    background-color: #0007;
}
.door.open .knob{
    display:none;
}
.door.open .number{
    display:none;
}
</style>