import rootSaga from './sagas/rootSaga'
import fetch from './reducers/fetch'
import players from './reducers/players'
import createSagaMiddleware from 'redux-saga'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'

// Saga Middleware
const sagaMiddleware = createSagaMiddleware()

// Create middlewares for redux
let middlewares = applyMiddleware(sagaMiddleware)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducer = combineReducers({
  fetch,
  players
})

// Create redux store
const store = createStore(
  rootReducer,
  composeEnhancers(middlewares)
)

// run saga watchers
sagaMiddleware.run(rootSaga)
export default store