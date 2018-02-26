// reducers/people.js
import { ADD_PERSON_REQUEST, ADD_PERSON_SUCCESS, ADD_PERSON_ROLLBACK, DELETE_PERSON } from '../constants';

const initialState = { '1': { id: '1', name: 'Chris', job: 'Developer', synced: true } }

export default function peopleReducer(state = initialState, action) {
  let new_state = { ...state }
  switch (action.type) {
    case ADD_PERSON_REQUEST:
      return {
        ...state, 
        [action.person.id]: {
          ...action.person,
          synced: false
        }
      };
      return state

    case ADD_PERSON_SUCCESS:
      delete new_state[action.meta.id]

      return {
        ...new_state,
        [action.payload.id]: {
          ...action.payload,
          synced: true
        }
      }

    case ADD_PERSON_ROLLBACK:
      delete new_state[action.id]
      
      return new_state

    case DELETE_PERSON:
      delete new_state[action.person.id]

      return new_state
    default:
      return state;
  }
}
