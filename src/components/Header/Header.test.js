import { shallow } from 'enzyme'
import React from 'react'

import Header from './Header'

it('renders correctly', () => {
  expect(shallow(<Header />)).toMatchSnapshot()
})
