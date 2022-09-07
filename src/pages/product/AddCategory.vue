<template>
  <div class="q-pa-md">

      <!-- make form in center -->
      <div class="">

        <q-form  >

          <div class="justify-center flex text-h5 	q-mb-lg">Add Category</div>
    <!-- content -->
    <div class="q-gutter-md edit_category  " style="max-width: 500px">

      <q-input filled v-model="name" label="Name" />
      <q-input filled v-model="imageUrl" label="Image Url" />
      <q-input filled v-model="decription" label="Decription" />

      <q-btn
            color="primary"
            type="submit"
            @click="addCategory()"
            icon="cloud_upload"
          />
     </div>

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
<style>
    .edit_category{
    max-width: 500px;
    text-align: center;
    display: block;
    margin-inline: auto;
  }
</style>
