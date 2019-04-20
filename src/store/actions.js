import { dispatch } from 'redex';

export const SET_LOCATION_ITEMS = 'SET_LOCATION_ITEMS';

function setLocationItemsAction(location, items) {
  return {
    type: SET_LOCATION_ITEMS,
    payload: {
      location,
      items,
    },
  };
}

export const setLocationItems = (location, items) =>
  dispatch(setLocationItemsAction(location, items));
