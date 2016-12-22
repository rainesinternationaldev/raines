import { 
  FETCH_PLACEMENTS_REQUEST,
  FETCH_PLACEMENTS_SUCCESS,
  FETCH_PLACEMENTS_FAILURE
} from '../constants';
import { request } from './utils';
const baseurl = `https://public-api.wordpress.com/rest/v1.1/sites/rainesinternational.wordpress.com/posts?`;

export const fetchPlacementsRequest = () => {
  return {
    type: FETCH_PLACEMENTS_REQUEST
  };
};

export const fetchPlacementsSuccess = (placements) => {
  return {
    type: FETCH_PLACEMENTS_SUCCESS,
    payload: {
      placements
    }
  };
};

export const fetchPlacementsFailure = () => {
  return {
    type: FETCH_PLACEMENTS_FAILURE
  };
};

export const fetchPlacements = (numPlacements, offset) => {
  let params = ['category=placement'];
  let appendage;
  if (numPlacements) params.push(`number=${numPlacements}`);
  if (offset)  params.push(`offset=${offset}`);
  if (params.length) appendage = params.join('&');

  const query = appendage ? appendage : ``;
  const url = `${baseurl}${query}`;

  return (dispatch) => {
    dispatch(fetchPlacementsRequest());
    return request
      .get(url)
      .end()
      .then((response) => {
        return dispatch(fetchPlacementsSuccess(response.body));
      })
      .catch((error) => {
        dispatch(fetchPlacementsFailure());
      });
  }
}