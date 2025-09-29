import {
  CLEAR_CONTACT,
  CREATE_CONTACT,
  DELETE_CONTACT,
  DELETE_SELECTED_CONTACT,
  EDIT_CONTACT,
  GET_CONTACT,
  SELECT_CONTACT
} from '../constant/type'

//adding new contact
export const addContact = (contact) => ({
  type: CREATE_CONTACT,
  payload: contact
})

//geting contact with id to perform diff actions on them
export const getContact = (id) => ({
  type: GET_CONTACT,
  payload: id
})

//updating contact
export const editContact = (payload) => ({
  type: EDIT_CONTACT,
  payload
})

//deleting contact
export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: {id}
})

//selecting all the contects
export const selectAllContact = (id) => ({
  type: SELECT_CONTACT,
  payload: id
})

//deletng all the contact
export const clearSection = () => ({
  type: CLEAR_CONTACT
})

//delete selected contacts
export const deleteSlectedContact = () => ({
  type: DELETE_SELECTED_CONTACT,
})