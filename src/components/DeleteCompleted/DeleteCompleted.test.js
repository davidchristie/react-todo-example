import { shallow } from 'enzyme'
import React from 'react'

import { DeleteCompleted } from './DeleteCompleted'

it('does not display if no items are completed', () => {
  const props = {
    items: [
      {
        completed: false,
        text: 'Test item 1'
      },
      {
        completed: false,
        text: 'Test item 2'
      }
    ]
  }
  expect(shallow(<DeleteCompleted {...props} />)).toMatchSnapshot()
})

it('does display if an item has been completed', () => {
  const props = {
    items: [
      {
        completed: false,
        text: 'Test item 1'
      },
      {
        completed: true,
        text: 'Test item 2'
      }
    ]
  }
  expect(shallow(<DeleteCompleted {...props} />)).toMatchSnapshot()
})
