import axios from 'axios'
export const getProduct = ({commit}) => {
  axios
  .get("http://localhost:8687/product")
  .then((response) => {
   commit('SET_PRODUCT', response.data)
  });

}

// export const addNewTodo =({commit}, payload) => {
//   commit('addNewTodo', payload)
// }
export const addProductToCart = ({commit}, { product, quantity}) => {
  commit('ADD_TO_CART', { product, quantity})
}
export const removeProductFromCart = ({commit})
