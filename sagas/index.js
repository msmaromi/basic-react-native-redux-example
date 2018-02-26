import { takeEvery, all } from 'redux-saga/effects'

import { insertPerson } from './people'

export default function * root () {
  yield all([
   takeEvery('INSERT_PERSON', insertPerson)
  ])
}