import {
	FETCH_POST_SUCCESS,
  FETCH_POSTS_SUCCESS,
	FETCH_FEATURED_ON_HOMEPAGE_SUCCESS,
	FETCH_PROFILE_SUCCESS,
	FETCH_PROFILES_SUCCESS,
	FETCH_PLACEMENTS_SUCCESS
} from '../constants';
import {createReducer} from './util';

const initialState = {
	posts: [],
	offset: 0,
	profiles: [],
	featuredProfilesOnHomepage: [],
	featuredArticleOnHomepage: [],
	featuredPerspectiveOnHomepage: [],
	currentProfile: null,
	placements: []
};

export default createReducer(initialState, {
	[FETCH_POSTS_SUCCESS]: (state, payload) => {
		let posts = state.posts.slice();
		if (state.posts.length) {
			console.log('comparing state posts', state.posts)
			console.log('comparing payload posts', payload.posts)
			payload.posts.forEach((fetchedPost) => {
				let newPost = true;
				state.posts.forEach((post) => {
					if (fetchedPost.ID == post.ID) {
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
	[FETCH_FEATURED_ON_HOMEPAGE_SUCCESS]: (state, payload) => {
		if (payload.category === 'Home Page - Insight') {
			return Object.assign({}, state, {
				featuredArticleOnHomepage: payload.posts
			});
		};
		if (payload.category === 'Home Page - Perspective') {
			return Object.assign({}, state, {
				featuredPerspectiveOnHomepage: payload.posts
			});
		};
	},
	[FETCH_POST_SUCCESS]: (state, payload) => {
		return Object.assign({}, state, {
			currentPost: payload.post
		});
	},
	[FETCH_PROFILES_SUCCESS]: (state, payload) => {
		let profiles = payload.profiles.map(extractProfileMetadata);
		let featuredProfilesOnHomepage = profiles.filter(profile => profile.categories["Home Page - Profiles"]).slice(0, 4);

		return Object.assign({}, state, {
			profiles,
			featuredProfilesOnHomepage
		})
	},
	[FETCH_PROFILE_SUCCESS]: (state, payload) => {
		let currentProfile = extractProfileMetadata(payload.profile)

		return Object.assign({}, state, { currentProfile });
	},
	[FETCH_PLACEMENTS_SUCCESS]: (state, payload) => {
		let placements;
		return Object.assign({}, state, {
			placements: payload.placements.posts
		})
	}
});

function extractProfileMetadata(profile) {
	let content = profile.content;
	let rex = /<p>(.*?)<\/p>\n/g;
	let matches = content.match(rex);
	let meta = {};
	for (let i = 0; i < 2; i++) {
		let matched = matches[i].replace(rex, '$1').split(': ')[1];
		switch(i) {
			case 0:
				meta.position = matched;
				break;
			case 1:
				meta.current_firm = matched;
				break;
		}
		// Remove metadata from content
		content = content.replace(matches[i], "");
		meta.content = content;
	}
	return Object.assign(profile, meta);
}