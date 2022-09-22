export const SET_PRODUCT= (state, product) => {
  console.log("SET_Product")
  state.products = product
  console.log("product in mutation ", state.products )
  // console.log("product in mutation per String",  JSON.parse(JSON.stringify(state.products)) )
}
// export const addNewTodo = (state, payload) => {
//   console.log("SET_NewTodo",payload)
//   state.todos.push({name: payload})
//   console.log("state Todos ",state.todos)
// }
export const ADD_TO_CART = (state, { product, quantity}) => {
  let productInCart = state.cart.find(item => {
    return item.product.id === product.id;
  })
  if(quantity ===0 ){
    return;
  }
  if(productInCart){
    productInCart.quantity += quantity
    return;
  }
  state.cart.push({ product, quantity})

}
export const REMOVE_FROM_CART = (state, product) => {
 state.cart = state.cart.filter((item) => {
  return item.product.id !== product.id


  })
}
