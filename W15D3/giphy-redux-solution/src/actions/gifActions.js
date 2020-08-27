import * as APIUtil from '../util/apiUtil';

export const RECEIVE_GIFS = 'RECEIVE_GIFS';

const receiveGifs = gifs => {
  return {
    type: RECEIVE_GIFS,
    gifs: gifs,
  };
};

export const fetchGifs = searchTerm => dispatch => (
  APIUtil.fetchGifs(searchTerm)
		.then(res => res.json())
		.then(res => dispatch(receiveGifs(res.data)))
);
