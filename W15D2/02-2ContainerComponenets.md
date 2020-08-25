# Simple Container Components
* [Example of a Simple Container Component](./videoCode/02-fruit-stand-redux-with-react-containers/src/components/FruitManagerContainer.js)

## Container Vs Presentational Components
* Presentational
    * Does not directly interact with Redux
    * Receive data and callbacks from props
    * Concerned with a component's appearance
* Container
    * Interacts directly with Redux
    * Dispatches Redux actions
    * Concerned with giving contained components access to specific callbacks and data as props

## Using a Container Component to Handle Redux Store Interaction
* Container returns the contained component after:
    * Subscribing and unsubscribing from the redux store
    * Passing any actions and data down as props for the presentational component to interact with