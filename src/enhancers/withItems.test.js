import addTodo from '../actions/addTodo'
import deleteCompleted from '../actions/deleteCompleted'
import toggleCompleted from '../actions/toggleCompleted'
import { mapStateToProps, mapDispatchToProps } from './withItems'

describe('mapStateToProps', () => {
  it('gets the todo items from state', () => {
    const state = {
      items: [
        {
          completed: false,
          text: 'Test item 1'
        },
        {
          completed: true,
          text: 'Test item 2'
        },
        {
          completed: false,
          text: 'Test item 3'
        }
      ]
    }
    expect(mapStateToProps(state)).toEqual({items: state.items})
  })
})

describe('mapDispatchToProps', () => {
  it('dispatches a ADD_TODO action', () => {
    const dispatch = jest.fn()
    const newTodo = {
      completed: false,
      text: 'Test todo item text'
    }
    mapDispatchToProps(dispatch).addTodo(newTodo)
    expect(dispatch.mock.calls[0]).toEqual([addTodo(newTodo)])
  })

  it('dispatches a DELETE_COMPLETED action', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).deleteCompleted()
    expect(dispatch.mock.calls[0]).toEqual([deleteCompleted()])
  })

  it('dispatches a TOGGLE_COMPLETED action', () => {
    const dispatch = jest.fn()
    const itemIndex = 1
    mapDispatchToProps(dispatch).toggleCompleted(itemIndex)
    expect(dispatch.mock.calls[0]).toEqual([toggleCompleted(itemIndex)])
  })
})
