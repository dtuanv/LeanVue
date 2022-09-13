<template>
  <div class="q-mt-xl">
    <div class="justify-center flex">
      <q-img src="/img/shopping_cart.png"  style="height: 140px; max-width: 150px"/>
    </div>
  </div>

</template>
<script>


export default {
  name:"Cart",
  setup() {

  },
  computed:{
    cartItems()
  },
  totalPrice(){
    let price = 0;

  }
}
</script>
