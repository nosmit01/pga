import orderBy from 'lodash/orderBy'
import { SET_PLAYERS, ADD_PLAYER, UPDATE_PLAYER, DELETE_PLAYER } from '../actions/players'

const initState = {
  players: []
}

const orderPlayers = players => {
  return orderBy(players, ['score', 'lastName'], ['desc', 'asc'])
}

export default function(state = initState, action) {
  switch (action.type) {
    case SET_PLAYERS:
      return {
        ...state,
        players: orderPlayers(action.players)
      }
    case ADD_PLAYER:
      return {
        ...state,
        players: orderPlayers(
          [...state.players, action.player]
        )
      }
    case UPDATE_PLAYER:
      const playersWithUpdated = state.players.map(player => {
        if (player.id === action.player.id) {
          return Object.assign({}, player, action.player)
        }

        return player
      })
      return {
        ...state,
        players: orderPlayers(playersWithUpdated)
      }
    case DELETE_PLAYER:
      return {
        ...state,
        players: orderPlayers(
          state.players.filter(player => player.id !== action.player.id)
        )
      }
    default:
      return state
  }
}
