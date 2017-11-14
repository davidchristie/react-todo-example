import { shallow } from 'enzyme'
import React from 'react'

import TodoItem from './TodoItem'

it('renders uncompleted items correctly', () => {
  const props = {
    item: {
      completed: false,
      text: 'Test todo item text'
    }
  }
  expect(shallow(<TodoItem {...props} />)).toMatchSnapshot()
})

it('renders completed items correctly', () => {
  const props = {
    item: {
      completed: true,
      text: 'Test todo item text'
    }
  }
  expect(shallow(<TodoItem {...props} />)).toMatchSnapshot()
})
