# EOD

* Relative vs. Absolute Paths with NavLink
* <Link to="/absolute/path/only" />
* <Switch></Switch>
* Express to serve our application? Wasn't npm working fine?
    * Previously, we were serving up our application using the `npm start` script.
    * When the script ran, the files were being streamlined for the browser on your computers RAM and not actually saved anywhere permanent.
    * `NPM build` did the same process, but also created the `build/` directory and saved static files of your application into it. We are having express serve these static, pre-built files because that is what we would actually push into production! The express folder of this second project, which contains
        * The express server
        * The static files of your react application.
    * When someone visits your webpage, we don't expect Heroku to run npm start, streamline all of those files, then serve those up. We cut out the middleman and just hand those streamlined files to Heroku.

Getting stuck on any part of React-Router? [Check out the docs!](https://open.appacademy.io/learn/js-py---may-2020-online/week-14-may-2020-online/router-documentation) They are pretty easy to follow and reveal some extra functionality.