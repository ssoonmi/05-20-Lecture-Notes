import React from 'react';
import GifsList from './GifsList';
import SearchBar from './SearchBar';

const App = ({ gifUrls, fetchGifs }) => (
  <>
    <SearchBar fetchGifs={fetchGifs} />
    <GifsList gifUrls={gifUrls} />
  </>
);

export default App;
