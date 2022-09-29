<template>
  <div class="q-pa-md">
    <div class="text-h4 flex justify-center">Reservation</div>

    <!-- icon -->
    <div class="row justify-center">
      <div v-for="reservation in reservations" :key="reservation.key">
        <ReservationBox :reservation="reservation">

        </ReservationBox>

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
        <div v-if="orGuestNum ==''">Number of guests : {{guestNum}}
        </div>
        <div v-if="orGuestNum!=''" >The desired number of guests: {{orGuestNum}}
        <div>{{changeStatus()}}</div>

        </div>
        <!-- <div v-if="guestNum!==0 || orGuestNum!=''">{{resetStatus()}}</div> -->
        <div v-if="guestNum ==0 && orGuestNum ==''">{{resetStatus()}}</div>
      </q-card-section>
      <div class="row">
        <q-card-actions v-for="guest in guests" :key="guest">
          <q-btn style="width: 10vw" :label="guest.label" @click="chooseNumberGuests(guest),date_card=true"></q-btn>
        </q-card-actions>
        <q-card-actions class="row">
          <div>or :</div>
          <q-input v-model="orGuestNum" color="positive" filled style="width: 20vw" label="Number"></q-input>
        </q-card-actions>
      </div>
    </q-card>

    <q-card class="q-mt-lg" v-if="date_card">
      <q-card-section>
        <div class="q-mb-sm">
          <q-badge color="teal"> Date: {{ dateInGermany }} </q-badge>
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
              <q-date v-model="proxyDate" :options="fromCurrendate">
                <div class="row items-center justify-end q-gutter-sm">
                  <q-btn label="Cancel" color="primary" flat v-close-popup />
                  <q-btn
                    label="OK"
                    color="primary"
                    flat
                    @click="save(), button_time=true"
                    v-close-popup
                  />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-btn>
        </div>
        <div class="col-9"></div>
        <div class="row">

          <q-btn v-if="button_time" color="positive" icon="timer" @click="dialog_time = true"></q-btn>
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
      this.guestNum = num.value;
      this.$store.dispatch("cache/changeStatus", 1);


    },
    chooseTime(timeI) {
      // console.log(timeI.value);
      this.time = timeI.value
      this.$store.dispatch("cache/changeStatus",3)
    },

  },
  computed:{
    changeGuestNum(){
      this.guestNum = this.orGuestNum
      console.log("change")

    },

    // changeStatus(){
    //   guestInfo.value.status = true

    // }



  },
  setup() {
    const $store = useStore();
    const $q = useQuasar();
    const router = useRouter();

    // const guestStore = computed({
    //   get: () => $store.state.cache.guestNum,
    // });

    // **guest in store**
    const guests = computed({
      get: () => $store.state.cache.guests,
    });

    const guestInfo = computed({
      get: () => $store.state.cache.guestInfo,
    });

    const times = computed({
      get: () => $store.state.cache.times,
    });
    const reservations = $store.state.cache.reservations;

const guestNum = ref(guestInfo.value.guestNum)
// const guestNum = ref(0)


    const orGuestNum = ref(guestInfo.value.orGuestNum)

    // **guest in store** END

    //**  data define beginn **
    const time = ref()
    const today = Date.now();
    const formattedString = date.formatDate(today, "DD-MM-YYYY");
    const dateInGermany = ref("");
    const proxyDate = ref("");
    // const date = ref("2019/03/01");

    // **  date define end **




    // console.log("orGuestNum, ",orGuestNum)
    // console.log("orGuestNum value, ",orGuestNum.value)
    // console.log("guestNum, ",guestNum)
    // console.log("guestStore, ",guestStore.value)


    // if(  orGuestNum.value !=0 || orGuestNum.value != "" ){
    if(  true ){
    $store.dispatch("cache/changeGuestNum", orGuestNum.value);
      // console.log("orGuestNum  in if TUann", orGuestNum.value)
      }

    return {

      reservations,
      dialog_time: ref(false),
      date_card: ref(false),
      button_time:ref(false),
      dateInGermany,
      time,
      // formattedString,
      proxyDate,
      guestNum,
      orGuestNum,
      guests,
      times,
       fromCurrendate(d){
        const heute =  date.formatDate(today, "YYYY/MM/DD")  ;

        return d >= heute
       } ,
      resetStatus(){
      $store.dispatch("cache/resetStatus")
    },
      changeStatus(){

      $store.dispatch("cache/changeStatus", 1);
      this.date_card=true

      },

      time: ref(""),

      updateProxy() {
        proxyDate.value =  date.formatDate(today, "YYYY/MM/DD")  ;
      },

      save() {
        dateInGermany.value =date.formatDate(proxyDate.value, "DD-MM-YYYY") ;
        console.log("date ", dateInGermany.value)
          $store.dispatch("cache/changeStatus",2);
      },
    };
  },
};
</script>
