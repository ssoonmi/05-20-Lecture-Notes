# Creating a Dockerfile for Your Project

You will be expected to deploy both your Full Stack Projects onto `Heroku` using `Docker`.

You will create a `Dockerfile` for each of the custom images you'll need to run your project. 







## Determining What Images You Need

A good rule of thumb is to have one image for each service your application will need

If you have a `Flask`, `React`, and `Postgres` application, you would have:
* One container running `Flask`
* One running `Node` to interpret `JavaScript`
* One container running `Postgres`

In that scenario, you'd create a `Dockerfile` for your `Flask` service and a `Dockerfile` for your `React` service. You would just use the base image for `Postgres`.

NOTE:
    Think about whether that service relies on any custom setup. 
    * An example of a service that wouldn't require a custom image is a database. 
    * For pretty much all of your purposes, the basic database image will provide everything you need.







### Best Practices for Building Your Dockerfiles

1. Always use the proper base image.
    * For example: don't use ubuntu as your base image if all you need is node.
    * Use the alpine tagged version if possible to have a much smaller overall image.
2. Always write a `.dockerignore`.
3. Each container should do one thing - don't try to run everything in one container.
4. Don't create unnecessary layers (merge multiple `RUN` commands into one).
5. Do not use the 'latest' base image tag (match the version to your local version).
6. Remove unneeded cached files after each `RUN` step (if installing packages, make sure to clean up).
7. Utilize the `CMD` instruction to give a command that will run every time a container is run based off this image (`'npm start'`, `'node server'`, etc).
8. Put lines that will frequently change as low as possible in your `Dockerfile` for more efficient building.
9. Specify all default environment variables, exposed ports and volumes.
10. Add a container `HEALTHCHECK` to ensure your containers are not only running, but healthy.