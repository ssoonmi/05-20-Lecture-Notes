# React Context LOs

* Use Context to share and manage global information within a React application
* Create a wrapper component with Context.Provider to set a component's default context
* Create a wrapper component with Context.Consumer to share the global context through render props
* Create and pass a method through Context to update the global state from a nested component



# React Context

React Context gives you a way to pass data through the component tree without having to manually thread props. 

React Context will re-render ALL of the children of a Component.
React is specifically designed to cause small modular re-renders of components.
So, we DO NOT want large swaths of our page re-rendering frequently, as this defeats the purpose of React.
Therefore, React Context should be used for big, infreqeunt changes to your webpage.

Ex:
* Switching to Dark Mode
* Sending a User's information

React Context should NOT be used for:
* Live updates
* Anything which is loaded when scrolling a page
* Small or frequent updates to a page

[PupContext Homework Solutions]

[`React.createContext`]

[`Context.Provider`]

[`Context.Consumer`]

[Updating Context Value]



## Command to set up a simple React App

* npx create-react-app context-to-do-list --template @appacademy/simple


## [Assessment Prep]


## Project Solutions

[Context To Do List Solutions]

[Twitter Revisited Solutions]


[PupContext Homework Solutions]: ./react-redux-context-solution

[`React.createContext`]: ./creatingContext.md

[`Context.Provider`]: ./contextProvider.md

[`Context.Consumer`]: ./contextConsumer.md

[Updating Context Value]: ./updatingContext.md

[Assessment Prep]: ./assessment-prep.md

[Context To Do List Solutions]: ./context-to-do-list-solution

[Twitter Revisited Solutions]: ./twitter-revisited-solution