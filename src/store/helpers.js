import { setLocationItemsAction, resetLocationsAction } from './actions'

export function moveItem(state, item, oldLocation, newLocation, newIndex) {
  const oldLocationItems = state[oldLocation].filter((x) => x !== item)
  const newLocationItems = [...state[newLocation]]
  newLocationItems.splice(newIndex, 0, item)
  const oldLocationAction = setLocationItemsAction(
    oldLocation,
    oldLocationItems
  )
  const newLocationAction = setLocationItemsAction(
    newLocation,
    newLocationItems
  )
  return [oldLocationAction, newLocationAction]
}

export function assignItem(state, item, location) {
  return moveItem(state, item, 'unassigned', location)
}

export function unassignItem(state, item, location) {
  return moveItem(state, item, location, 'unassigned')
}

export function exportLocations(locations) {
  const result = {}
  Object.entries(locations).forEach(([key, value]) => {
    if (key !== 'unassigned') {
      if (value.length) {
        let [item] = value
        if (/^([a-z]|\s)+(?:\s\d+)$/i.test(item)) {
          item = item
            .split('-')
            .slice(0, -1)
            .join(' ')
        } else {
          item = item.split('-').join(' ')
        }
        result[key.split('-').join(' ')] = item
      }
    }
  })
  return result
}
