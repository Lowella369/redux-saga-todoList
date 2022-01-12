//SAGA
import axios from 'axios'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { REQUEST_API_DATA, RECEIVE_API_DATA } from '../actions/todo'

function* todoList(action) {
  try {
    const { data } = yield call(axios.get, 'https://jsonplaceholder.typicode.com/todos/1')
    yield put({ type: RECEIVE_API_DATA, payload: { todos: data } })
  } catch (e) {
    console.log(e.message)
  }
}
export default function* todosSendAll() {
  yield takeLatest(REQUEST_API_DATA, getApiData)
}