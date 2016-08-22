import {
  CACHE_SIGNUP_DATA
} from '../constants';

export const cacheSignupData = (payload) => {
  return {
    type: CACHE_SIGNUP_DATA,
    payload
  }
};
