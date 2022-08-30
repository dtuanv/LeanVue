<template>
  <div class="q-pa-md">

      <!-- make form in center -->
      <div class="">
        <h4 >Add Category</h4>
        <q-form class=" row q-gutter-md" >

            <q-input
              standout="bg-teal text-white"
              v-model="name"
              label="Name"
              class="col-8"
            />
            <q-input
              standout="bg-teal text-white"
              v-model="imageUrl"
              label="Image Url"
              class="col-8"
            />
            <q-input label="Decription" v-model="decription" filled autogrow class="col-8" />
          <q-btn
            color="primary"
            type="submit"
            @click="addCategory()"
            icon="cloud_upload"
          />
        </q-form>
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
      name: ref(""),
      decription: ref(""),
      imageUrl: ref(""),
      addCategory() {
        console.log("click on Submit", this.name);
        console.log("click on Submit", this.imageUrl);
        const Category = {
          name: this.name,
          decription: this.decription,
          imageUrl: this.imageUrl,
        };
        axios({
          method: "post",
          url: "http://localhost:8686/admin/category/add",
          data: JSON.stringify(Category),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(() => {
            $q.notify({
              message:'new Category was created',

              color:'positive',
              avatar:'/img/trangTi.png',
            })
            console.log("Category saved");
            router.replace("/customer");
          })
          .catch((err) => {
            console.log(err);
          });
      },
    };
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
