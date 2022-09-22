<template>
  <div class="q-mt-xl">
    <div class="justify-center flex">
      <q-img src="/img/shopping_cart.png"  style="height: 140px; max-width: 150px"/>
    </div>
    <div v-for="(item,index) in items" :key="index" :item="item">
        <div class="justify-center flex row">
        <div class="q-ma-sm" >{{item.quantity}} x {{item.product.name}}</div>
         <q-btn @click.prevent="removeProductFromCart(item.product)" icon="delete" color="negative" dense flat></q-btn>

      </div>

    </div>
    <div class="q-ma-lg justify-center flex">Total: {{cartTotalPrice}} $</div>
  </div>
    <div><q-btn to="/product" label="Back to Product"></q-btn> </div>
</template>
<script>
import { useStore } from 'vuex';
import { ref, computed, nextTick } from "vue";
import {WebApi} from "/src/apis/WebApi";

import { useQuasar } from "quasar";
import mapActions from "vuex";
export default {
  name:"Cart",
  setup() {
    const $store = useStore()

// const $q = useQuasar();
// const router = useRouter();
// axios.get("http://localhost:8686/product")
//     .then(response => {
//     products.value = response.data;
//     console.log(products.value);
// })
//     .catch(err => {
//     console.log(err);
// });
  const items =computed({
    get: () => $store.state.cache.cart,
  })
  console.log("length of cart: ",$store.state.cache.cart.length )
  console.log("CachedCart from store: ", items.value)
  console.log("total: ", $store.getters['cache/cartTotalPrice'])
  return{
    items,
  }

  },
  computed:{
    cartItems(){},
    cartTotalPrice(){
      return  this.$store.getters['cache/cartTotalPrice'];
    }
  },
 methods:{
  removeProductFromCart(product){
    this.$store.dispatch("cache/removeProductFromCart", product)
  }
  // removeProductFromCart(product){
  //   this.$store.dispatch("cache/removeProductFromCart", product)

  // },

 }
}
</script>
