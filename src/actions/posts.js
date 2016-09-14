import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,


  FETCH_FEATURED_ON_HOMEPAGE_REQUEST,
  FETCH_FEATURED_ON_HOMEPAGE_SUCCESS,
  FETCH_FEATURED_ON_HOMEPAGE_FAILURE,
  FETCH_FEATURED_PERSPECTIVE_REQUEST,
  FETCH_FEATURED_PERSPECTIVE_SUCCESS,
  FETCH_FEATURED_PERSPECTIVE_FAILURE,


  FETCH_PROFILES_REQUEST,
  FETCH_PROFILES_SUCCESS,
  FETCH_PROFILES_FAILURE,
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
  FETCH_REMAINING_PROFILE_IMAGES_ASYNC_REQUEST,
  FETCH_REMAINING_PROFILE_IMAGES_ASYNC_SUCCESS,
  FETCH_REMAINING_PROFILE_IMAGES_ASYNC_FAILURE
} from '../constants';
import { request } from './utils';
// const baseurl = 'http://www.consultanttrack.com/wp-json/wp/v2';
const baseurl = `https://public-api.wordpress.com/rest/v1.1/sites/rainesinternational.wordpress.com/posts?`;

export const fetchFeaturedOnHomepageRequest = () => {
  return {
    type: FETCH_FEATURED_ON_HOMEPAGE_REQUEST
  }
};

export const fetchFeaturedOnHomepageSuccess = (body) => {
  return {
    type: FETCH_FEATURED_ON_HOMEPAGE_SUCCESS,
    payload: body
  }
}

export const fetchFeaturedOnHomepageFailure = () => {
  return {
    type: FETCH_FEATURED_ON_HOMEPAGE_FAILURE
  }
};

export const fetchFeaturedOnHomepage = (categoryId) => {
  const url = `${baseurl}category=${categoryId}`
	
	return (dispatch) => {
		dispatch(fetchFeaturedOnHomepageRequest());
		return request
			.get(url)
			.end()
			.then((response) => {
        console.log('here is the response', response.body)
				return dispatch(fetchFeaturedOnHomepageSuccess({
          posts: response.body.posts,
          category: categoryId
        }));
			})
			.catch((error) => {
				dispatch(fetchFeaturedOnHomepageFailure());
			});
	};
}

export const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST
  }
};

export const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: {
      posts: posts.posts
    }
  }
}

export const fetchPostsFailure = () => {
  return {
    type: FETCH_POSTS_FAILURE
  }
};

