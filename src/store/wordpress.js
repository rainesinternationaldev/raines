import {
	FETCH_POST_SUCCESS,
  FETCH_POSTS_SUCCESS
} from '../constants';
import {createReducer} from './util';

const initialState = {
	posts: []
};

export default createReducer(initialState, {
	[FETCH_POSTS_SUCCESS]: (state, payload) => {
		return Object.assign({}, state, {
			posts: payload.posts
		});
	},
	[FETCH_POST_SUCCESS]: (state, payload) => {
		return Object.assign({}, state, {
			currentPost: payload.post
		});
	}
});