# LO's

* Create a React component using ES2015 class syntax

* Describe when it's appropriate to use a class component

* Initialize and update state within a class component

* Provide default values for a class component's props

* Add event listeners to elements

* Prevent event default behavior

* Safely use the `this` keyword within event handlers

* Describe what the React SyntheticEvent object is and the role it plays in handling events

* Create a React class component containing a simple form

* Define a single event handler method to handle onChange events for multiple <input> elements

* Implement form validations

* Describe the lifecycle of a React component

* Recall that the commonly used component lifecycle methods include componentDidMount, componentDidUpdate, and componentWillUnmount

* Use the componentDidMount component lifecycle method to fetch data from an API




# Reminders

* How to use context, aka the `this` keyword
    - Context is determined by how a function is invoked.
        1. Method style: context is set to the receiver
        2. Function style: context is global or window
        3. Using `.call()` or `.apply()`: We explicitly set the context and give the functions arguments at the same time.

* Binding and context
    - By using `.bind()` we can explicitly set the context of a function.

* Context and arrow functions
    - An arrow function will have the same context as the scope in which it's defined.

* Recall event handling
    - `event.target`
    - `event.currentTarget`
    - `event.preventDefault();`



## Additional Readings:

* [Using CRA Templates](https://open.appacademy.io/learn/js-py---may-2020-online/week-14-may-2020-online/using-custom-cra-templates)

* [Forms in React](https://open.appacademy.io/learn/js-py---may-2020-online/week-14-may-2020-online/forms-in-react)

* [React Documentation](https://reactjs.org/docs/hello-world.html)