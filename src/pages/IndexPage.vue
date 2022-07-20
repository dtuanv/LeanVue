<template>
  <q-page class="flex flex-center">
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
          name:'Oanh',
          dueDate:'21/11/1998',
          gender: 'male'
        },
        {
          name:'Tuan',
          dueDate:'12/05/2000',
          gender: 'male'
        },
        {
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
