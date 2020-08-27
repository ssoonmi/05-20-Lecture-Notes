import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Tweets from './components/tweets/ConnectedTweets';
import NavBar from './components/NavBar';
import TweetShow from './components/tweet-show/ConnectedTweetShow';
import Login from './components/Login';
import NewTweet from './components/NewTweet';
import SignUp from './components/SignUp';
import { connect } from 'react-redux';

const ProtectedRoute = ({
  component: Component,
  loggedIn,
  ...rest
}) => {
  if (loggedIn) {
    return (
      <Route {...rest} 
        component={Component}
      />
    );
  }
  return (
    <Redirect to="/login" />
  )
};

const mapStateToProps = state => {
  return {
    loggedIn: !!state.auth.id
  }
}

const ConnectedProtectedRoute = connect(mapStateToProps, null)(ProtectedRoute);

function App() {
  return (
    <>
      <NavBar />
      <main>
        <NewTweet />
        <Switch>
          <ConnectedProtectedRoute exact path="/" component={Tweets} />
          <Route exact path="/tweets/:id" component={TweetShow} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </main>
    </>
  );
}

export default App;
