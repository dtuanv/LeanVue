<template>
  <q-page padding>
    <div class="q-pa-md">
      <div class="float-right">
        <q-input
          filled
          dense
          place
          label="Search"
          style="width: 200px"
          v-model="filter"
        >
        </q-input>
      </div>
      <q-table :columns="columns" :rows="rows" :filter="filter">
        <template v-slot:top-right>
          <q-btn
            label="Customer hinzufügen"
            color="positive"
            class="float-right"
            dense
            to="customer/0"
          >
          </q-btn>
        </template>
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <q-btn
              @click="editRow(props)"
              icon="edit"
              color="primary"
              dense
              flat
            ></q-btn>
            <q-btn
              dense
              flat
              @click="deleteRow(props)"
              icon="delete_forever"
              color="negative"
            >
            </q-btn>
          </q-td>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import axios from "axios";
import { useQuasar } from "quasar";
import { useRoute, useRouter } from "vue-router";

const columns = [
  { name: "firstName", label: "First Name", field: "firstName" },
  { name: "lastName", label: "Last Name", field: "lastName" },
  { name: "gender", label: "Gender", field: "gender" },
  { name: "email", label: "Email", field: "email" },
  { name: "actions", label: "Action", field: "" },
];
const rows = ref([]);
const filter = ref("");

export default {
  // name: 'PageName',
  setup() {
    const $q = useQuasar();
    const route = useRoute();
    const router = useRouter();

    axios
      .get("http://localhost:8686/customer")
      .then((response) => {
        rows.value = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("axios");
    console.log(rows);
    return {
      columns,
      rows,
      filter,
      deleteRow(props) {
        console.log("props ", props),
          console.log(
            "http://localhost:8686/customer/" + props.row.customerId + "/"
          ),
          $q
            .dialog({
              dark: true,
              title: "confirm",
              message: "Would you like to delete this Customer?",
              cancel: true,
              persistent: true,
            })
            .onOk(() => {
              axios
                .delete(
                  "http://localhost:8686/customer/" + props.row.customerId
                )
                .then((response) => {
                  rows.value.splice(this.rows.indexOf(props.row), 1);
                  $q.notify({
                    message: "customer deleted!",
                    color: "positive",
                    avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
                  });
                });
            })
            .onCancel(() => {
              $q.notify({
                message: "Cancel!",
                color: "negative",
                avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
              });
            });
      },
    };
  },
  methods: {
    editRow(props) {
      this.$router.push("./customer/" + props.row.customerId + "/");
      console.log("click edit Row ", props.row.customer_id);
    },
  },
};
</script>
