<template>
  <div class="text-h4 flex flex-center">Our Product</div>
  <q-page>
    <!-- content -->
    <div class="q-pa-md row items-stretch">
      <q-card
        class="flex inline shadow-5 flex-center size card"
        v-for="product in products"
        :product="product"
      >
        <q-card-section>
          <div class="text-h4 text-grey-9">{{ `${product.name}` }}</div>
          <div class="text-subtitle2 flex flex-center">Viet Nam</div>
        </q-card-section>
        <q-card-section>
          <q-icon
            class="icon"
            size="2rem"
            v-if="product.isSelected"
            name="done"
          ></q-icon>
        </q-card-section>

        <q-img :src="product.img" :alt="product.name" />

        <q-seperator inset />
        <q-card-section>
          {{ product.decription }}
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
          <q-card-actions vertical>
            <q-ajax-bar color="green-7" />
            <q-btn label="Select" @click="displayStatus($event, product)" />
            <q-btn label="Chose" @click="getTodos" />
            <q-btn label="Read More" />
          </q-card-actions>
        </q-card-section>
      </q-card>
      <!-- Dragon Fruit -->
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
export default {
  // name: 'PageName',
  data() {
    return {
      products: [
        {
          name: "Corn",
          img: "/img/corn.jpg",
          decription:
            "Vietnam has turned to imports of corn as a feed ingredient to support the level of meat production," +
            "which increased nearly 30 percent in the last decade.",
          isSelected: false,
        },
        {
          name: "Rice",
          img: "/img/ricevn.jpg",
          decription: "Rice ",
          isSelected: false,
        },
      ],
    };
  },
  setup() {
    const ratingModel = ref(3);

    const getTodos = () => {
      return axios.get("http://todo-api.quasarcast.com/todos");
    };
    return {
      ratingModel,
      getTodos,
    };
  },
  methods: {
    displayStatus(event, product) {
      product.isSelected = !product.isSelected;
      console.log("Selected", product.isSelected);
    },
  },
  computed: {},
};
</script>
<style lang="css">
.card {
  border: 1px solid #ccc;
  margin-right: 10px;
  margin-bottom: 10px;
}
.size {
  height: 50rem;
  max-width: 12rem;
}
.icon {
  position: absolute;
  bottom: 3rem;
  color: green;
}
</style>
