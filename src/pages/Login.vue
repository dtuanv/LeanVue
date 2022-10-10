<template>
  <q-page padding class="flex justify-center">
    <!-- <q-dialog v-model="loginForm">
      <q-input label="User Name"></q-input>
    </q-dialog> -->
    <q-card  style="width:15vw; height:40vh; background-color:blanchedalmond;">
        <q-card-section>
          <div class="flex justify-center text-h4">Login</div>
        </q-card-section>

          <q-form @submit="onSubmit">
          <q-input class="q-ml-sm q-mr-sm" v-model="user.userName" label="UserName" ></q-input>
          <q-input class="q-ml-sm q-mr-sm" v-model="user.password" label="Password"></q-input>

          <q-btn label="Submit" type="submit" filled class="float-right" flat color="positive"></q-btn>

          </q-form>


    </q-card>
  </q-page>
</template>

<script>
  import { useStore } from "vuex";
import { ref, computed, nextTick } from "vue";
import { WebApi } from "/src/apis/WebApi";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import ReservationBox from "/src/components/ReservationBox.vue";

import { useQuasar } from "quasar";
import { date } from "quasar";
export default {
  setup(){
    const loginForm= ref(true)
    const user =ref()
    return{
      loginForm,
      user,
      onSubmit(){

        axios({
          method: "post",
          url:  `${WebApi.server}/login`,
          // data: JSON.stringify(product),
          data: user.value,
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(() => {
            $q.notify({
              message:'login successfull',

              color:'positive',
              avatar:'/img/trangTi.png',
            })
            console.log("product saved");
            router.replace("/");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }
  // name: 'PageName',
}
</script>
