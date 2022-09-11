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
    >

    <template v-slot:body-cell-action="props">
      <q-td :props="props">
        <q-btn icon="edit" @click='editCategory(props)' dense></q-btn>
        <q-btn icon="delete" color="negative" @click='deleteCategory(props)' dense></q-btn>

      </q-td>


    </template>
  </q-table>
  </q-page>
</template>

<script>
import axios from 'axios';
import { ref, computed, nextTick } from 'vue'
const columns = [
  {name:'name', label:'Name', field:'name'},
  {name:'imageUrl', label:'Image Url', field:'imageUrl'},
  {name:'decription', label:'Decription', field:'decription'},
  {name:'action', label:'Action', field:''},

]
const rows = ref([]);
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
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
  },
  methods:{
    editCategory(props){
      console.log('Params: ',props.row.id)
      this.$router.push('/admin/category/add/'+props.row.id+'/')


    }
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
