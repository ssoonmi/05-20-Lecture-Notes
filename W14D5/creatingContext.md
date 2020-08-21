
# Creating a Context
In order to use React Context we need to create a Context Object by invoking the method `React.createContext()`

Usually this will be done in a file in our `src/context/` directory.

Ex:
```javascript
// src/context/SampleContext.js

import { createContext } from 'react';

const SampleContext = createContext();

export default SampleContext;
```






## Adding a Provider to the App Component

The `Provider` component expects a `value` property to set the `context` passed throughout your application. 
You need to wrap your child components with provider component tags to give them access to the `context`.

Ex:
```javascript
<Sample.Provider value={/* some value */}>
  <ChildComponent />
</Sample.Provider>
```

Now, our ChildComponent and ALL of it's children will have the ability to access whatever is stored under `value` via `context`.





## Adding a Consumer to a nested component









## Updating the Context from a nested component




