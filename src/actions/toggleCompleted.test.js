import toggleCompleted from './toggleCompleted'

it('matches snapshot', () => {
  const itemIndex = 1
  expect(toggleCompleted(itemIndex)).toMatchSnapshot()
})
