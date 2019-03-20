import { IS_FETCHING, HAS_FETCHED } from '../actions/fetch'

const initState = {
  isFetching: false,
  hasFetched: false,
}

export default function(state = initState, action) {
  switch (action.type) {
    case IS_FETCHING:
      return {
        ...state,
        isFetching: true,
        hasFetched: false
      }
    case HAS_FETCHED:
      return {
        ...state,
        isFetching: false,
        hasFetched: true
      }
    default:
      return state
  }
}
