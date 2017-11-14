import PropTypes from 'prop-types'
import React from 'react'

import './AddTodo.css'

class AddTodo extends React.Component {
  constructor (props) {
    super(props)
    this._onChange = this._onChange.bind(this)
    this._onSubmit = this._onSubmit.bind(this)
    this.state = {
      text: ''
    }
  }

  _isValidTodo () {
    return this.state.text.length > 0
  }

  _onChange (event) {
    this.setState({
      text: event.target.value
    })
  }

  _onSubmit (event) {
    event.preventDefault()
    if (this._isValidTodo()) {
      if (this.props.onSubmit) {
        const newItem = {
          completed: false,
          text: this.state.text
        }
        this.props.onSubmit(newItem)
      }
      this.setState({
        text: ''
      })
    }
  }

  render () {
    return (
      <div className='AddTodo'>
        <form onSubmit={this._onSubmit}>
          <input
            onChange={this._onChange}
            placeholder='Add an item...'
            type='text'
            value={this.state.text}
          />
        </form>
      </div>
    )
  }
}

AddTodo.propTypes = {
  onSubmit: PropTypes.func
}

export default AddTodo
