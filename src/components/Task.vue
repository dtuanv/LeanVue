<template>
  <ul>
    <li>{{task.name}}<button class="button">X</button></li>
    <div>{{task.dueDate}}</div>
    <div>{{task.gender}}</div>
  </ul>
</template>
<script>
  export default{
    props:['task']
  }
</script>
<style>
  .button{
    background-color: red;
  }
  .button:hover{
    background-color: yellow;
  }
</style>
