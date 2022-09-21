import axios from 'axios'
export const getCustomer = ({commit}) => {
  axios
  .get("http://localhost:8687/customer")
  .then((response) => {
   commit('SET_CUSTOMER', response.data)
  });

}
export const addNewTodo =({commit}, payload) => {
  commit('addNewTodo', payload)
}
