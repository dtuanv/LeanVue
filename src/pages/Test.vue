<template>
  <q-page padding>
    <!-- content -->
    <div class="text-h5 flex flex-center">Test</div>
    <q-ajax-bar />
    <q-btn label="Test"> </q-btn>
    <!-- <div>{{ firstName }}</div> -->
    <!-- <pre>{{ selected }}</pre> -->
    <div >
      <div class="card " @mouseover="onLogEvent"> Mouse Over</div>
      <div class="card flex flex-center" @dblclick="onLogEvent($event,120,100)">
      <q-btn class="button" flat>Double Click</q-btn>
      </div>
      <div class="card" @mousemove="onMouseMove">Mouse Move: {{`${this.x}-${this.y}`}}</div>
    </div>
    <q-card>
      <q-card-section >
      <ul v-for="product in products"
       :product="'product'">
        <li>{{product.name}}</li>
        <li>{{product.price}}</li>

      </ul>

      </q-card-section>

    </q-card>
    <!-- <q-btn @click="changeValue" label="Change"></q-btn> -->
  </q-page>
  <!-- <div class="q-mt-md">Selected: {{ JSON.stringify(selected) }}</div> -->
  <div>Test Store </div>
  <div v-for="(todo,index) in todos" :key="index" :todo="todo">
    <div>Testt</div>
    <div>{{todo}}</div>
      <div>{{todo.title}}</div>

  </div>
</template>

<script>
let x
let y
import { computed } from 'vue'
import { useStore } from 'vuex'

const $store = useStore()
export default {

  data() {
    return {

      x : 0,
      y : 0,
      products: [
        {
          name:'Xoai',
          price: 2,
        },
        {
          name: ' Tao',
          price:1,
        },
        {
          name: 'cam',
          price:4,
        },
      ],

    }
  },
  computed: {
    todos(){
      console.log("Store ",$store.state.todos)
      return  $store.state.todos;
    }
  },


  setup(){
    return {

    }

  },
  methods: {

     onLogEvent(event,newX,newY) {
      console.log('ex',event);
      this.x = newX;
      this.y = newY;

    },
    onMouseMove(event){
      console.log("Running Mouse move",event);
      this.x = event.offsetX;
      this.y = event.offsetY;
      console.log('x:',this.x)
      console.log('y:',this.y)
      console.log('this:', this)
      return {

    }

  }



    }
  , computed: {

  // methods: {
  //   onLogEvent(count) {
  //     console.log("Running events:" + count);
  //   },

  //   //    changeValue(){
  //   //     this.firstName = 'Oanh'
  //   //    return{
  //   //      firstName,
  //   //     console.log(firstName)
  //   //   }
  // },
}
};
</script>
<style>
.card {
  width: 180px;
  height: 180px;
  display:flex;
  align-items:center ;
  justify-content: center;
  background: #dedede;
  margin-top: 30px;
}
.button:hover{
  background-color:aqua

}
</style>
