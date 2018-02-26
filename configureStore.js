// configureStore.js

import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'remote-redux-devtools';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = composeWithDevTools({ realtime: true, port: 8383 });
export default function configureStore() {
  let store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware), offline(offlineConfig)))
  sagaMiddleware.run(rootSaga)

  return store
}