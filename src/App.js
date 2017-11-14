import React from 'react'

import AddTodo from './components/AddTodo'
import Button from './components/Button'
import Header from './components/Header'
import TodoList from './components/TodoList'
import './App.css'

const defaultItems = [
  {
    completed: false,
    text: 'Install Node.js version >= 6'
  },
  {
    completed: false,
    text: 'Install npm'
  },
  {
    completed: false,
    text: 'Install Yarn'
  },
  {
    completed: false,
    text: 'Use npm to globally install create-react-app'
  }
]

class App extends React.Component {
  constructor (props) {
    super(props)
    this._addTodo = this._addTodo.bind(this)
    this._deleteCompleted = this._deleteCompleted.bind(this)
    this._toggleCompleted = this._toggleCompleted.bind(this)
    this.state = {
      items: defaultItems
    }
  }

  _addTodo (newItem) {
    this.setState({
      items: [
        ...this.state.items,
        newItem
      ]
    })
  }

  _deleteCompleted () {
    this.setState({
      items: this.state.items.filter(item => {
        return !item.completed
      })
    })
  }

  _toggleCompleted (itemIndex) {
    this.setState({
      items: this.state.items.map((item, index) => {
        if (index === itemIndex) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item
        }
      })
    })
  }

  render () {
    const hasCompleted = this.state.items.some(item => {
      return item.completed
    })
    return (
      <div className='App'>
        <Header />
        <TodoList
          items={this.state.items}
          toggleCompleted={this._toggleCompleted}
        />
        <AddTodo onSubmit={this._addTodo} />
        {
          hasCompleted
            ? (
              <Button onClick={this._deleteCompleted}>
                Remove Completed
              </Button>
            )
            : null
        }
      </div>
    )
  }
}

export default App
