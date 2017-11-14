import PropTypes from 'prop-types'
import React from 'react'

import './Button.css'

const Button = props => {
  const { className, ...attributes } = props
  let combinedClassName = 'Button'
  if (className) {
    combinedClassName += ' ' + className
  }
  return (
    <button
      className={combinedClassName}
      {...attributes}
    />
  )
}

Button.propTypes = {
  className: PropTypes.string
}

export default Button
