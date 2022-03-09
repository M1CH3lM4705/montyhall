<template>
  <div class="balao">
    {{ message }}
  </div>
</template>

<script>
export default {
  name:'Balon-Message',
  props:{
    message:String
  }
}
</script>

<style>
  .balao{
    margin:0 auto;
    background: #34977e;
    font-size: .85rem;
    line-height: 1.6em;
    border-radius: 15px;
    width: 300px;
    height: auto;
    color:#fff;
    padding:20px;

    position:relative;
    margin-top: 30px;
  }
  
</style>