// configureStore.js

import { createStore } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import rootReducer from './reducers'

const composeEnhancers = composeWithDevTools({ realtime: true, port: 8383 });
export default function configureStore() {
  let store = createStore(rootReducer, composeEnhancers(offline(offlineConfig)))
  return store
}