import { shallow } from 'enzyme'
import React from 'react'

import TodoItem from '../TodoItem'
import TodoList from './TodoList'

it('renders correctly', () => {
  const props = {
    items: [
      {
        completed: false,
        text: 'Test todo item 1'
      },
      {
        completed: true,
        text: 'Test todo item 2'
      },
      {
        completed: false,
        text: 'Test todo item 3'
      }
    ],
    toggleCompleted: () => {}
  }
  expect(shallow(<TodoList {...props} />)).toMatchSnapshot()
})

it('clicking on an item toggles completion', () => {
  const props = {
    items: [
      {
        completed: false,
        text: 'Test todo item 1'
      },
      {
        completed: true,
        text: 'Test todo item 2'
      },
      {
        completed: false,
        text: 'Test todo item 3'
      }
    ],
    toggleCompleted: jest.fn()
  }
  const itemIndex = 1
  const wrapper = shallow(<TodoList {...props} />)
  wrapper.find(TodoItem).at(itemIndex).simulate('click')
  expect(props.toggleCompleted.mock.calls[0]).toEqual([itemIndex])
})
