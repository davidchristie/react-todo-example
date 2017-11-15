import addTodo from '../actions/addTodo'
import deleteCompleted from '../actions/deleteCompleted'
import toggleCompleted from '../actions/toggleCompleted'
import reducer from './items'

it('adds a new todo item to state', () => {
  const state = [
    {
      completed: false,
      text: 'Test item 1'
    },
    {
      completed: false,
      text: 'Test item 2'
    }
  ]
  const action = addTodo({
    completed: false,
    text: 'Test item 3'
  })
  expect(reducer(state, action)).toMatchSnapshot()
})

it('removes completed todo item from state', () => {
  const state = [
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
  const action = deleteCompleted()
  expect(reducer(state, action)).toMatchSnapshot()
})

it('toggles todo item completion state', () => {
  const state = [
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
  const action = toggleCompleted(1)
  expect(reducer(state, action)).toMatchSnapshot()
})
