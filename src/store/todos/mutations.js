export const SET_CUSTOMER = (state, customer) => {
  console.log("SET_Customers")
  state.customers = customer
}
export const addNewTodo = (state, payload) => {
  console.log("SET_NewTodo",payload)
  state.todos.push({name: payload})
  console.log("state Todos ",state.todos)
}
