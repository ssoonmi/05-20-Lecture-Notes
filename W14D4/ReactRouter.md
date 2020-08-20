# React Router
## Express vs React Router
### With Express:
```
app.get('/users/:userId', (req, res) => {
  res.render('userProfile.pug');
});
```
### With React Router:
```
<Route path="users/:userId" component={userProfile} />
```
_____
## \<BrowserRouter>
Wrapping a React component in `<BrowserRouter>` tags (imported from react-router-dom) will give all of it's descendant components access to React Router.
___
## \<Route>
Examples:
```
<Route path="/" component={splash} />
<Route exact path="/profile" component={profile} />
```
___
## \<Link> 
Creates an a-tag in your component. Accepts the props of `to` and an optional `onClick` handler.
```
<Link to="/" onClick={() => console.log("Welcome Home")} >Home Page</Link>
```
___
## \<NavLink>
NavLinks are very similar to the basic Link tag, but with added fanciness: if you navigate to the `/fancy` path in your react app and you have a NavLink with a `to` prop matching that route, you fancy!
```
<NavLink to="/fancy" activeClassName="shiny" >Make it Fancy</>
``` 
The activeClassName of `.shiny` will be appended to the NavLink.

If you don't set the `activeClassName` prop on a `NavLink` it will still add a class of `.active` to the component when the path matches the `to` prop.
___
## \<Switch>
Renders the first matching route within the switch tags. Great for when you need a default component rendered such as an error page.
```
<Switch>
    <Route path="/cat" component={cat} />
    <Route path="/ca" component={ca} />
    <Route component={defaultComponent} />
    // No path= means that this final route will render if no other path is matched
    <Route path="*" component={errorPage}>
</Switch>
```
___
## Props Made Available through \<BrowserRouter> Routes (ownProps)
* `props.history`
* `props.match`
  * Example: `/users/:userId`
  * If your user checks out the first user's page (`/users/1`), `props.match.params.userId` will return 1.

## \<Redirect>
If a redirect tag renders, it will send the user's browser to the `to` prop
```
<Redirect to="/somewhere/else" />
```
___
## External Resources
[React Router Doc Links on a/A Open](https://open.appacademy.io/learn/js-py---may-2020-online/week-14-may-2020-online/router-documentation)