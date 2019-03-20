import { all } from 'redux-saga/effects'
import {
  getPlayersWatcherSaga,
  addPlayerWatcherSaga,
  updatePlayerWatcherSaga,
  deletePlayerWatcherSaga
} from './playersSaga'

export default function* rootSaga() {
  yield all([
    getPlayersWatcherSaga(),
    addPlayerWatcherSaga(),
    updatePlayerWatcherSaga(),
    deletePlayerWatcherSaga()
  ])
}