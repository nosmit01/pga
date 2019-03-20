import React from 'react'
import ReactDOM from 'react-dom'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import App from './App'

const sagaMiddleware = createSagaMiddleware()
const mockStore = configureMockStore([sagaMiddleware])

it('renders without crashing', () => {
  const store = mockStore({
    fetch: {
      isFetching: false,
    },
    players: {
      players: [],
    }
  })
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, div)
  ReactDOM.unmountComponentAtNode(div)
})
