import { v4 as generateUid } from 'uuid';

export function addPerson(person) {
  const id = generateUid()
  return {
    type: 'ADD_PERSON_REQUEST',
    person: { ...person, id},
    meta: {
      offline: {
        // the network action to execute:
        effect: { url: 'https://reqres.in/api/users', method: 'POST', body: JSON.stringify(person) },
        // action to dispatch when effect succeeds:
        commit: { type: 'ADD_PERSON_SUCCESS', meta: { id } },
        // action to dispatch if network action fails permanently:
        rollback: { type: 'ADD_PERSON_ROLLBACK', meta: { id } }
      }
    }
  };
}

export function deletePerson(person) {
  return {
    type: 'DELETE_PERSON',
    person,
  };
}
