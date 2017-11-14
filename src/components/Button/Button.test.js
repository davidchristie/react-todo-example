import { shallow } from 'enzyme'
import React from 'react'

import Button from './Button'

it('renders correctly', () => {
  expect(shallow(<Button />)).toMatchSnapshot()
})

it('renders correctly with custom class', () => {
  const props = {
    className: 'test-class'
  }
  expect(shallow(<Button {...props} />)).toMatchSnapshot()
})
