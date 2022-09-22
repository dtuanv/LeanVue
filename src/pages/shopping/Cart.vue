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
  <div class="row">
    <div class=" q-ml-lg"><q-btn to="/product" label="Back to Product"></q-btn> </div>
    <div class=""></div>
    <div class="">
      <q-btn @click="itemCheckOut" class="" label="Check Out"  style="color: goldenrod;"></q-btn>
    </div>
  </div>
</template>
<script>
import { useStore } from 'vuex';
import { ref, computed, nextTick } from "vue";
import {WebApi} from "/src/apis/WebApi";
import axios from "axios";

import { useQuasar } from "quasar";
import mapActions from "vuex";
const bill = ref({})

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
    bill,
    items,
    itemCheckOut(){
      axios({
          method: "post",
          url:  `${WebApi.server}/checkOut`,
          // data: JSON.stringify(product),
          data: bill.value = {
            items: $store.state.cache.cart,
            total: $store.getters['cache/cartTotalPrice']
          },
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(() => {
            $q.notify({
              message:'checkouted',

              color:'positive',
              avatar:'/img/trangTi.png',
            })
            console.log("checkouted");
            router.replace("/product");
          })
          .catch((err) => {
            console.log(err);
          });
    }
  }

  },
  computed:{
    cartItems(){},
    cartTotalPrice(){
      return  this.$store.getters['cache/cartTotalPrice'];
    },

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
