import { LOCATIONS, ITEMS, ITEM_COPIES } from '../data/Constants'
import { arrayRepeat } from '../util'
import { SET_LOCATION_ITEMS } from './actions'
import { combineReducers } from 'redux'

const initialState = {
  locations: {
    ...Object.values(LOCATIONS)
      .flatMap((group) => Object.values(group))
      .reduce((acc, val) => acc.concat(val))
      .reduce((acc, loc) => {
        acc[loc] = []
        return acc
      }, {}),
    unassigned: ITEMS.flatMap((item) =>
      arrayRepeat(item, ITEM_COPIES[item] || 1, (x, c, t) =>
        t > 1 ? `${x}-${c}` : x
      )
    ),
  },
}

function locations(state = { ...initialState.locations }, action) {
  switch (action.type) {
    case SET_LOCATION_ITEMS:
      const { location, items } = action.payload
      return {
        ...state,
        [location]: items,
      }
    default:
      return state
  }
}

export default combineReducers({ locations })
