import React from 'react';

const GifsList = ({ gifUrls }) => (
  <div>
    {gifUrls.map((url, i) => (
      <img key={i} src={url} alt="gif" />
    ))}
  </div>
);

export default GifsList;