export const fetchPosts = (numPosts, offset, pageNum, categoryId) => {
  // let params = [];
  // let appendage;
  // if (numPosts) params.push(`per_page=${numPosts}`);
  // if (offset)   params.push(`offset=${offset}`);
  // if (pageNum)  params.push(`page=${pageNum}`);
  // if (categoryId) params.push(`categories=${categoryId}`);
  // if (params.length) appendage = '?' + params.join('&');

  // const query = appendage ? appendage : ``;

  let query = ``;
  let category = `article`;
  if (numPosts) query += `&number=${numPosts}`;
  if (offset) query += `&offset=${offset}`;
  if (pageNum) query += `&page=${pageNum}`;
  if (categoryId) category = categoryId;

  const url = `${baseurl}category=${category}${query}`
  console.log('the url', url)
	
	return (dispatch) => {
		dispatch(fetchPostsRequest());
		return request
			.get(url)
			.end()
			.then((response) => {
        console.log('here is the response', response.body)
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
  console.log('fetched post', post)
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
  const url = `https://public-api.wordpress.com/rest/v1.1/sites/rainesinternational.wordpress.com/posts/${id}`;
  console.log(url)
	
	return (dispatch) => {
		dispatch(fetchPostRequest());
		return request
			.get(url)
			.end()
			.then((response) => {
        console.log('the response', response.body)
				return dispatch(fetchPostSuccess(response.body));
			})
			.catch((error) => {
				dispatch(fetchPostFailure());
			});
	};
}

export const fetchNextEightPosts = (offset, categoryId) => {
  let url = `${baseurl}/posts/?per_page=8&offset=${offset}&pageNum=1`;
  if (categoryId) url += `&categories=${categoryId}`
	
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







export const fetchProfilesRequest = () => {
  return {
    type: FETCH_PROFILES_REQUEST
  }
};

export const fetchProfilesSuccess = (profiles) => {
  return {
    type: FETCH_PROFILES_SUCCESS,
    payload: {
      profiles
    }
  }
}

export const fetchProfilesFailure = () => {
  return {
    type: FETCH_PROFILES_FAILURE
  }
};

export const fetchProfiles = () => {
  const url = `${baseurl}category=profile&number=100`;

	return (dispatch) => {
		dispatch(fetchProfilesRequest());
		return request
			.get(url)
			.end()
			.then((response) => {
        return dispatch(fetchProfilesSuccess(response.body.posts));
			})
			.catch((error) => {
				dispatch(fetchProfilesFailure());
			});
	};
}


export const fetchProfileRequest = () => {
  return {
    type: FETCH_PROFILE_REQUEST
  }
};

export const fetchProfileSuccess = (profile) => {
  return {
    type: FETCH_PROFILE_SUCCESS,
    payload: {
      profile
    }
  }
}

export const fetchProfileFailure = () => {
  return {
    type: FETCH_PROFILE_FAILURE
  }
};

export const fetchProfile = (id) => {
  const url = `${baseurl}/profiles/${id}`;
	
	return (dispatch) => {
		dispatch(fetchProfileRequest());
		return request
			.get(url)
			.end()
			.then((response) => {
        let profile = response.body;
        return fetchProfileImage(profile.featured_media)
          .then((imageURL) => {
            profile.imageURL = imageURL;
            return dispatch(fetchProfileSuccess(profile));
          })
			})
			.catch((error) => {
				dispatch(fetchProfileFailure());
			});
	};
}

export const fetchRemainingProfileImagesAsyncRequest = () => {
  return {
    type: FETCH_REMAINING_PROFILE_IMAGES_ASYNC_REQUEST
  }
};

export const fetchRemainingProfileImagesAsyncSuccess = (images) => {
  return {
    type: FETCH_REMAINING_PROFILE_IMAGES_ASYNC_SUCCESS,
    payload: {
      images
    }
  }
}

export const fetchRemainingProfileImagesAsyncFailure = () => {
  return {
    type: FETCH_REMAINING_PROFILE_IMAGES_ASYNC_FAILURE
  }
};

export const fetchRemainingProfileImagesAsync = () => {
	return (dispatch, getState) => {
		const state = getState();
    dispatch(fetchRemainingProfileImagesAsyncRequest());
    const remainingProfiles = state.wordpress.profiles.slice(8);
    let updatedProfiles = [];
    remainingProfiles.forEach((profile) => {
      let newProfile = fetchProfileImage(profile.featured_media)
        .then((imageURL) => {
          profile.imageURL = imageURL;
          return profile;
        })
      updatedProfiles.push(newProfile);
    });
    return Promise.all(updatedProfiles).then((result) => {
      const total = state.wordpress.profiles.slice(0, 8).concat(result);
      return dispatch(fetchProfilesSuccess(total));
    });
	};
};

function fetchProfileImage(id) {
  const baseurl = `http://www.consultanttrack.com/wp-json/wp/v2/media/${id}`;
  return request
    .get(baseurl)
    .end()
    .then((response) => response.body.source_url)
    .catch((error) => {
      return 'http://previews.123rf.com/images/pictrough/pictrough1002/pictrough100200049/6393797-Business-man-jumping-in-the-air-and-clicking-heels-Square-format--Stock-Photo.jpg'
    });
}