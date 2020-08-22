import React from 'react';

const AboutPage = props =>
  <main>
    <h1>{props.company.name}</h1>
    <p>{props.company.about.story}</p>
  </main>
;

export default AboutPage;
