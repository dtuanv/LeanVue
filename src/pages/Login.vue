<template>
  <q-page padding>
    <!-- content -->
    <div class="text-h5 flex flex-center">Login</div>
    <q-ajax-bar />
    <q-btn label="Test"> </q-btn>
    <pre>{{ selected }}</pre>


  </q-page>
  <!-- <div class="q-mt-md">Selected: {{ JSON.stringify(selected) }}</div> -->
</template>

<script>
import { ref } from "vue";
export default {
  // name: 'PageName',
  setup() {
    const selected = ref();
    return {
      selected,
    };
  },
};
</script>
