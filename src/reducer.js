import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_USER_PENDING,
  REQUEST_USER_SUCCESS,
  REQUEST_USER_FAILED
} from './constent';

const initalState = {
  searchField: ''
}

export const searchUser = (state=initalState, action={})=>{
  switch(action.type){
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload }
    default:
      return state;
  }
}

const initalStateUser = {
  isPending: false,
  user: [],
  error: ''
}

export const requestUser = (state=initalStateUser, action={}) => {
  switch(action.type){
    case REQUEST_USER_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_USER_SUCCESS:
      return Object.assign({}, state, {user: action.payload, isPending: false})
    case REQUEST_USER_FAILED:
      return Object.assign({}, state, {error: action.payload, isPending: false})
    default:
      return state;
  }
}