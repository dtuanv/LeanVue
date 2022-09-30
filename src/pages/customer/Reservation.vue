<template>
  <div class="q-pa-md">
    <div class="text-h4 flex justify-center" style="font-family: cursive; color: coral">
      Reservation
    </div>
    <!-- icon -->
    <div class="row justify-center">
      <div v-for="reservation in reservations" :key="reservation.key">
        <ReservationBox :reservation="reservation"> </ReservationBox>

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
    <q-card class="shadow-1 q-mt-xl">
      <q-card-section>
        <div class="text-h7" style="color: cornflowerblue; font-family: cursive" v-if="orGuestNum == ''">
          Number of guests : {{ guestNum }}
        </div>
        <div class="text-h7" style="color: cornflowerblue; font-family: cursive" v-if="orGuestNum != ''">
          The desired number of guests: {{ orGuestNum }}
          <div>{{ changeStatus() }}</div>
        </div>
        <!-- <div v-if="guestNum!==0 || orGuestNum!=''">{{resetStatus()}}</div> -->
        <div v-if="guestNum == 0 && orGuestNum == ''">{{ resetStatus() }}</div>
      </q-card-section>
      <div class="row">
        <q-card-actions v-for="guest in guests" :key="guest">
          <q-btn class="hoverButton" style="width: 10vw" :label="guest.label"
            @click="chooseNumberGuests(guest), (date_card = true)"></q-btn>
        </q-card-actions>
        <q-card-actions class="row">
          <div class="text-h6 q-mr-xs">or :</div>
          <q-input v-model="orGuestNum" color="positive" filled style="width: 22vw" label="Number"></q-input>
        </q-card-actions>
      </div>
    </q-card>

    <q-card class="q-mt-lg" v-if="date_card">
      <q-card-section>
        <!-- <div class="q-mb-sm">
          <q-badge color="teal"> Date: {{ dateInGermany }} </q-badge>
        </div>
        <div class="q-mb-sm">
          <q-badge color="teal"> Time: {{ time }} </q-badge>
        </div> -->
        <div class="row">
          <div class="text-h7" style="color: cornflowerblue; font-family: cursive">
            DATE : {{ dateInGermany }}
          </div>
          <div class="col-4"></div>

          <div class="text-h7" style="color: cornflowerblue; font-family: cursive">
            TIME : {{ time }}
          </div>
        </div>
      </q-card-section>
      <q-card-actions class="row">
        <div>
          <q-btn icon="event" round color="primary">
            <q-popup-proxy @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
              <q-date v-model="proxyDate" :options="fromCurrendate">
                <div class="row items-center justify-end q-gutter-sm">
                  <q-btn label="Cancel" color="primary" flat v-close-popup />
                  <q-btn label="OK" color="primary" flat @click="save(), (button_time = true)" v-close-popup />
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
          <div class="text-h4 flex justify-center" style="font-family: cursive; color: cadetblue">
            Time
          </div>
        </q-card-section>
        <q-card-actions>
          <div v-for="(time, index) in times" :key="index">
            <q-item style="margin-left: 3vw">
              <q-btn class="hoverButton" @click="chooseTime(time), (button_next = true)" v-close-popup>{{ time.label }}
              </q-btn>
            </q-item>
            <div></div>
          </div>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
  <q-btn v-if="button_next === true && button_time === true" label="Next" class="float-right q-mr-sm" color="positive"
    @click="dialog_reservation = true" dense></q-btn>
  <!-- <q-card> -->
  <q-dialog v-model="dialog_reservation" class="">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h4 flex justify-center">Infor</div>
      </q-card-section>
      <q-separator />

      <q-card-actions vertical>
        <q-form @submit="reservationSave">
          <!-- Input Validation -->
          <q-input v-model="user.name" class="col-4" label="Name" color="white" :rules="[
            (val) =>
              (!!val && val.length > 1) || 'Please write a correct name',
          ]"></q-input>
          <!-- <q-input
            v-model="user.adresse"
            class="col-4"
            label="Adresse"
            color="white"
            :rules="adresseRules"
          ></q-input> -->
          <q-input v-model="user.mobil" class="col-4" label="Mobil" color="white" :rules="mobilRules"></q-input>
          <q-input label="Note" v-model="user.note" autogrow />
          <q-btn class="q-mt-lg float-right" label="Send" color="primary" type="submit" dense></q-btn>
        </q-form>
      </q-card-actions>
    </q-card>
  </q-dialog>
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
const user = ref({});
export default {
  components: { ReservationBox },

  methods: {
    chooseNumberGuests(num) {
      this.guestNum = num.value;
      this.$store.dispatch("cache/changeStatus", 1);
    },
    chooseTime(timeI) {
      // console.log(timeI.value);
      this.time = timeI.value;
      this.$store.dispatch("cache/changeStatus", 3);
    },
  },
  computed: {
    changeGuestNum() {
      this.guestNum = this.orGuestNum;
      console.log("change");
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

    const guestNum = ref(guestInfo.value.guestNum);
    // const guestNum = ref(0)

    const orGuestNum = ref(guestInfo.value.orGuestNum);

    // **guest in store** END

    //**  data define beginn **
    const time = ref("");
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
    if (true) {
      $store.dispatch("cache/changeGuestNum", orGuestNum.value);
      // console.log("orGuestNum  in if TUann", orGuestNum.value)
    }

    return {
      reservations,
      dialog_time: ref(false),
      date_card: ref(false),
      button_time: ref(false),
      button_time: ref(false),
      dialog_reservation: ref(false),
      user,
      dateInGermany,
      time,
      // formattedString,
      proxyDate,
      guestNum,
      orGuestNum,
      guests,
      times,
      fromCurrendate(d) {
        const heute = date.formatDate(today, "YYYY/MM/DD");

        return d >= heute;
      },
      resetStatus() {
        $store.dispatch("cache/resetStatus");
      },
      changeStatus() {
        $store.dispatch("cache/changeStatus", 1);
        this.date_card = true;
      },

      // time: ref(""),

      updateProxy() {
        proxyDate.value = date.formatDate(today, "YYYY/MM/DD");
      },

      save() {
        dateInGermany.value = date.formatDate(proxyDate.value, "DD-MM-YYYY");
        // console.log("date ", dateInGermany.value);
        $store.dispatch("cache/changeStatus", 2);
      },
      reservationSave() {
        let guestNumber = "";
        if (orGuestNum.value !== "") {
          guestNumber = orGuestNum.value;
        } else {
          guestNumber = guestNum.value;
        }

        // console.log("Check time 2 with this ", this.time),
        axios({
          method: "post",
          url: `${WebApi.server}/reservationSave`,
          // data: JSON.stringify(product),

          data:
          // name : $store.state.cache.cart.getName,
          {
            // guestNum: (gue) => (gue.orGuestNum.value !=='' ? 15 : 12),
            guestNum: guestNumber,
            date: dateInGermany.value,
            time: time.value,
            name: user.value.name,
            mobil: user.value.mobil,
            note: user.value.note,
            status:2,
          },
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(() => {
            $q.notify({
              message: "Thank You",

              color: "positive",
              avatar: "/img/trangTi.png",
            });

            router.replace("/thank");
          })
          .catch((err) => {
            console.log(err);
          });
      },
      // input validation
      adresseRules: [
        (val) =>
          (val !== null && val !== "" && !!val) ||
          "Please write your adresse!!",
      ],
      mobilRules: [
        (val) =>
          (val !== null && val !== "" && !!val && val.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{5})$/g)) ||
          "Please write a correct mobil",
        (val) =>
          (val.includes(0) && !!val) || "A Mobil nummer must start with a  0",

      ],
      //end Input validation
    };
  },
};
</script>
<style>
.hoverButton:hover {
  background-color: #4caf50;
  /* Green */
  color: white;
}
</style>
