
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

