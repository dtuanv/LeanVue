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
import { useRoute, useRouter } from "vue-router";

import { useQuasar } from "quasar";
import mapActions from "vuex";
const bill = ref({})

export default {
  name:"Cart",
  setup() {
const $q = useQuasar();
const products = ref([])
    const $store = useStore()
    const router = useRouter();
    var hashmap = new Map();
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
  // console.log("length of cart: ",$store.state.cache.cart.length )
  // console.log("CachedCart from store: ", items.value)
  // console.log("total: ", $store.getters['cache/cartTotalPrice'])

  // console.log("check store t", $store.state.cache.cart.length)
  console.log("items.value ",items.value),
    console.log("$store.state.cache.cart ",$store.state.cache.cart)
    items.value.forEach(item => {
      const products = ref([])
      // hashmap.set(item.product, item.quantity)
      products.push({
        product: item.product,
        quantity:item.quantity

      })

    })
console.log("hashproductsMap",products)
  return{
    products,
    bill,
    items,
    hashmap,
    itemCheckOut(){
      if($store.state.cache.cart.length ===0){
              router.replace("/product");
              $q.notify({
              message:'You have no items',

              color:'negative',
              avatar:'/img/trangTi.png',
            })
          .catch((err) => {
            console.log(err);
          });
              return;
    }
    // let product =[{}]
    // for(Object a : $store.state.cache.cart ){
    //   a.
    // }


      axios({
          method: "post",
          url:  `${WebApi.server}/checkOut`,
          // data: JSON.stringify(product),

          data: bill.value = {
            product: items.value,
            total: $store.getters['cache/cartTotalPrice']
          },
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(() => {
            console.log("check oit come")

            $q.notify({
              message:'checkouted',

              color:'positive',
              avatar:'/img/trangTi.png',
            })
            console.log("checkouted");

            router.replace("/thank");
            $store.dispatch("cache/checkOut")
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
