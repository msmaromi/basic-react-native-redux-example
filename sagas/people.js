import { put } from 'redux-saga/effects'
import { addPerson, registerPerson } from '../actions'

export function * insertPerson(action) {
  const { person } = action
  const response = yield put.resolve(addPerson(person))
  yield put.resolve(registerPerson(response, person.id))
}