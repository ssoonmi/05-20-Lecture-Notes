import React from 'react';
import Tweet from './Tweet';

const Tweets = ({tweets, users}) => {
  return(
    <>
      <h1>Tweets!</h1>
      <ul>
        {Object.values(tweets).map(tweet =>(
          <Tweet key={tweet.id} tweet={tweet} user={users[tweet.userId]}/>
        ))}
      </ul>
    </>
  )
};

export default Tweets;