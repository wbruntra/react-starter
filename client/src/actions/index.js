import { UPDATE_STATUS } from './actionTypes';

export const updateStatus = (status) => {
  return {
    type: UPDATE_STATUS,
    payload: status,
  }
}
