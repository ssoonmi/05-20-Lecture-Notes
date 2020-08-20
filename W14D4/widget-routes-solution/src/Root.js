import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Widgets from './Widgets';

const names = [
  'Abba',
  'Barney',
  'Barbara',
  'Jeff',
  'Jenny',
  'Sarah',
  'Sally',
  'Xander'
];

const folders = [
  { title: 'one', content: 'I am the first' },
  { title: 'two', content: 'Second folder here' },
  { title: 'three', content: 'Third folder here' }
];

const Root = () => (
  <BrowserRouter>
    <Widgets names={names} folders={folders} />
  </BrowserRouter>
);

export default Root;
