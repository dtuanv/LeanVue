<template>
  <div class="q-pa-md ">

        <h1 clas class="text-center">Customer Details</h1>


    <div class="row q-col-gutter-lg">
        <q-input v-model="customer.firstName" class="col-5" label="First Name "></q-input>
        <q-input v-model="customer.lastName" class="col-5" label="Last Name"></q-input>


    </div>
    <div class="row q-col-gutter-lg">

      <q-input v-model="customer.email" class="col-5" label="Email"></q-input>
      <q-select v-model="customer.gender" class="col-5" label="Gender" :options="genderList"></q-select>

    </div>
    <div class="float-right">
      <q-btn label="Zurück" type="reset" color="negative" dense flat to="/customer"></q-btn>
      <q-btn label="Speichern" color="primary" type="submit" dense flat @click="" ></q-btn>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
import axios from 'axios';
import { useRouter, useRoute } from "vue-router";
const customer = ref({});
export default{
  setup(){

    const router = useRouter();
    const route = useRoute();
    const customerId = route.params.customerId

    console.log("id ", route.params.customerId)
    if(customerId == 0){
      customer.value = { firstName:''}

    }else{
      axios
    .get("http://localhost:8686/customer/" + route.params.customerId)
        .then((response) => {
          customer.value = response.data;
          console.log(customer.value);
          console.log(customer.value.email);
          console.log("response.data:  " + response.data.customerId);
        })
    .catch(error =>{
      console.log(error)
    });
    console.log("customer ", customer)

    }



  return{
    customer,
    genderList:[
      {
        label:'Male',
        name:'male',
        value:'male',
        field:'male'
      },
      {
        label:'Female',
        name:'female',
        value:'female',
        field:'female'
      },
    ]

  }
}
}


</script>
