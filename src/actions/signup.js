import {
  CACHE_SIGNUP_DATA,
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE
} from '../constants';
import { request } from './utils';

export const cacheSignupData = (payload) => {
  return {
    type: CACHE_SIGNUP_DATA,
    payload
  }
};

export const signupUserRequest = () => {
  return {
    type: SIGNUP_USER_REQUEST
  }
};

export const signupUserSuccess = () => {
  return {
    type: SIGNUP_USER_SUCCESS
  }
};

export const signupUserFailure = () => {
  return {
    type: SIGNUP_USER_FAILURE
  }
};

export const signupUser = (formData) => {
  console.log('signing up user with formdata', formData);

  const url = `/api/email/resume`;
  let data = new FormData(formData);
  for (let key in formData) {
    data.append(key, formData[key]);
  }

  return (dispatch) => {
    dispatch(signupUserRequest());
    return request
      .post(url)
      .send(data)
      .end()
      .then((response) => {
        return dispatch(signupUserSuccess(response.body))
      })
      .catch((error) => {
        dispatch(signupUserFailure())
      })
  }
}