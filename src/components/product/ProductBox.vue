<template>
  <!-- <div class="q-pa-md row items-start q-gutter-md"> -->
  <div class="q-pa-md ">
    <!-- <q-card   class="my-card flex  shadow-5 "> -->
    <q-card   class="full-width  justify-start items-start content-center ">
      <!-- <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" /> -->
      <q-img :src="'/img/'+product.imageUrl" />

      <q-card-section>
        <!-- <q-btn fab color="primary" icon="place" class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);" /> -->

        <div class="row no-wrap items-center">
          <div class="col-12 flex justify-center text-h6 ellipsis ">
            {{product.name}}
          </div>
          <!-- <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />

          </div> -->
        </div>
        <div>Price: {{product.price}}</div>

        <!-- <q-rating v-model="stars" :max="5" size="32px" /> -->
      </q-card-section>


      <q-card-section class="">

        <div class="">
        {{product.decription}}
        </div>
      </q-card-section>
      <q-card-section>

          <div class="row">
          <q-btn @click="subtractItem()" icon="remove" color="negative" flat></q-btn>
           <q-input filled readonly
      autogrow v-model="countItem" class=" col-2 items-center " input-class="text-center "
 color="positive" :input-style="{ color:'green'}"></q-input>
          <q-btn @click="addItem()" icon="add" color="positive" flat></q-btn>

          <q-btn @click="addToCart()" class="float-right" icon="add_shopping_cart">


          </q-btn>

        </div>
        <div>{{countItem}}</div>

      </q-card-section>



      <!-- <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary">
          Reserve
        </q-btn>
      </q-card-actions> -->
    </q-card>
  </div>
</template>

<script>
// import { count } from 'console';
import { ref } from 'vue'
import { useStore } from 'vuex';
import { useQuasar } from 'quasar'
const $q = useQuasar()
export default {
  name : 'productBox',
  props: ['product'],
  setup() {
    const $store = useStore()

    let countItem = ref(0);
    let countCart = ref(0);
    // $store.state.cart.products.quantity
    // const test = $store.state.cart.quantity
    function addItem(){
        this.countItem++;
    };

   function subtractItem(){
      if(countItem.value === 0){
      console.log("Stopp count")
      this.countItem = 0;
      return;
    }
    if(countItem.value > 0){
        this.countItem--;
    }
   };
   if($store.state.cache.cart.length > 1){
    console.log("check quantity")
    let productInCart = $store.state.cache.cart.find(item => {
    return item.product.id != undefined;
  })
    if(productInCart){
      // productInCart.forEach(myFunction)
      // function myFunction(item) {
      // // arr[index] = item * 10;
      // console.log("Show quantity",item.quantity)
      // console.log("quantity ",JSON.parse(JSON.stringify( $store.state.cache.cart))[index].quantity)
      // countItem = ref(JSON.parse(JSON.stringify( $store.state.cache.cart))[index].quantity)

      // console.log("quantity ",JSON.parse(JSON.stringify( $store.state.cache.cart))[1].quantity)
      // countItem = ref(JSON.parse(JSON.stringify( $store.state.cache.cart))[1].quantity)

    }

   }
  //  function addToCart(){
  //   this.$store.dispatch('cache/addProductToCart', {
  //     product: this.product,
  //     quantity: 1,
  //   })
  //  };
    return {
      stars: ref(4),
      addItem,
      countItem,
      subtractItem,
      countCart,
      // addToCart,


    }
  },
  methods:{
    addToCart(){
    this.$store.dispatch('cache/addProductToCart', {
      product: this.product,
      quantity: this.countItem,
    })
    if(this.countItem>0){
      this.$q.notify({
          message: 'Added to cart.',
          color: 'positive',
          avatar: '/img/trangTi.png'
        })
    }else{
      this.$q.notify({
          message: 'Number of Item must be grater than 0.',
          color: 'negative',
          avatar: '/img/trangTi.png'
        })
    }


  }
},
  computed:{

  }
}
</script>

<style >
.qInput{
  width: 100%;
    max-width: 40rem;
    display: inline-block;
};
.my-card {
  width: 100%;
  height: 100%;
/* max-height: 450px;
    max-width : 300px */
  }
</style>


