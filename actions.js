import { v4 as generateUid } from 'uuid';

export function insertPerson(person) {
  return {
    type: 'INSERT_PERSON',
    person
  }
}

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

export function registerPerson(person, id) {
  return {
    type: 'REGISTER_PERSON_REQUEST',
    person,
    meta: {
      offline: {
        // the network action to execute:
        effect: { url: 'https://reqres.in/api/register', method: 'POST', body: JSON.stringify({email: person.name, password: person.name+'123'}) },
        // action to dispatch when effect succeeds:
        commit: { type: 'REGISTER_PERSON_SUCCESS', meta: { id } },
        // action to dispatch if network action fails permanently:
        rollback: { type: 'REGISTER_PERSON_ROLLBACK', meta: { id } }
      }
    }
  }
}

export function deletePerson(person) {
  return {
    type: 'DELETE_PERSON',
    person,
  };
}
