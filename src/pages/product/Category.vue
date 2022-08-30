<template>
  <div class="q-pa-md">

      <!-- make form in center -->
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4 category" >Our Category</div>
        <div class="col-4"></div>
      </div>
       </div>
      <!-- <div class="col-6"></div> -->
      <!-- <div class="col-6"></div> -->
</template>
<script >
import { ref, computed, nextTick } from "vue";
import axios from "axios";
import { useQuasar } from "quasar";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    return {

  }
},
  data() {

  },
  methods: {},

}
</script>
<style>
  .category{
    font-size: large;
    text-align: center;
  }
</style>
