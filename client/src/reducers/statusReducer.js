import { UPDATE_STATUS } from '../actions/actionTypes';

export default (state = 'OK', action) => {
  switch (action.type) {
    case UPDATE_STATUS:
      return action.payload;
    default:
      return state;
  }
};
