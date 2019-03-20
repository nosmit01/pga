import React from 'react'
import { shallow } from '../enzyme'
import { LeaderBoard } from './LeaderBoard'

describe('LeaderBoard', () => {
  it('should render leaderBoard', () => {
    const props = {
      players: [],
      getPlayersWatcher: () => {}
    }
    const wrapper = shallow(<LeaderBoard {...props} />)
    expect(wrapper.find('.LeaderBoard')).toBeDefined()
  })
})