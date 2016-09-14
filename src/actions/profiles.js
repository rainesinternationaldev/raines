import {
  FETCH_PROFILES_REQUEST,
  FETCH_PROFILES_SUCCESS,
  FETCH_PROFILES_FAILURE,
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
  FETCH_REMAINING_PROFILE_IMAGES_ASYNC_REQUEST,
  FETCH_REMAINING_PROFILE_IMAGES_ASYNC_SUCCESS,
  FETCH_REMAINING_PROFILE_IMAGES_ASYNC_FAILURE,
  FETCH_FEATURED_PROFILES_REQUEST,
  FETCH_FEATURED_PROFILES_SUCCESS,
  FETCH_FEATURED_PROFILES_FAILURE
} from '../constants';
import { request } from './utils';
const baseurl = `https://public-api.wordpress.com/rest/v1.1/sites/rainesinternational.wordpress.com/posts?`;
// const baseurl = 'http://www.consultanttrack.com/wp-json/wp/v2';

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
  const url = `${baseurl}category=profile`;
	
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

export const fetchFeaturedProfilesRequest = () => {
  return {
    type: FETCH_PROFILE_REQUEST
  }
};

export const fetchFeaturedProfilesSuccess = (profile) => {
  return {
    type: FETCH_PROFILE_SUCCESS,
    payload: {
      profile
    }
  }
}

export const fetchFeaturedProfilesFailure = () => {
  return {
    type: FETCH_PROFILE_FAILURE
  }
};

export const fetchFeaturedProfiles = (id) => {
  const url = `${baseurl}category=home-page-profiles`;
	
	return (dispatch) => {
		dispatch(fetchFeaturedProfilesRequest());
		return request
			.get(url)
			.end()
			.then((response) => {
        let profile = response.body;
        return fetchFeaturedProfilesImage(profile.featured_media)
          .then((imageURL) => {
            profile.imageURL = imageURL;
            return dispatch(fetchFeaturedProfilesSuccess(profile));
          })
			})
			.catch((error) => {
				dispatch(fetchFeaturedProfilesFailure());
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