<template>
  <div>{{customer.customerId}}</div>
  <div>{{customer.lastName}}</div>
  <!-- <div>{{customer.name}}</div> -->
</template>
<script>
  export default{
    props:["customer"]
  }
</script>
