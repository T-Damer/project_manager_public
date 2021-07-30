import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from 'store/reducers/rootReducer'
import thunk from 'redux-thunk'
import {
  reduxFirestore,
  getFirestore,
  createFirestoreInstance,
} from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'

import { fbConfig } from 'helpers/fbConfig'
import firebase from 'firebase/app'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    // TODO: #2 typeof firebase doesn't fit the reduxFirestore typeof
    // I think, we must use any other method or fix source code
    reduxFirestore(firebase as any, fbConfig as any)
  )
)

const config = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  attachAuthIsReady: true,
}

// TODO: #8 We must use :ReactReduxFirebaseProviderProps
const rrfProps: any = {
  firebase,
  config,
  dispatch: store.dispatch as any,
  createFirestoreInstance,
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
