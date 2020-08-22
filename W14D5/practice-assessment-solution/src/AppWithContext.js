import React from 'react';

import App from './App';
import NameContext from './NameContext';

class AppWithContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      changeName: this.changeName,
    };
  }

  changeName = e => this.setState({ name: e.target.value });

  render() {
    return (
      <NameContext.Provider value={this.state}>
        <App {...this.props} />
      </NameContext.Provider>
    )
  }
}

export default AppWithContext;
