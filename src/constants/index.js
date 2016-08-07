const constants = createConstants(
	/**
	 * Wordpress Actions
	 */
	'FETCH_POSTS_REQUEST',
  'FETCH_POSTS_SUCCESS',
  'FETCH_POSTS_FAILURE',
	'FETCH_POST_REQUEST',
  'FETCH_POST_SUCCESS',
  'FETCH_POST_FAILURE',
	'FETCH_PROFILES_REQUEST',
  'FETCH_PROFILES_SUCCESS',
  'FETCH_PROFILES_FAILURE',
	'FETCH_PROFILE_REQUEST',
  'FETCH_PROFILE_SUCCESS',
  'FETCH_PROFILE_FAILURE',
	'FETCH_REMAINING_PROFILE_IMAGES_ASYNC_REQUEST',
  'FETCH_REMAINING_PROFILE_IMAGES_ASYNC_SUCCESS',
  'FETCH_REMAINING_PROFILE_IMAGES_ASYNC_FAILURE'
);

module.exports = constants;

function createConstants(...constants) {
	return constants.reduce((acc, constant) => {
		acc[constant] = constant;
		return acc;
	}, {});
};