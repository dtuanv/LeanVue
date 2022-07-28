<template>
  <q-page class="flex flex-center">
    <h3>Wellcome to a App of Tuan</h3>
    <task v-for="task in tasks"
      :task="task">
    </task>


  </q-page>
</template>

<script>
// import { defineComponent } from 'vue'

export default {
  // name: 'IndexPage'
  data (){
    return {
      tasks: [
        {
          id:1,
          name:'Oanh',
          dueDate:'21/11/1998',
          gender: 'male'
        },
        {
          id: 2,
          name:'Tuan',
          dueDate:'12/05/2000',
          gender: 'male'
        },
        {
          id :3 ,
          name:'Dung',
          dueDate :'06/05/2011',
          gender:'male'
        }
      ]
    }

  },
  components: {
    'task': require('components/Task.vue').default
  }
}
</script>
