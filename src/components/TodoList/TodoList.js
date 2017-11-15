import PropTypes from 'prop-types'
import React from 'react'

import withItems from '../../enhancers/withItems'
import TodoItem from '../TodoItem'

export const TodoList = props => {
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

TodoList.displayName = 'TodoList'

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleCompleted: PropTypes.func.isRequired
}

export default withItems(TodoList)
