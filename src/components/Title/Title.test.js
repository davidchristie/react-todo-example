import { shallow } from 'enzyme'
import React from 'react'

import Title from './Title'

it('renders correctly', () => {
  expect(shallow(<Title />)).toMatchSnapshot()
})
