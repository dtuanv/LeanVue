<template>
  <div class="q-pa-md">

      <!-- make form in center -->
      <div class="row">


        <div class="col-4"></div>
        <div class="col-4 category" >Our Category</div>

        <div class="col-4"></div>
         <q-btn to="/admin/category/add" color="secondary" label="Add category" class=""  />
      </div>
    <q-separator></q-separator>



      <div class="row">
        <div v-for="category in categories" :key="category.id">
          <CategoryBox :category="category"></CategoryBox>
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
import CategoryBox from "src/components/category/CategoryBox.vue";
const categories = ref([]);
export default {
    component: {CategoryBox},
    setup() {
        const $q = useQuasar();
        const router = useRouter();
        axios.get("http://localhost:8686/category")
            .then(response => {
            categories.value = response.data;
            console.log(categories.value);
        })
            .catch(err => {
            console.log(err);
        });
        return {
            categories
        };
    },
    data() {
    },
    methods: {},
    components: { Detail, CategoryBox }
}
</script>
<style>
  .category{
    font-size: large;
    text-align: center;
  }
  .cate-card{
    width:100%;
    height:100%
  }
</style>
