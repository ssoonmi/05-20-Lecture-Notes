# Hosting Using Docker and Heroku

We will use `Heroku` to host the images for our projects.
* We will use the  `heroku container registry`

## Heroku vs Docker

* `Docker` uses a `Dockerfile`
* `Heroku` uses `BuildPacks`
* `Dockerfile` builds an `image`
* `Buildpacks` build a `slug`
* `Docker` runs on `containers`
* `Heroku` runs on `dynos`
* `Images` are run on `containers`
* `Slugs` are run on `dynos`

## Hosting on Heroku using the Container Registry

The Container Registry will allow you to deploy your Docker images on to Heroku's dynos.

### NOTE
    Do not use docker-compose when pushing to Heroku. You will be pushing images straight up to the container registry, and then using Heroku dynos to run your images.

### Reading
[Hosting Using Docker](https://open.appacademy.io/learn/js-py---may-2020-online/week-19-may-2020-online/hosting-using-docker)