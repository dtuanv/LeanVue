<template>
  <q-page>
      <p class="settingPage">>Welcome To Setting Page</p>
    <q-item v-for="task in tasks"
          :task="task"
          :key="id"
          @click= 'tast.completed = !task.completed'
            v-ripple>

      <q-item-section side top>
      <q-checkbox v-model="task.completed" />
       </q-item-section>
      <q-item-label>{{task.name}}
        <div>{{task.dueDate}}</div>
        <div>{{task.gender}}</div>
      </q-item-label>


</q-item>
  </q-page>
</template>
<script>
// import { defineComponent } from 'vue'

export default {
  // name: 'IndexPage'
  data (){
    return {
      tasks: [
        { id:1,
          name:'Oanh',
          dueDate:'21/11/1998',
          gender: 'male',
          completed: false,
        },
        {id:2,
          name:'Tuan',
          dueDate:'12/05/2000',
          gender: 'male',
          completed: false,
        },
        {
          id: 3,
          name:'Dung',
          dueDate :'06/05/2011',
          gender:'male',
          completed:false,
        }
      ]
    }

  },
  components: {
    'task': require('components/Task.vue').default
  }
}
</script>

<style>
.settingPage{
  text-align: center;
}
</style>
