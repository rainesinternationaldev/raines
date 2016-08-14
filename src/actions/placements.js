import { 
  FETCH_PLACEMENTS_REQUEST,
  FETCH_PLACEMENTS_SUCCESS,
  FETCH_PLACEMENTS_FAILURE
} from '../constants';
import { request } from './utils';
const baseurl = 'http://www.consultanttrack.com/wp-json/wp/v2';

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

export const fetchPlacements = (numPlacements, offset, pageNum) => {
  let params = [];
  let appendage;
  if (numPlacements) params.push(`per_page=${numPlacements}`);
  if (offset)  params.push(`offset=${offset}`);
  if (pageNum) params.push(`page=${pageNum}`);
  if (params.length) appendage = '?' + params.join('&');

  const query = appendage ? appendage : ``;
  const url = `${baseurl}/placements/${query}`;

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