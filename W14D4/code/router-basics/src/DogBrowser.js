import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BreedList from './BreedList';
import DogPicture from './DogPicture';

class DogBrowser extends React.Component {
  constructor(props) {
    super(props);
    /* What is in a props object that has been passed down through a route tag? */
    // debugger 
    this.state = {
      breeds: [],
    };
  }

  async componentDidMount() {
    try {
      // Fetch the dog breeds
      const url = 'https://dog.ceo/api/breeds/list/all';
      const response = await fetch(url);
      if (response.ok) {
        const { message } = await response.json();
        // debugger;
        // Set the breeds slice of state to the keys of the message object
        return this.setState({
          breeds: Object.keys(message),
        });
      }
    } catch (e) {

    }
  }

  render() {
    return (
      <main className="list-detail-layout">
        <BrowserRouter>
          <BreedList breeds={this.state.breeds} />
          <Switch>
            {/* <Route path="/breeds" component={
              () => <h2>These are not the dogs you are looking for.</h2>
              } 
            /> */}
            <Route path="/breeds/:breed" component={DogPicture} />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default DogBrowser;


