import configureMockStore from 'redux-mock-store'
import createSagaMiddleware from 'redux-saga'
import { getPlayersWatcherSaga, addPlayerWatcherSaga } from './playersSaga'

const sagaMiddleware = createSagaMiddleware()
const mockStore = configureMockStore([sagaMiddleware])

describe('Players Sagas', () => {
  it('should attempt to fetch players', (done) => {
    const store = mockStore({})
    sagaMiddleware.run(getPlayersWatcherSaga)

    const expectedActions = [
      {'type': 'GET_PLAYERS_WATCHER'},
      {'type': 'IS_FETCHING'},
      {'type': 'HAS_FETCHED'}
    ]

    store.subscribe(() => {
      const actions = store.getActions()
      if (actions.length >= expectedActions.length) {
        actions.forEach((action, i) => {
          if (i !== actions.length - 1) {
            expect(actions[i]).toEqual(expectedActions[i])
          }
        })

        done()
      }
    })

    store.dispatch({type: 'GET_PLAYERS_WATCHER'})
  })

  it('should attempt to add player', (done) => {
    const store = mockStore({})
    sagaMiddleware.run(addPlayerWatcherSaga)

    const expectedActions = [
      {'type': 'ADD_PLAYER'}
    ]

    store.subscribe(() => {
      const actions = store.getActions()
      if (actions.length >= expectedActions.length) {
        actions.forEach((action, i) => {
          if (i !== actions.length - 1) {
            expect(actions[i]).toEqual(expectedActions[i])
          }
        })

        done()
      }
    })

    store.dispatch({type: 'ADD_PLAYER'})
  })
})
