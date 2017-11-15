import { ADD_TODO } from '../actions/addTodo'
import { DELETE_COMPLETED } from '../actions/deleteCompleted'
import { TOGGLE_COMPLETED } from '../actions/toggleCompleted'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]

    case DELETE_COMPLETED:
      return state.filter(item => !item.completed)

    case TOGGLE_COMPLETED:
      return state.map((item, index) => {
        return index === action.payload
          ? {...item, completed: !item.completed}
          : item
      })

    default:
      return state
  }
}
