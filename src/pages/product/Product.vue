<template>
  <div class="q-pa-md">

      <!-- make form in center -->
      <div class="row">


        <div class="col-4"></div>
        <div class="col-4 product" >Our Product</div>

        <div class="col-4"></div>
      </div>
      <div class="row">
        <q-btn dense to="/admin/product/add/0" color="secondary" label="Add product" class="col-5"  />
        <div class="col-2"></div>
        <q-btn to="/admin/product/edit" color="secondary" icon="edit" label="Edit Resource" class="col-5"></q-btn>
      </div>


      <!-- <div class="float-right"></div> -->
    <q-separator></q-separator>



      <!-- <div class="row"> -->
      <div class="full-width row wrap justify-center items-start content-center ">
        <div  class="col-xs-12 col-md-4 q-col-gutter-md wrap">
        <div v-for="product in products" :key="product.id">
          <productBox :product="product"></productBox>
        </div>

      </div>
      </div>
       </div>
      <!-- <div class="col-6"></div> -->
      <!-- <div class="col-6"></div> -->
</template>
<script >
import { ref, computed, nextTick } from "vue";
import axios from "axios";
import { useQuasar } from "quasar";
import { useRoute, useRouter } from "vue-router";
import Detail from "../customer/Detail.vue";
import productBox from "src/components/product/ProductBox.vue";
const products = ref([]);
export default {
    component: {productBox},
    setup() {
        const $q = useQuasar();
        const router = useRouter();
        axios.get("http://localhost:8686/product")
            .then(response => {
            products.value = response.data;
            console.log(products.value);
        })
            .catch(err => {
            console.log(err);
        });
        return {
            products
        };
    },
    data() {
    },
    methods: {},
    components: { Detail, productBox }
}
</script>
<style>
  .product{
    font-size: large;
    text-align: center;
  }
  .cate-card{
    width:100%;
    height:100%
  }
</style>
