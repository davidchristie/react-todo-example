import { shallow } from 'enzyme'
import React from 'react'

import AddTodo from './components/AddTodo'
import Button from './components/Button'
import TodoList from './components/TodoList'
import App from './App'

it('renders correctly', () => {
  expect(shallow(<App />)).toMatchSnapshot()
})

it('toggles item completion', () => {
  const state = {
    items: [
      {
        completed: false,
        text: 'Test item 1'
      },
      {
        completed: false,
        text: 'Test item 2'
      },
      {
        completed: false,
        text: 'Test item 3'
      }
    ]
  }
  const itemIndex = 1
  const wrapper = shallow(<App />)
  wrapper.setState(state)
  wrapper.find(TodoList).at(0).props().toggleCompleted(itemIndex)
  expect(wrapper.state().items[itemIndex].completed).toBe(!state.items[itemIndex].completed)
})

it('adds a new todo item', () => {
  const state = {
    items: [
      {
        completed: false,
        text: 'Test item 1'
      },
      {
        completed: false,
        text: 'Test item 2'
      },
      {
        completed: false,
        text: 'Test item 3'
      }
    ]
  }
  const newItem = {
    completed: false,
    text: 'Test item 4'
  }
  const wrapper = shallow(<App />)
  wrapper.setState(state)
  wrapper.find(AddTodo).at(0).props().onSubmit(newItem)
  expect(wrapper.state().items[3]).toBe(newItem)
})

it('removes completed todo items', () => {
  const state = {
    items: [
      {
        completed: true,
        text: 'Test item 1'
      },
      {
        completed: false,
        text: 'Test item 2'
      },
      {
        completed: true,
        text: 'Test item 3'
      }
    ]
  }
  const wrapper = shallow(<App />)
  wrapper.setState(state)
  wrapper.find(Button).at(0).simulate('click')
  expect(wrapper.state().items).toEqual(state.items.filter(item => !item.completed))
})
