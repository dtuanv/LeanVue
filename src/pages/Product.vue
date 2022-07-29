<template>
<div class="text-h4 flex flex-center">Our Product</div>
  <q-page class="" >
    <!-- content -->

    <q-card class="flex inline shadow-15 flex-center"
      style="max-width:12rem">

      <q-card-section>
         <div class="text-h4 text-grey-9">Corn</div>
         <div class="text-subtitle2 flex flex-center" >Viet Nam</div>
      </q-card-section>

        <q-img  src="/img/corn.jpg" alt="Corn Foto"/>

      <q-seperator inset/>
      <q-card-section>
     Vietnam has turned to imports of corn as a feed ingredient to support the level of meat production,
      which increased nearly 30 percent in the last decade.
      Vietnam is by far the largest importer of corn in Southeast Asia and USDA
      forecasts it to be the fifth-largest importer globally in 2021/22.
      </q-card-section>
      <!-- Rating -->
      <q-card-section>
       <q-rating
        v-model="ratingModel"
        :max="5"
        size="2em"
        :color="ratingModel > 3 ? 'light-green-7' : 'yellow-9'"
        icon="emoji_emotions"
      />
      </q-card-section>
      <!-- action -->
      <q-card-section>

      <q-card-actions vertical >
       <q-ajax-bar color="green-7"/>
        <q-btn label="Chose" @click="getTodos" />
        <q-btn label="Read More"/>
      </q-card-actions>
      </q-card-section>

    </q-card>
    <!-- Dragon Fruit -->

  </q-page>
</template>

<script>
import {ref} from 'vue'
import axios from 'axios'
export default {
  // name: 'PageName',
  setup(){
    const ratingModel = ref(3)

    const getTodos = () => {
      return axios.get('http://todo-api.quasarcast.com/todos')

    }
      return {
      ratingModel,
      getTodos,
    }

  }

}
</script>
<style lang="css">
</style>
