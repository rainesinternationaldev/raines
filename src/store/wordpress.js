import {
	FETCH_POST_SUCCESS,
  FETCH_POSTS_SUCCESS,
	FETCH_PROFILE_SUCCESS,
	FETCH_PROFILES_SUCCESS
} from '../constants';
import {createReducer} from './util';

const initialState = {
	posts: [],
	offset: 0,
	profiles: []
};

export default createReducer(initialState, {
	[FETCH_POSTS_SUCCESS]: (state, payload) => {
		let posts = state.posts.slice();
		if (state.posts.length) {
			payload.posts.forEach((fetchedPost) => {
				let newPost = true;
				state.posts.forEach((post) => {
					if (fetchedPost.id === post.id) {
						newPost = false;
					}
				});
				if (newPost) {
					posts.push(fetchedPost);
				}
			})
		} else {
			posts = payload.posts;
		}

		return Object.assign({}, state, {
			posts: posts,
			offset: state.offset += payload.posts.length
		});
	},
	[FETCH_POST_SUCCESS]: (state, payload) => {
		return Object.assign({}, state, {
			currentPost: payload.post
		});
	},
	[FETCH_PROFILES_SUCCESS]: (state, payload) => {
		return Object.assign({}, state, {
			profiles: payload.profiles
		})
	}
});