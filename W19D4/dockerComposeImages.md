# Building Images in a Compose File

Docker Compose can build custom images.

## Example

```python
version: '3'
services:
  webapp: 
    #  the build command tells compose it's building this image
    build: #image
        # Will build in the current directory   
        context: . # the path to the  dockerfile
        dockerfile: whateverthenameis.Dockerfile # default is Dockerfile
        #  by passing a name here you are telling compose to name and tag the built image by this name
    image: whateverImage:whatevertag
    ports: 
        - '80:80'
```

```python
version: '3'
services:
  webapp: 
    #  the build command tells compose it's building this image
    build: ./backend # the path to the  dockerfile
    image: whateverImage:whatevertag
    ports: 
        - '80:80'
```

### How it works

* The first time the `docker-compose.yml` file is run, the image will be built on the `docker-compose up` command.

NOTE:
* If we change the `Dockerfile` for an image and use `docker-compose up`, Docker Compose won't know the image has changed.
* We will need to tell Docker Compose to explicitly rebuild the image by using the `docker-compose up --build` or `docker-compose build` command.