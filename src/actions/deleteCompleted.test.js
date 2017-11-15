import deleteCompleted from './deleteCompleted'

it('matches snapshot', () => {
  expect(deleteCompleted()).toMatchSnapshot()
})
