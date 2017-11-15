import createReduxStore from './createReduxStore'

it('creates a store without devtools extension', () => {
  expect(createReduxStore()).toBeDefined()
})

it('creates a store with devtools extension', () => {
  window.__REDUX_DEVTOOLS_EXTENSION__ = () => {}
  expect(createReduxStore()).toBeDefined()
})
