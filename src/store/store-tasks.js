const state = {
  tasks: [
    { id:1,
      name:'Oanh',
      dueDate:'21/11/1998',
      gender: 'Male',
      completed: false,
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
  ]

}
const mutations = {

}
const actions = {

}
const getters = {
 tasks : (state) =>{
  return state.tasks
 }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
