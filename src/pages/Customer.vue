<template>
  <q-page padding>
    <div class="q-pa-md">
      <template>
        <q-input
        place>

        </q-input>
      </template>
    <q-table
    :columns="columns"
    :rows="rows"

    >

    <template v-slot:top-right>
      <q-btn
        label="Customer hinzufügen"
        color="positive"
        class="float-right"
        dense

      >

      </q-btn>
    </template>
    <template v-slot:body-cell-actions="props"  >
      <q-td :props ="props" >
        <q-btn
          @click="editRows(props)"
          icon="edit"
          color="primary"
          dense
          flat

        ></q-btn>
        <q-btn
        dense
        flat
        @click ="deleteRow(props)"
        icon="delete_forever"
        color="negative"
        >


        </q-btn>

      </q-td>
    </template>

    </q-table>
</div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import axios from "axios";

const columns = [
  { name: "firstName", label:"First Name" , field:"firstName"},
  { name: "lastName", label:"Last Name" , field:"lastName"},
  { name: "gender", label:"Gender" , field:"gender"},
  { name: "email", label:"Email" , field:"email"},
  { name: "actions", label:"Action" , field:""},

]
const rows= ref([]);

export default {
  // name: 'PageName',
  setup(){

    axios
      .get("http://localhost:8585/customer")
      .then((response) => {
        rows.value = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("axios")
    console.log(rows)
    return{
      columns,
      rows,
    }
  },
  methods:{
    editRow(props){
      this.$router.push("./customer/" +props.row.customer_id +"/");
    }
  }
}
</script>
