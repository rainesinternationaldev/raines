import {
	FETCH_POST_SUCCESS,
  FETCH_POSTS_SUCCESS,
	FETCH_PROFILE_SUCCESS,
	FETCH_PROFILES_SUCCESS,
	FETCH_PLACEMENTS_SUCCESS
} from '../constants';
import {createReducer} from './util';

const initialState = {
	posts: [],
	offset: 0,
	profiles: [],
	currentProfile: null,
	placements: []
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
		let profiles = payload.profiles.map(extractProfileMetadata)

		function extractProfileMetadata(profile) {
			let content = profile.content;
			let rex = /<p>(.*?)<\/p>/g;
			let matches = content.match(rex);
			let meta = {};
			for (let i = 0; i < 3; i++) {
				let matched = matches[i].replace(rex, '$1').split(': ')[1];
				switch(i) {
					case 0:
						meta.position = matched;
					case 1:
						meta.current_firm = matched;
					case 2:
						meta.consulting_firm = matched;
				}		
			}
			return Object.assign(profile, meta);
		}


		return Object.assign({}, state, {
			profiles: profiles
		})
	},
	[FETCH_PROFILE_SUCCESS]: (state, payload) => {
		return Object.assign({}, state, {
			currentProfile: payload.profile
		})
	},
	[FETCH_PLACEMENTS_SUCCESS]: (state, payload) => {
		let placements;
		if (!state.placements.length) {
			placements = payload.placements
		} else {
			placements = state.placements.slice().concat(payload.placements);
		}
		return Object.assign({}, state, {
			placements
		})
	}
});