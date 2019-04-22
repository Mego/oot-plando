export const SET_LOCATION_ITEMS = 'SET_LOCATION_ITEMS'

export function setLocationItemsAction(location, items) {
  return {
    type: SET_LOCATION_ITEMS,
    payload: {
      location,
      items,
    },
  }
}
