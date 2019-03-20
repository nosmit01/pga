export const GET_PLAYERS_WATCHER = 'GET_PLAYERS_WATCHER'
export const ADD_PLAYER_WATCHER = 'ADD_PLAYER_WATCHER'
export const UPDATE_PLAYER_WATCHER = 'UPDATE_PLAYER_WATCHER'
export const DELETE_PLAYER_WATCHER = 'DELETE_PLAYER_WATCHER'

export const SET_PLAYERS = 'SET_PLAYERS'
export const ADD_PLAYER = 'ADD_PLAYER'
export const UPDATE_PLAYER = 'UPDATE_PLAYER'
export const DELETE_PLAYER = 'DELETE_PLAYER'

// to saga watchers
export function getPlayersWatcher() {
  return {
    type: GET_PLAYERS_WATCHER
  }
}

export function addPlayerWatcher(player) {
  return {
    type: ADD_PLAYER_WATCHER,
    player
  }
}

export function updatePlayerWatcher(player) {
  return {
    type: UPDATE_PLAYER_WATCHER,
    player
  }
}

export function deletePlayerWatcher(player) {
  return {
    type: DELETE_PLAYER_WATCHER,
    player
  }
}

// to reducers
export function setPlayers(players) {
  return {
    type: SET_PLAYERS,
    players
  }
}

export function addPlayer(player) {
  return {
    type: ADD_PLAYER,
    player
  }
}

export function updatePlayer(player) {
  return {
    type: UPDATE_PLAYER,
    player
  }
}

export function deletePlayer(player) {
  return {
    type: DELETE_PLAYER,
    player
  }
}
