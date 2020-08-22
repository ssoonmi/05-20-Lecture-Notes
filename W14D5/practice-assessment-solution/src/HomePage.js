import React from 'react';

import YourName from './YourName';

const HomePage = props =>
  <main>
    <h1>{props.company.name}</h1>
    <h2>{props.company.established}</h2>
    <p>{props.company.description}</p>
    <YourName />
  </main>
;

export default HomePage;
