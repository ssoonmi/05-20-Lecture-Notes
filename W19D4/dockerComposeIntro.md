# Docker Compose

## What is Docker Compose?

Docker Compose is a Python-based tool which according to Docker is, “a tool for defining and running multi-container Docker applications. With Compose, you use a `YAML` file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.”

The term `services` refers to running multiple containers. 




## Docker Compose Features

* Can easily deploy multiple containers
* Automatically configure a single network for your app
* Preservation of volume data when containers are created. 
    - When `docker-compose up` runs, if it finds any containers from previous runs, it copies the volumes from the old container to the new container it is creating. 
    - Use `docker-compose down -v` to remove volumes.
* Only recreate containers that have changed. 
    - Compose caches the configuration used to create a container. 
* Compose allows you to use variables in the Compose file.





## The Parts of Docker Compose

1. A `YAML` formatted file describing what is needed in terms of containers, networks, and volumes. 
    - This file is usually named `docker-compose.yml`.
2. A `CLI` tool (docker-compose) which is primarily used for local development and testing which relies on the `YAML` file.





## Steps to use Docker Compose

1.  Define your app’s environment with a Dockerfile so it can be reproduced anywhere.
2.  Define the services that make up your app in the docker-compose.yml so they can be run together in an isolated environment.
3. Run `docker-compose up` so that Compose will start and run your entire app.





## Skeleton

Below is a breakdown of the general way your file should be formatted:

* Reference: [Dockerfile with docker-compose.yml](https://docs.docker.com/compose/gettingstarted/)

```python
# If no version is specified, then version 1.0 is assumed. 
# Recommend version 2 at the minimum
version: '3.1'  

services:  # Will start up containers (is the same as using docker container run).
    servicename: # Friendly name (postgres, node, etc.), also the DNS name inside your network. 
        image: # Image this service will use. This image can be defined in a Dockerfile. Name: jmeyer90/imageName
            build: # reference the relative path to the Dockerfile
        command: # Optional, will replace the default CMD specified by the image
        environment: # Optional, same as -e in docker container run
        volumes: # Optional, same as -v in docker container run
    psql: # servicename2

volumes: # Optional, same as docker volume create

networks: # Optional, same as docker network create
```
