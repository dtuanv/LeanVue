<template>
  <q-page class="q-pa-md">
    <p class="settingPage">Welcome To Setting Page</p>
    <q-list bordered separator>
      <q-item
        v-for="(task, key) in tasks"
        :task="task"
        :key="key"
        clickable
        @click="task.completed = !task.completed"
        :class="!task.completed ? 'bg-orange-2' : 'bg-green-3'"
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.name }} </q-item-label>
        </q-item-section>
        <q-item-section>
          <div>{{ task.gender }}</div>
        </q-item-section>

        <q-item-section side>
          <div class="row">
            <q-icon name="event" size="1rem" color="yellow" class="q-mr-xs" />

            <div class="column">
              <q-item-label caption> {{ task.dueDate }}</q-item-label>
            </div>
          </div>
        </q-item-section>
      </q-item>
    </q-list>

       <!-- table -->
    <!-- <q-card-section class="q-pa-md flex flex-center"> -->
    <q-table
      title="TestTable"
      separator="cell"
      row-key="id"
      class="flex flex-center"
      :pagination="{
        sortBy: 'name',
        rowsPerPage: 3,
        page: 1,
      }"
      :rows="[
        {
          id: 1,
          name: 'Tuan',
          age: 22,
          email: 'TuTest@gmail.com',
        },
        {
          id: 2,
          name: 'Oanh',
          age: 24,
          email: 'OaTest@gmail.com',
        },
        {
          id: 3,
          name: 'Dung',
          age: 11,
          email: 'DuTest@gmail.com',
        },
        {
          id: 4,
          name: 'Nam',
          age: 25,
          email: 'naTest@gmail.com',
        },
      ]"
      :columns="[
        {
          name: 'expand',
          label: 'Expand',
          field: 'expand',
          align: 'center',
        },
        // {
        //   name: 'id',
        //   label: 'Identification',
        //   field: 'id',
        //   // align: 'left',
        //   sortable: true,
        // },
        {
          name: 'name',
          label: 'Name',
          field: 'name',
          sortable: true,
        },
        {
          name: 'email',
          label: 'Email',
          field: 'email',
          sortable: true,
        },
        {
          name: 'age',
          label: 'Age',
          field: 'age',
          sortable: true,
        },
      ]"
    >
      <template #body="props">
        <q-tr :props="props">
          <q-td>
            <q-btn
              icon="add"
              round
              flat
              @click="props.expand = !props.expand"
            />
          </q-td>
          <!-- <pre>{{props}}</pre> -->
          <q-td key="name" :props="props">{{ props.row.name }}</q-td>

          <q-td key="email" :props="props">{{ props.row.email }}</q-td>
          <q-td key="age" :props="props">{{ props.row.age }}</q-td>
        </q-tr>
        <q-tr v-show="props.expand">
          <q-td colspan="100%" class="text-center"> Expanded</q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  // name: 'IndexPage'
  computed: {
    ...mapGetters("tasks", ["tasks"]),
  },
};
</script>

<style>
.settingPage {
  text-align: center;
}
</style>
