<template>
  <div class="flex justify-center">
  <div class="">Todos list :</div>
</div>

<Todo v-for="(todo,index) in todos" :key="index" :todo="todo" ></Todo>
<!-- <TodoForm v-for="(todo,index) in todos" :key="index" :todo="todo" class="flex justify-center"></TodoForm> -->
<TodoForm v-for="(todo,index) in $store.state.todos.todos" :key="index" :todo="todo" class="flex justify-center"></TodoForm>
<q-input v-model="newTodoItem" square outlined  label="Add ToDo" />
<q-btn @click="addNewTodoItem()" label="Submit" color="positive" class="float-right"></q-btn>
<Customer v-for="(customer,index) in customers" :key="index" :customer="customer">

</Customer>

  <div>{{$store.state.todos.todos}}</div>
</template>

<script>
  import { useStore } from 'vuex';
import { ref, computed, nextTick } from "vue";


  import Todo from "../storeTest/Todo.vue";
  import TodoForm from "../storeTest/TodoForm.vue";
  import Customer from "../storeTest/Customer.vue";
  const $store = useStore()
  import { mapGetters } from "vuex";
  export default{
    data(){
      return{
         newTodoItem : ""
      };
    },
    components:{
      Todo,TodoForm,Customer,
    },
    methods:{
        // addNewTodoItem(){
        //   this.$store.commit("todos/addNewTodo",this.newTodoItem);
        // }
        addNewTodoItem(){
          this.$store.dispatch("todos/addNewTodo",this.newTodoItem);
        }
    },
    computed:{
      // todos(){
      // console.log("Store ",$store.state.todos)
      // return  $store.state.todos;
      // ...mapGetters("todos", ["todos"]),
      // todo(){

      //  return JSON.parse(JSON.stringify(cachedTodo))

      // }


    },
    mounted(){
      this.$store.dispatch('todos/getCustomer');

    },
    setup(){
  const $store = useStore()
      const cachedTodo = $store.getters['todos/getTodos']

      // console.log("todos ",cachedTodo)
      // console.log("todos json ",JSON.parse(JSON.stringify(cachedTodo)))
      // const cachedCustomer = $store.getters['todos/getCustomer']
      const todos = JSON.parse(JSON.stringify(cachedTodo))
      // const customers = JSON.parse(JSON.stringify(cachedCustomer))


      	console.log("Todos Stringiftify: ", todos)
      const customers = computed({
      get: () => $store.state.todos.customers,
      set: val => {
        $store.commit('todos/SET_CUSTOMER', val)
      }
    })
    // const newItem = computed({
    //   get: () => $store.state.todos.todos,
    //   set: val => {
    //     $store.commit('todos/addNewTodo', val)
    //   }
    // })
      return{
    //     addNewTodoItem(){
    //   return newItem;
    // },

        // newTodoItem,
        // customers(){
        // return customers
        // },
        todos,
        customers,
      }
    }
    }


</script>
