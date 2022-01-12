//REDUCER
import { REQUEST_API_DATA, RECEIVE_API_DATA } from '../actions/todo'

export default (state = {}, { type, payload }) => {
  switch (type) {
    case RECEIVE_API_DATA:
      return payload.todos
    default:
      return state
  }
}