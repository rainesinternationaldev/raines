import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE
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

export const fetchPosts = (numPosts, offset, pageNum) => {
  let params = [];
  let appendage;
  if (numPosts) params.push(`per_page=${numPosts}`);
  if (offset)   params.push(`offset=${offset}`);
  if (pageNum)  params.push(`page=${pageNum}`);
  if (params.length) appendage = '?' + params.join('&');

  const query = appendage ? appendage : ``;

  const url = `${baseurl}/posts/${query}`;
	
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

export const fetchPostRequest = () => {
  return {
    type: FETCH_POST_REQUEST
  }
};

export const fetchPostSuccess = (post) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: {
      post
    }
  }
}

export const fetchPostFailure = () => {
  return {
    type: FETCH_POST_FAILURE
  }
};

export const fetchPost = (id) => {
  if (!id) id = "";
  const url = `${baseurl}/posts/${id}`;
	
	return (dispatch) => {
		dispatch(fetchPostRequest());
		return request
			.get(url)
			.end()
			.then((response) => {
				return dispatch(fetchPostSuccess(response.body));
			})
			.catch((error) => {
				dispatch(fetchPostFailure());
			});
	};
}