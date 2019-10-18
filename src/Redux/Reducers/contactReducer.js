import { CONTACT_INFO, CONTACT_ERROR, GET_CONTACTS } from '../Actions/types';
// import axios from 'axios';
const initialState = {
  contacts: [],
  contact: null,
  error: {},
  loading: true
}

export default function(state = initialState, action){
  const { type, payload } = action;
  switch(type){
    case CONTACT_INFO:
      return {
        ...state,
        contcat: payload,
        loading: false
      };
      case GET_CONTACTS:
        return {
          ...state,
          contacts: payload,
          loading: false
        };
        case CONTACT_ERROR:
          return {
            ...state,
            error: payload,
            loading: false
          }
        default:
          return state;
  }
}