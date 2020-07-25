import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_USER_PENDING,
  REQUEST_USER_SUCCESS,
  REQUEST_USER_FAILED
} from './constent';

export const stSearchField = (text)=>({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

export const gitUsers = () => (dispatch) => {
  dispatch({type: REQUEST_USER_PENDING});
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(date => dispatch({type: REQUEST_USER_SUCCESS, payload: date}))
    .catch(error => dispatch({type: REQUEST_USER_FAILED, payload: error}))
}