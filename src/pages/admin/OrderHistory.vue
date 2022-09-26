<template>
<div>

<div>{{rows}}</div>
</div>
</template>
<script>
  import { useStore } from 'vuex';
import { ref, computed, nextTick } from "vue";
import {WebApi} from "/src/apis/WebApi";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";

import { useQuasar } from "quasar";
const rows = ref([]);
// const product=
// const columns = [
// { name: "firstName", label: "First Name", field: "firstName", sortable: true, },
// { name: "name", label: "Name", field: "product.name", sortable: true, },
  // { name: "name", label: "Name", field: (row) =>{
  //   row.product.name
  // },sortable: true, },

  // { name: "total", label: "Total", field: "total" },
//   { name: "total", label: "Total", field: (row) =>(row.total ) },
//   { name: "product", label: "Product", field: (row) =>(row.id ) },

// ]
const products = ref([])
export default {
  setup() {
    axios.get(`${WebApi.server}/admin/bill`)
      .then((response) => {
        rows.value = response.data;
      console.log("products: t ", rows.value[0].product[1].name)


      })
      .catch((error) => {
        console.log(error);
      });

    return{
      rows,
      // columns,
      // products,

    }

  },
}
</script>
