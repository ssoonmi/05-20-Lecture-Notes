# Component Lifecycle

* The lifecycle of a component is a way of describing the key moments in the lifetime of a component:
    - loading (i.e. mounting)
    - updating
    - unloading (i.e. unmounting).



## Component Lifecycle Methods

* `componentDidMount` - This method is called after your component has been added to the component tree.

* `componentDidUpdate` - This method is called after your component has been updated.

* `componentWillUnmount` - This method is called just before your component is removed from the component tree.






## Mounting

When a class component is being added to the component tree, the following process occurs:

1. The constructor method is called;
2. The render method is called;
3. React updates the DOM; and
4. The componentDidMount lifecycle method is called.






## Updating

A component will update if it receives new props or if the `setState` method is called.

* When a component receives new props, the following process occurs:

    1. The render method is called;
    2. React updates DOM; and
    3. The componentDidUpdate lifecycle method is called.

* When a the `setState` method is called, the following process occurs:

    1. The render method is called;
    2. React updates DOM; and
    3. The componentDidUpdate lifecycle method is called.






## Unmounting

Just before a class component is removed from the component tree, the `componentWillUnmount` lifecycle method is called. This is often used for cleaning up any asynchronous functions from our React Component.






## Fetching Data from an API

A common use case for the componentDidMount lifecycle method, is to fetch data from an API after a component has been mounted to the DOM.
EX:
```javascript
import React from 'react';

class FetchingData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repositories: [],
    };
  }

  async componentDidMount() {
    const url = `https://api.github.com/users/${this.props.gitHubUsername}/repos`;

    const res = await fetch(url);
    const data = await res.json();
    this.setState({ repositories: data });
  }

  render() {
    const { repositories } = this.state;

    if (repositories.length === 0) {
      return (
        <div>Fetching data...</div>
      );
    } else {
     return (
       <div>
         <h2>GitHub Repositories for {this.props.gitHubUsername}</h2>
         <ul>
           {
             repositories.map((repo) => (
               <li key={repo.id}>
                 <a href={repo.html_url}>{repo.name}</a>
               </li>
             ))
           }
         </ul>
       </div>
     );
    }
  }
}

export default FetchingData;
```

In the above example:

* The FetchingData component initially renders <div>Fetching data...</div>. 

* Once the component is mounted to the DOM, the componentDidMount lifecycle method is called, which in turn uses the Fetch API to retrieve the public repositories for the provided GitHub username. 

* When the fetch HTTP request completes and the JSON response is parsed, the this.setState method is called to update the this.state.repositories property with the newly acquired data. 

* Updating the state causes React to re-render the component which then displays an unordered list of links.