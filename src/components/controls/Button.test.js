import React from 'react'
import { shallow, mount } from '../../enzyme'
import Button from './Button'

describe('Button', () => {
  it('should render button', () => {
    const wrapper = shallow(<Button/>)
    expect(wrapper.find('.Button')).toBeDefined()
  })
})