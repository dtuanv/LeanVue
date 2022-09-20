const state = {
  tasks: [
    { id:1,
      name:'Oanh',
      dueDate:'21/11/1998',
      gender: 'Male',
      completed: true,
    },
    {id:2,
      name:'Tuan',
      dueDate:'12/05/2000',
      gender: 'Male',
      completed: false,
    },
    {
      id: 3,
      name:'Dung',
      dueDate :'06/05/2011',
      gender:'Male',
      completed:false,
    }
  ],
  todos : [
    {
      title: 'Tuan title from store',
      name: 'todo of Tuan',
      completed:false,

    },
    {
      title:'Oanh title from store',
      name:'todo of Oanh',
      completed:false,

    },
  ]

}
const mutations = {
  NEW_TODO({state}, todoItem){
    state.todos.push({
      title: todoItem,
      completed: false
    })
  }
}
const actions = {
  addNewTodo({commit}, todoItem){
    commit('NEW_TODO', todoItem);
  },
  updateTask(){
    // task.completed = !task.completed
    console.log("update Task")
  },

}
const getters = {
 tasks : (state) =>{
  return state.tasks
 },
 todos : (state) =>{
  return state.todos
 }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
