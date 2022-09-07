<template>
  <q-page  class="q-pa-md  ">
    <div class="justify-center flex text-h5 	q-mb-lg">Edit Resource of Category</div>
    <!-- content -->
    <!-- <div class="q-gutter-md edit_category  " style="max-width: 500px">

      <q-input filled v-model="categories" label="Name" />
      <q-input filled v-model="text" label="Image Url" />
      <q-input filled v-model="text" label="Decription" />


     </div> -->
     <q-table

      :rows="rows"
      :columns="columns"
      row-key="name"
      class="my-sticky-header-table"
      :pagination="pagination"
      :rows-per-page-options="[0]"


    />
  </q-page>
</template>

<script>
import axios from 'axios';
import { ref, computed, nextTick } from 'vue'
const columns = [
  {name:'name', label:'Name', field:'name'},
  {name:'imageUrl', label:'Image Url', field:'imageUrl'},
  {name:'decription', label:'Decription', field:'decription'},

]
const rows = ref([]);

export default {
  // name: 'PageName',
  setup(){
    axios.get("http://localhost:8686/category")
            .then(response => {
            rows.value = response.data;
            console.log(rows.value);
        })
            .catch(err => {
            console.log(err);
        });
        return {
        rows,
        columns,
        pagination: { rowsPerPage: 0 },
        };
  }

}
</script>
<style>
  .edit_category{
    max-width: 500px;
    text-align: center;
    display: block;
    margin-inline: auto;
  }
</style>
