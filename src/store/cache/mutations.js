export const SET_PRODUCT= (state, product) => {
  // console.log("SET_Product")
  state.products = product
  // console.log("product in mutation ", state.products )
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
export const CHECK_OUT = (state) =>{
  // console.log("Check Out")
  return state.cart = []
}
export const CHANGE_GUEST_NUM = (state, orGuestNum) =>{
  // console.log("change in mutation")
  state.guestNum = orGuestNum
  // console.log( state.guestNum )
  return
}
export const CHANGE_STATUS = (state, key,input) =>{
 let reservationIcon= state.reservations.find(re => {
    return re.key === key
  })

  if(reservationIcon && input !=''){


    reservationIcon.status = true
  }

}
export const RESET_STATUS = (state) =>{
   state.guestInfo = {
    guestNum:0,
    orGuestNum:'' }

  // let  updateStatus = state.reservations.find(re =>{
  //     return re.icon==='east'
  //   })
  //   if(updateStatus){
  //     updateStatus.status = false
  //   }
  state.reservations.forEach(re =>{
    re.status = false
  })

}

