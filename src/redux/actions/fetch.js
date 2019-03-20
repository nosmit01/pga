export const IS_FETCHING = 'IS_FETCHING'
export const HAS_FETCHED = 'HAS_FETCHED'

// to reducers
export function isFetching() {
  return {
    type: IS_FETCHING
  }
}

export function hasFetched() {
  return {
    type: HAS_FETCHED
  }
}
