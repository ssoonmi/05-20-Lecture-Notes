import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'

const App = (props) => {
  const { userId } = props;
  return (
    <Switch>
      <Route path="/:paramsId" component={OtherComponent} />
      <Route path="/" render={(routeProps) => (
          <OtherComponent {...routeProps} userId={userId} />
        )}
      />
    </Switch>
  );
};

// {
//   history: { push },
//   match: { params: { paramsId: '1' } }
// }

function OtherComponent() {
  return (
    <AnotherComponent />
  )
}

const AnotherComponent = withRouter(class {
  render() {
    return (
      <h1></h1>
    )
  }
})