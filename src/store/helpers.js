import { setLocationItems } from './actions';
import store from './store';

export function moveItem(item, oldLocation, newLocation) {
  const state = store.getState();
  const oldLocationItems = state[oldLocation].filter((x) => x !== item);
  const newLocationItems = [...state[newLocation], item];
  setLocationItems(oldLocation, oldLocationItems);
  setLocationItems(newLocation, newLocationItems);
}

export function assignItem(item, location) {
  moveItem(item, 'unassigned', location);
}

export function unassignItem(item, location) {
  moveItem(item, location, 'unassigned');
}
