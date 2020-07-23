import { CHANGE_SEARCH_FIELD } from './constent';

export const stSearchField = (text)=>({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})