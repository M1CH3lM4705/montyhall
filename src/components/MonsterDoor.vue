<template>
  <div class="monster">
      <img :src="image" alt="monster">
  </div>
</template>

<script>
import image from '../../static/sulivan.png'
export default {
    data:function(){
        return{
            image:image
        }
    }
}
</script>

<style>
.monster{
    display:flex;
    flex-direction: column;
    align-items:center;
    height: 30vh;
    z-index:10;
}
.monster img{
    max-width: 100%;
    height: 100%;
    width: 100%;
}
</style>