import PropTypes from 'prop-types'
import React from 'react'

import TodoItem from '../TodoItem'

const TodoList = props => {
  return (
    <div className='TodoList'>
      {
        props.items.map((item, index) => {
          return (
            <TodoItem
              item={item}
              key={index}
              onClick={() => props.toggleCompleted(index)}
            />
          )
        })
      }
    </div>
  )
}

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleCompleted: PropTypes.func.isRequired
}

export default TodoList
