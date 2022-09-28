<template>
  <div class="q-pa-md">
    <div class="text-h4 flex justify-center">Reservation</div>

    <!-- icon -->
    <div class="row justify-center">
      <div v-for="reservation in reservations" :key="reservation.key">
        <ReservationBox :reservation="reservation"></ReservationBox>

        <!-- <q-item clickable v-ripple style=" max-width:100px">
      <q-item-section side>
        <q-avatar rounded size="65px">
          <img src="~assets/img/family.png" />
          <q-badge floating color="teal">new</q-badge>
        </q-avatar>
      </q-item-section>
    </q-item>
    <div>---->

        <!-- </div>    <q-item clickable v-ripple style=" max-width:100px">
      <q-item-section side>
        <q-avatar rounded size="65px">
          <img src="~assets/img/calendar.png" />
          <q-badge floating color="teal">new</q-badge>
        </q-avatar>
      </q-item-section>
    </q-item>
     -->
      </div>
    </div>
    <q-card class="shadow-1">
      <q-card-section>
        <div v-if="orGuestNum ==''">Number of guests : {{guestNum}}</div>
        <div v-if="orGuestNum!=''">The desired number of guests: {{orGuestNum}}</div>

      </q-card-section>
      <div class="row">
        <q-card-actions v-for="guest in guests" :key="guest">
          <q-btn style="width: 10vw" :label="guest.label" @click="chooseNumberGuests(guest)"></q-btn>
        </q-card-actions>
        <q-card-actions class="row">
          <div>or :</div>
          <q-input v-model="orGuestNum" color="positive" filled style="width: 20vw" label="Number"></q-input>
        </q-card-actions>
      </div>
    </q-card>

    <q-card class="q-mt-lg">
      <q-card-section>
        <div class="q-mb-sm">
          <q-badge color="teal"> Date: {{ date }} </q-badge>
        </div>
        <div class="q-mb-sm">
          <q-badge color="teal"> Time: {{ time }} </q-badge>
        </div>
      </q-card-section>
      <q-card-actions class="row">
        <div>
          <q-btn icon="event" round color="primary">
            <q-popup-proxy
              @before-show="updateProxy"
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="proxyDate">
                <div class="row items-center justify-end q-gutter-sm">
                  <q-btn label="Cancel" color="primary" flat v-close-popup />
                  <q-btn
                    label="OK"
                    color="primary"
                    flat
                    @click="save"
                    v-close-popup
                  />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-btn>
        </div>
        <div class="col-9"></div>
        <div>
          <q-btn icon="timer" @click="dialog_time = true"></q-btn>
        </div>
      </q-card-actions>
    </q-card>

    <q-dialog v-model="dialog_time">
      <q-card>
        <q-card-section>
          <div class="text-h4 flex justify-center">Time</div>
        </q-card-section>
        <q-card-actions>
          <div v-for="(time, index) in times" :key="index">
            <q-item>
              <q-btn class="q-ml-md" @click="chooseTime(time)" v-close-popup>{{
                time.label
              }}</q-btn>
            </q-item>
            <div></div>
          </div>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
  <!-- <q-card>

  </q-card> -->
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
  components: { ReservationBox },
  methods: {
    chooseNumberGuests(num){

      console.log("orGuestNum ", this.orGuestNum)
      this.guestNum = num.value;


    },
    chooseTime(timeI) {
      // console.log(timeI.value);
      this.time = timeI.value
    },

  },
  computed:{
    changeGuestNum(){
      this.guestNum = this.orGuestNum
      console.log("change")

    }



  },
  setup() {
    const $store = useStore();
    const guestStore = computed({
      get: () => $store.state.cache.guestNum,
    });
    const time = ref()
const guestNum = ref(guestStore.value)

    const orGuestNum = ref('')



    const reservations = $store.state.cache.reservations;
    console.log("re: ", reservations);
    const $q = useQuasar();
    const date = ref("2019/03/01");
    const proxyDate = ref("2019/03/01");

    const today = Date.now();
    // const formattedString = date.formatDate(today, "DD-MM-YYYY");
    // console.log(formattedString);
    function todayInJasmin() {
      const datum = today.getDate();
      return datum + "";
    }
    const router = useRouter();
    // const date = ref("2019/03/01");


    const guests = computed({
      get: () => $store.state.cache.guests,
    });

    const times = computed({
      get: () => $store.state.cache.times,
    });
    console.log("orGuestNum, ",orGuestNum)
    console.log("orGuestNum value, ",orGuestNum.value)
    console.log("guestNum, ",guestNum)
    console.log("guestStore, ",guestStore.value)


    // if(  orGuestNum.value !=0 || orGuestNum.value != "" ){
    if(  true ){
    $store.dispatch("cache/changeGuestNum", orGuestNum.value);
      console.log("orGuestNum  in if TUann", orGuestNum.value)
      }

    return {
      reservations,
      dialog_time: ref(false),
      date,
      time,
      // formattedString,
      proxyDate,
      guestNum,
      orGuestNum,
      guests,
      times,

      time: ref(""),

      updateProxy() {
        proxyDate.value = date.value;
      },

      save() {
        date.value = proxyDate.value;
      },
    };
  },
};
</script>
