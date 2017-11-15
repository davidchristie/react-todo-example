import { mount, shallow } from 'enzyme'
import React from 'react'

import { AddTodo } from './AddTodo'

it('renders correctly', () => {
  const props = {
    addTodo: () => {}
  }
  expect(shallow(<AddTodo {...props} />)).toMatchSnapshot()
})

it('prevents the default submit action', () => {
  const props = {
    addTodo: () => {}
  }
  const event = {
    preventDefault: jest.fn()
  }
  const wrapper = mount(<AddTodo {...props} />)
  wrapper.find('input').simulate('submit', event)
  expect(event.preventDefault.mock.calls.length).toBe(1)
})

it(`doesn't submit anything if text is empty`, () => {
  const props = {
    addTodo: jest.fn()
  }
  const wrapper = mount(<AddTodo {...props} />)
  wrapper.find('input').simulate('submit', {
    preventDefault: () => {}
  })
  expect(props.addTodo.mock.calls.length).toBe(0)
})

it('clears the text after submitting', () => {
  const props = {
    addTodo: () => {}
  }
  const wrapper = mount(<AddTodo {...props} />)
  const input = wrapper.find('input')
  input.simulate('change', {target: {value: 'Some text'}})
  input.simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state().text).toBe('')
})

it('submits a new todo item if input is valid', () => {
  const text = 'Test todo item text'
  const props = {
    addTodo: jest.fn()
  }
  const wrapper = mount(<AddTodo {...props} />)
  const input = wrapper.find('input')
  input.simulate('change', {target: {value: text}})
  input.simulate('submit', {
    preventDefault: () => {}
  })
  expect(props.addTodo.mock.calls[0]).toEqual([
    {
      completed: false,
      text
    }
  ])
})
