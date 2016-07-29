import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE
} from '../constants';
import { request } from './utils';
const baseurl = 'http://www.consultanttrack.com/wp-json/wp/v2';

export const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST
  }
};

export const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: {
      posts
    }
  }
}

export const fetchPostsFailure = () => {
  return {
    type: FETCH_POSTS_FAILURE
  }
};

export const fetchPosts = () => {
  const url = `${baseurl}/posts`;
	
	return (dispatch) => {
		dispatch(fetchPostsRequest());
		return request
			.get(url)
			.end()
			.then((response) => {
				return dispatch(fetchPostsSuccess(response.body));
			})
			.catch((error) => {
				dispatch(fetchPostsFailure());
			});
	};
}