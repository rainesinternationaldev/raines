import {
  CACHE_SIGNUP_DATA
} from '../constants';
import {createReducer} from './util';

const initialState = {
	data: {
    firstName: null,
    lastName: null,
    email: null
  }
};

export default createReducer(initialState, {
  [CACHE_SIGNUP_DATA]: (state, payload) => {
    return Object.assign({}, state, {
      data: payload
    })
  }
});