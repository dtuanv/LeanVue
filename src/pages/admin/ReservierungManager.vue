<template>
  <q-page class="q-pa-md">
    <div class="text-h5 flex justify-center">Reservierung </div>
    <!-- <div>
        <div class="q-pb-sm q-gutter-sm">
          <q-badge color="teal">
            Model: {{ formattedString }}
          </q-badge>
          <q-badge color="purple" text-color="white">
            Mask: MM-DD-YYYY
          </q-badge>
        </div>

        <q-date v-model="formattedString" mask="DD-MM-YYYY" />
      </div> -->

      <div v-if="reservations.length===0">Keine Reservierung</div>
      <div class="q-mb-sm">
      <q-badge color="teal">
        Model: {{ formattedString }}
      </q-badge>
    </div>

    <q-btn icon="event" round color="primary">
      <q-popup-proxy @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
        <q-date v-model="proxyDate" mask="DD-MM-YYYY">
          <div class="row items-center justify-end q-gutter-sm">
            <q-btn label="Cancel" color="primary" flat v-close-popup />
            <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
          </div>
        </q-date>
      </q-popup-proxy>
    </q-btn>



    <div v-for="reservation in reservations" :key="reservation.id">
      <q-card class="q-mb-sm">
        <q-card-section>
          <!-- <div v-if="reservation.time > '18:00'">{{ reservation.time }}</div> -->
          <div>{{ reservation.time }}</div>

          <q-btn label="Arrived"  class="float-right"  @click="changeStatus(reservation)" :color="reservation.status == 2 ? 'red': 'positive'"></q-btn>
        </q-card-section>
        <q-card-actions>
          <div >
            <div class="q-mr-sm col-2">Name: {{ reservation.name }}</div>
            <div>Mobil: {{reservation.mobil}} </div>
            <div >Number of Guests: {{ reservation.guestNum }}</div>
          </div>

        </q-card-actions>
      </q-card>
    </div>
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
const reservations = ref([]);
export default {
  methods:{
    changeStatus(reservation){
      reservation.status = 1
      console.log("reservation.status",reservation)
      axios.put(`${WebApi.server}/admin/reservation/changeStatus/`+parseInt(reservation.id))
},

  },
  setup() {
    const today = Date.now();
    const formattedString = ref(date.formatDate(today, "DD-MM-YYYY"));
    const proxyDate = ref('')



    axios.get(`${WebApi.server}/admin/reservation/`+formattedString.value).then((response) => {
      reservations.value = response.data;
      for (var i = 1; i < reservations.value.length; i++)
       for (var j = 0; j < i; j++)
        if (reservations.value [i].time < reservations.value [j].time) {
          console.log("check in array ", reservations.value [i].time < reservations.value [j].time)
          var x = reservations.value [i];
          reservations.value [i] = reservations.value [j];
          reservations.value[j] = x;
        }

    });

    return {
      reservations,
      formattedString,
      proxyDate,

      updateProxy () {
        proxyDate.value = formattedString.value
      },

      save () {
        formattedString.value = proxyDate.value
        axios.get(`${WebApi.server}/admin/reservation/`+formattedString.value).then((response) => {
      reservations.value = response.data;
      for (var i = 1; i < reservations.value.length; i++)
       for (var j = 0; j < i; j++)
        if (reservations.value [i].time < reservations.value [j].time) {
          console.log("check in array ", reservations.value [i].time < reservations.value [j].time)
          var x = reservations.value [i];
          reservations.value [i] = reservations.value [j];
          reservations.value[j] = x;
        }

    });
      }
    };
  },
};
</script>
