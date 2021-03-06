import React from 'react'
import { shallow } from 'enzyme'

import { snapTest } from '../../utils/test.util'

import GoalItem from './GoalItem.component'

const props = {
  id: 1,
  title: 'title',
  start: 1,
  current: 1,
  end: 2,
  onPress: id => jest.fn()
}
const wrapper = shallow(<GoalItem {...props} />)

describe('GoalItem', () => {
  snapTest(wrapper, [
    {
      props,
      description: 'basic render'
    }
  ])
})
