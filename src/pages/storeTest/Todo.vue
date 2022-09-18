<template>
  <div class="flex justify-center">Todo</div>
  <div class="flex justify-center">{{todo.title}}</div>
</template>
<script>

  export default{
    props:["todo"]
  }
</script>
