<template>
  <div class="q-pa-md">
    <div class="text-h4 flex justify-center">Reservation</div>
    <q-dialog v-model="dialog_time">
      <q-card>
        <q-card-section>
          <div class="text-h4 flex justify-center">Time</div>
        </q-card-section>
        <q-card-actions>
          <div v-for="(time, index) in times" :key="index">
            <q-item>
              <q-btn class="q-ml-md" @click="chooseTime(time)">{{
                time.label
              }}</q-btn>
            </q-item>
            <div></div>
          </div>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-input filled v-model="date" mask="date" :rules="['date']">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="formattedString">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
    <div>
      <q-btn icon="timer" @click="dialog_time = true"></q-btn>
    </div>
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

import { useQuasar } from "quasar";
import { date } from "quasar";
export default {
  methods: {
    chooseTime(time) {
      console.log(time.value);
    },
  },
  setup() {
    const $store = useStore();


    const $q = useQuasar();
    const today = Date.now();
    const formattedString = date.formatDate(today, 'DD-MM-YYYY')
console.log(formattedString);
      function todayInJasmin(){
        const datum = today.getDate();
        return datum + ""
      }
    const router = useRouter();
    // const date = ref("2019/03/01");

    const proxyDate = ref("2019/03/01");


    const times = computed({
      get: () => $store.state.cache.times,
    });

    return {
      dialog_time: ref(false),
      // date,
      formattedString,
      proxyDate,
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
