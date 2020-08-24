import React from 'react';

const Dog = (props) => {
  const { url, banana } =props;

  return (
    <figure>
      <img src={url} />
      <figcaption>{url}</figcaption>
    </figure>
  );
};

function App(props) {
  return (
    props.urls.map(url => <Dog key={url} url={url} banana="apple" />)
  );
}

App.defaultProps = {
  urls: [],
};

export default App;
