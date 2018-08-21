import {createAction} from 'redux-actions';

export const FETCH_TOAST = 'FETCH_TOAST';

export const fetchToast = createAction(FETCH_TOAST);

export function fetchToastReducer(notify = {}, action) {
  switch (action.type) {
    case FETCH_TOAST:
      return action.payload;
    default:
      return notify;
  }
}
