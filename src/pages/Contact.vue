<template>
  <q-page padding>
    <!-- content -->
    <div class="text-h4 flex-center flex" >Wellcome to Contact Page</div>

      <q-diaglog :model-value="true" >
      <q-card
      style="max-width:350px">
        <q-toolbar class="bg-secondary text-white" >
          <q-toolbae-title>More info...</q-toolbae-title>
          <q-btn class="absolute-right"
           v-close-popup
          flat
          round
          icon="close"/>
        </q-toolbar>
        <q-card-section>
          Vietnam is a country located in Southeastern Asia bordering the Gulf of Thailand,
          the Gulf of Tonkin, and the South China Sea. Neighboring countries include Cambodia, China, and Laos.
          The geography consists of hills and densely forested mountains in the northwest.
           The government system is a communist state; the chief of state is the president,
           and the head of government is the prime minister.
        </q-card-section>
      </q-card>

      </q-diaglog>
    <q-banner

    style="max-width:350px "
    class="bg-primary text-white float-right" >
      <template #avatar> <q-icon name="warning"/></template>
      <template #action> <q-btn flat v-close-popup>Clear</q-btn> </template>
       May be hier have error !!!
    </q-banner>


  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
