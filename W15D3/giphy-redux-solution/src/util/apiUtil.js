import { apiKey } from '../config';

export const fetchGifs = searchTerm => (
  fetch(`http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=3`)
);
