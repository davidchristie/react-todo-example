import addTodo from './addTodo'

it('matches snapshot', () => {
  const newItem = {
    completed: false,
    text: 'Test todo item test'
  }
  expect(addTodo(newItem)).toMatchSnapshot()
})
