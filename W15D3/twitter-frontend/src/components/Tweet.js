import React from 'react';
import { NavLink } from 'react-router-dom';

const Tweet = ({tweet, user}) => {
  return (
    <li>
      <p>{tweet.message}</p>
      <p>Author: {user.username}</p>
      <NavLink to={`/tweets/${tweet.id}`}>Show Tweet!</NavLink>
    </li>
  )
};

export default Tweet;