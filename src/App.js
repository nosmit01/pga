import React, { Component } from 'react'
import Flex from './components/layout/Flex'
import LeaderBoard from './components/LeaderBoard'

class App extends Component {
  render() {
    return (
      <Flex className="App" height="100%">
        <LeaderBoard />
      </Flex>
    );
  }
}

export default App
