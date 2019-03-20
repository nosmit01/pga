import db from '../../Firebase'
import {hasFetched, isFetching} from '../actions/fetch'
import { setPlayers, addPlayer, updatePlayer, deletePlayer } from '../actions/players'
import { takeLatest, call, put } from 'redux-saga/effects'

// Firebase
function firebaseGetPlayers() {
  return db.collection('players').get()
}

function firebaseAddPlayer(player) {
  return db.collection('players').add(player)
}

function firebaseUpdatePlayer(player) {
  return db.collection('players').doc(player.id).set(player)
}

function firebaseDeletePlayer(player) {
  return db.collection('players').doc(player.id).delete()
}

// Effects
export function* getPlayersEffectSaga() {
  try {
    const players = []
    yield put(isFetching())
    const query = yield call(firebaseGetPlayers)
    query.forEach((doc) => {
      players.push(
        Object.assign({}, doc.data(), {
          id: doc.id
        })
      )
    })
    yield put(hasFetched())
    yield put(setPlayers(players))
  } catch (err) {
    yield put(hasFetched())
    console.log(err)
  }
}

export function* addPlayerEffectSaga(action) {
  try {
    yield put(isFetching(true))
    const doc = yield call(firebaseAddPlayer, action.player)
    yield put(hasFetched())
    yield put(addPlayer(Object.assign({}, action.player, { id: doc.id })))
  } catch (err) {
    yield put(hasFetched())
    console.log(err)
  }
}

export function* updatePlayerEffectSaga(action) {
  try {
    yield put(isFetching(true))
    yield call(firebaseUpdatePlayer, action.player)
    yield put(hasFetched())
    yield put(updatePlayer(action.player))
  } catch (err) {
    yield put(hasFetched())
    console.log(err)
  }
}

export function* deletePlayerEffectSaga(action) {
  try {
    yield put(isFetching(true))
    yield call(firebaseDeletePlayer, action.player)
    yield put(hasFetched())
    yield put(deletePlayer(action.player))
  } catch (err) {
    yield put(hasFetched())
    console.log(err)
  }
}

// Watchers
export function* getPlayersWatcherSaga() {
  yield takeLatest('GET_PLAYERS_WATCHER', getPlayersEffectSaga)
}
export function* addPlayerWatcherSaga() {
  yield takeLatest('ADD_PLAYER_WATCHER', addPlayerEffectSaga)
}
export function* updatePlayerWatcherSaga() {
  yield takeLatest('UPDATE_PLAYER_WATCHER', updatePlayerEffectSaga)
}
export function* deletePlayerWatcherSaga() {
  yield takeLatest('DELETE_PLAYER_WATCHER', deletePlayerEffectSaga)
}
