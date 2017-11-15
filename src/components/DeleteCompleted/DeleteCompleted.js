import PropTypes from 'prop-types'
import React from 'react'

import withItems from '../../enhancers/withItems'
import Button from '../Button'

export const DeleteCompleted = props => {
  return props.items.some(item => item.completed)
    ? (
      <Button className='DeleteCompleted' onClick={props.deleteCompleted}>
        Remove Completed
      </Button>
    )
    : null
}

DeleteCompleted.displayName = 'DeleteCompleted'

DeleteCompleted.propTypes = {
  deleteCompleted: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default withItems(DeleteCompleted)
