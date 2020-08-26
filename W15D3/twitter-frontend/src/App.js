import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Tweets from './components/ConnectedTweets';
import NavBar from './components/NavBar';
import TweetShow from './components/ConnectedTweetShow';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/" component={Tweets} />
          <Route exact path="/tweets/:id" component={TweetShow} />
        </Switch>
      </main>
    </>
  );
}

export default App;
