import { connect } from 'react-redux'

import addTodo from '../actions/addTodo'
import deleteCompleted from '../actions/deleteCompleted'
import toggleCompleted from '../actions/toggleCompleted'

export const mapStateToProps = state => ({
  items: state.items
})

export const mapDispatchToProps = dispatch => ({
  addTodo: newTodo => dispatch(addTodo(newTodo)),
  deleteCompleted: () => dispatch(deleteCompleted()),
  toggleCompleted: itemIndex => dispatch(toggleCompleted(itemIndex))
})

export default connect(mapStateToProps, mapDispatchToProps)
