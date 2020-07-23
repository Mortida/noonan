import { CHANGE_SEARCH_FIELD } from './constent';

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