// REDUX STORE
import { createStore, applyMiddleware, combineReducer } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import logger from 'redux-logger'
import userReducer from './reducers/todo'
import userSaga from './sagas/todo'

function* saga() {
    yield all([todosSaga()]) 
  }
  
  export const store = () => {
   const sagaMiddleware = createSagaMiddleware()
   const store = createStore(combineReducer({todos: todosReducer}), 
   applyMiddleware(sagaMiddleware, logger)) 
   sagaMiddleware.run(saga)
   return store;
  }