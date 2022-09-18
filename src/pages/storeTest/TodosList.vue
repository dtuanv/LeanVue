<template>
  <div class="flex justify-center">
  <div class="">Todos list :</div>
</div>

<Todo v-for="(todo,index) in todos" :key="index" :todo="todo" ></Todo>
<TodoForm v-for="(todo,index) in todos" :key="index" :todo="todo" class="flex justify-center"></TodoForm>
<q-input v-model="newTodoItem" square outlined  label="Add ToDo" />
<q-btn @click="addNewTodoItem()" label="Submit" color="positive" class="float-right"></q-btn>
</template>

<script>
  import { useStore } from 'src/store';
  import Todo from "../storeTest/Todo.vue";
  import TodoForm from "../storeTest/TodoForm.vue";
  // const $store = useStore()
  import { mapGetters } from "vuex";

  export default{
    data(){
      return{
        newTodoItem : ""
      };
    },
    components:{
      Todo,TodoForm,
    },
    methods:{
        addNewTodoItem(){
          this.$store.dispatch("addNewTodo",this.newTodoItem);
        }
    },
    computed:{
      // todos(){
      // console.log("Store ",$store.state.todos)
      // return  $store.state.todos;
      ...mapGetters("todos", ["todos"]),
    },
    setup(){

      return{
        // newTodoItem,
      }
    }
    }


</script>
