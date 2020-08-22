# React Practice Assessment

In this practice assessment, you will create a React application using Create
React App and App Academy's **simple** template.

![Animated screenshot of solution][screenshot]

You will be graded your completeness of the instructions and the working
functionality.

In the following steps, when asked to create a component, make sure to create
the component in its own file with the same name as the component to adhere to
best practices.

In this practice, you are asked to make components. You will be asked to make
some components that need state. You will be asked to handle events. You will
be asked to use a `Context`. You will be asked to use the `BrowserRouter`. All
of these are things that will appear on your assessment. The instructions will
be similar. Where there are helpful code snippets in this practice assessment,
there will be fewer or none on the assessment.

## Rubric

Your application should have no warnings or errors in the console. (This
excludes warnings about cookies from third-party sites.)

Your code should be well-formatted, properly indented, and readable.

The application should display the attributes described in the steps. It should
build and run. It should respond to human interaction in the expected ways.

## Step 1

Create a new React App named **practice-react-assessment** using Create React
App and App Academy's **simple** template.

## Step 2

Install **react-router-dom@5** so that you can use it in the application.

## Step 3

In **index.js**, _before_ the call to `ReactDOM.render`, paste the following
code.

```js
const data = {
  company: {
    name: "Company, Inc.",
    established: 1874,
    description: "Company, Inc. makes great products for you and your family.",
    about: {
      story: `
        It was the year 1874. The marvels of science had just shown that
        selenium was photoconductive! The brilliant minds at Company, Inc, did
        not know what that meant, but knew they could do something to capitalize
        on it. They created the first selenium mineral additive and it took the
        world by storm! Unfortunately, it was soon realized that selenium, in
        large amounts, was toxic. Surviving the impending lawsuits, Company,
        Inc. created the new product Boop!, a goose-powered grist mill that
        could turn out tens of pounds of flour per month. From there, Company,
        Inc. has grown to many more products that make your life better.
      `
    },
    staff: [
      { id: 1, name: "Tonya", title: "TANYA!", photo: 'https://via.placeholder.com/150' },
      { id: 2, name: "Bill", title: "That guy, Bill", photo: 'https://via.placeholder.com/150' },
      { id: 3, name: "Robot", title: "Beeper. Booper.", photo: 'https://via.placeholder.com/150' },
      { id: 4, name: "Kitty", title: "Meower!", photo: 'https://via.placeholder.com/150' },
    ]
  }
};
```

Pass that data into the `App` component in the `render` method through a
property named "data".

## Step 4

Remove the `h1` element with its "Hello world!" from the `App` component.
Replace it with a `BrowserRouter` component. Change the `App` component to
accept a `props` argument so you can use the data passed into it from the last
step.

## Step 5

Create a Navigation component. The contents of the navigation should have this
structure:

* A `header` element as its root element
* A `nav` element as the only child of the `header` element
* A `ul` element as the only child of the `nav` element
* Three `li` elements as the children of the `ul` element
  * The first `li` should have a `NavLink` for the path "/" with the text "Home"
  * The second `li` should have a `NavLink` for the path "/staff" with the text
    "Staff"
  * The third `li` should have a `NavLink` for the path "/about" with the text
    "About Us"
* All `NavLink` components should set the active class name to "is-selected"
* Make sure the "Home" `NavLink` only gets that class "is-selected" when the
  route exactly matches "/"

Add the `Navigation` component as the first child of the `BrowserRouter`
component in the `App` component.

## Step 6

Create a component named `HomePage`. In that component, display the company name
in an `h1`, the year the company was established in an `h2`, and the description
of the company in an `h3`.

In the `App` component, insert the use of a `Switch` component after the use of
the `Navigation` component as a child of the `BrowserRouter`. In the `Switch`,
Create a default route that will render the `HomePage` component. Do it in such
a way that you can pass in the data that it needs to render the company
information.

## Step 7

Create a component named `AboutPage`. In that component, display the company
name in an `h1` element, and the story of the company in a `p` element.

In the `App` component, render the component for the route "/about". Pass the
data into it that it needs to render the component.

## Step 8

Create a component named `StaffBox`. In that component, follow these
specifications.

* The root element should be a `div` element with the class "staff-box"
* The name of the person should be displayed as a child of the root element in
  a `div` element with the class "staff-box__name"
* The title of the person should be displayed as a child of the root element in
  a `div` element with the class "staff-box__title"
* The photo of the person should be displayed as a child of the root element in
  an `img` element with the class "staff-box__photo"

Create a component named `StaffPage`. In that component, use the `StaffBox`
component to show all of the staff from the data.

In the `App` component, render the `StaffPage` component for the route "/staff".
Pass the data into it that it needs to render the component.

## Step 9

Create a file named **NameContext.js**. Create a new `Context` named
`NameContext`. Export the `NameContext` from the **NameContext.js** module.

Create a new component named `AppWithContext` that will have state (yes,
please, in another file). Import both the `App` component and the `NameContext`.
Do the following:

* In the constructor, set the initial value of the state that has a property
  named "name" with a value of an empty string and a property that is the
  `changeName` method of the component (This code snippet will _not_ be given
  to you on the assessment.)

  ```js
  this.state = { name: '', changeName: this.changeName }
  ```

* Create a method named `changeName` using the experimental arrow function
  syntax that sets the name in the state to the value of the target of the event
  passed in. (This code snippet will _not_ be given to you on the assessment.)

  ```js
  changeName = e => this.setState({ /* update the name, here */ });
  ```

* In the `render` function, use the provider for the `NameContext` as the root
  element of the render function. Set its value to the value of the state of the
  component. Make the `App` component its single child and spread the properties
  of the `AppWithContext` component into it. (This code snippet will _not_ be
  given to you on the assessment.)

  ```jsx
  <App {...this.props} />
  ```

In the **index.js** file, replace the occurrences of `App` with `AppWithContext`
making sure to remove _all_ references to `App`.

## Step 10

Create a component named `YourName`. Import the `NameContext` into it. Make its
root component the consumer of the `NameContext`. The consumer function should
return an `input` element with its "value" and "onChange" event handlers bound
to the "name" property and "changeName" property, respectively. Render it in the
`HomePage` component after the other content that's already there.

In the `Navigation` component, after the "close nav tag", add a consumer of the
`NameContext`. The consumer function should return a `div` element with the
content "Hello «name»" where «name» comes from the value in the context.

Now, when someone types into the `input` on the home page, it should show the
message "Hello «name»" in the navigation.


[screenshot]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/react-redux/assessments/version-a/practice/assets/react-practice-assessment-image.gif
