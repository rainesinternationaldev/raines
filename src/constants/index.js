const constants = createConstants(
	/**
	 * Wordpress Actions
	 */
	'FETCH_POSTS_REQUEST',
  'FETCH_POSTS_SUCCESS',
  'FETCH_POSTS_FAILURE',
	'FETCH_POST_REQUEST',
  'FETCH_POST_SUCCESS',
  'FETCH_POST_FAILURE'
);

module.exports = constants;

function createConstants(...constants) {
	return constants.reduce((acc, constant) => {
		acc[constant] = constant;
		return acc;
	}, {});
};