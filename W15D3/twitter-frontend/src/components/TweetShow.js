import React from "react";

const TweetShow = ({ tweet, user }) => {
  return (
    <>
      <h1>The Tweet!</h1>
      <div>
        <p>{tweet.message}</p>
        <p>Author: {user.username}</p>
        <p>Created at: {tweet.createdAt}</p>
      </div>
    </>
  );
};

export default TweetShow;
