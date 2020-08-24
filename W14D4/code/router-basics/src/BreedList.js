import React from 'react';
import { NavLink } from 'react-router-dom';

const BreedList = props =>
  <div className="list">
    {props.breeds.map(breed => (
      <div key={breed} className="list-item">
        <NavLink activeClassName="is-selected"
          to={`/breeds/${breed}`}>
          {breed}
        </NavLink>
      </div>
    ))}
  </div>
  ;

export default BreedList;