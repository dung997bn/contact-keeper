import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Kirin',
        email: 'kirin@gmail.com',
        phone: '0944343436',
        type: 'professional'
      },
      {
        id: 2,
        name: 'Dung',
        phone: '0934344343',
        email: 'dung@gmail.com',
        type: 'personal'
      }
    ]
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add Contact

  //Delete Contact

  //Set Curent Contact

  //Clear Current Contact

  //Update Contact

  //Filter Contact

  //Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
