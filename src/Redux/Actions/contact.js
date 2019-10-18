import { CONTACT_INFO, CONTACT_ERROR, GET_CONTACTS } from './types';
import axios from 'axios';
// import { setAlert } from '../alert/alertActions'


export const contactInfo = (formData) => async dispatch => {
   try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
     const res = axios.post('/api/contact', formData, config);

     dispatch({
      type: CONTACT_INFO,
      payload: res.data
    });
    dispatch(setAlert("Thanks for contact us your Message Recived", "success"));
   } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: CONTACT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
   }
}

export const getContacts = () => async dispatch => {
  try {
    const res = await axios.get("/api/contact");

    dispatch({
      type: GET_CONTACTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CONTACT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};