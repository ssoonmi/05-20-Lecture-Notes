import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginPanelRedux from './LoginPanelRedux';
import PokemonBrowserRedux from './PokemonBrowerRedux';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    rest.needLogin === true
      ? <Redirect to='/login' />
      : <Component {...props} />
  )} />
)

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPanelRedux} />
          <PrivateRoute
            path="/"
            exact={true}
            needLogin={this.props.needLogin}
            component={PokemonBrowserRedux}
          />
          <PrivateRoute
            path="/pokemon/:pokemonId"
            exact={true}
            needLogin={this.props.needLogin}
            component={PokemonBrowserRedux}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUserId: state.authentication.id,
    needLogin: !state.authentication.id,
  };
}

export default connect(mapStateToProps)(App);
