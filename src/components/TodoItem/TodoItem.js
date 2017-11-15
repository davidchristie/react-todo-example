import PropTypes from 'prop-types'
import React from 'react'

import './TodoItem.css'

const TodoItem = props => {
  let className = 'TodoItem'
  if (props.item.completed) {
    className += ' completed'
  }
  return (
    <div className={className} onClick={props.onClick}>
      {props.item.text}
    </div>
  )
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func
}

export default TodoItem
