import React from 'react'
import { shallow, mount } from '../../enzyme'
import TextInput from './TextInput'

describe('Text Input', () => {
  it('should render input', () => {
    const wrapper = shallow(<TextInput />)
    expect(wrapper.find('.Text-input')).toBeDefined()
  })

  it('should clear input', () => {
    const wrapper = mount(<TextInput />)
    const input = wrapper.find('.Text-input')
    input.instance().value = 'Username'
    expect(input.instance().value).toEqual('Username')
    wrapper.instance().clear()
    expect(input.instance().value).toEqual('')
  })
})