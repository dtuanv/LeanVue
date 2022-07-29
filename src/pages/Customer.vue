<template>
  <q-page class="q-pa-md">
      <p class="settingPage">Welcome To Setting Page</p>
  <q-list bordered
      separator>
    <q-item v-for="(task,key) in tasks"
          :task="task"
          :key="key"
          clickable
          @click= 'task.completed = !task.completed'
          :class="!task.completed ? 'bg-orange-2' : 'bg-green-3'"



            >

      <q-item-section side top>
      <q-checkbox v-model="task.completed" />
       </q-item-section>
       <q-item-section>
        <q-item-label>{{task.name}} </q-item-label>
       </q-item-section>
       <q-item-section>
       <div>{{task.gender}}</div>
       </q-item-section>


   <q-item-section side >
    <div class="row ">
        <q-icon name="event"
                size=1rem
                color="yellow"
                class="q-mr-xs" />

      <div class="column " >
          <q-item-label caption> {{task.dueDate}}</q-item-label>
        </div>
         </div>
        </q-item-section>

</q-item>
</q-list>
  </q-page>
</template>
<script>

import { mapGetters } from 'vuex'

export default {
  // name: 'IndexPage'
computed: {
  ...mapGetters('tasks', ['tasks'])
}

}
</script>

<style>
.settingPage{
  text-align: center;
}
</style>
