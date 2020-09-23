# Dockerfile

A Dockerfile is a way to create our own images, or build an image based off of
an existing one. 

## Dockerfile Image Layers

Each line of execution in a Dockerfile will have its own image layer. 

| Command                           | Description                                                              |
| --------------------------------- | ------------------------------------------------------------------------ |
| `docker image ls` | Show all the images you have stored.                     |
| `docker image history <IMAGE NAME>` | Show all the image layers of an image.                     |
| `docker image inspect <IMAGE NAME>` | Show details of the specified image (e.g. exposed port, command)  |

## Build a Dockerfile

Whenever an image is built from a Dockerfile, the image layers will be cached.
To build from a Dockerfile with no cache, you nee to specify the `--no-cache`
option.

| Command                           | Description                                                              |
| --------------------------------- | ------------------------------------------------------------------------ |
| `docker build [OPTIONS] <DIRECTORY PATH>` | Build an image from a Dockerfile defined in the specified directory path. See below for options. |
| `docker image history <IMAGE NAME>` | Show all the image layers of an image.                     |
| `docker image inspect <IMAGE NAME>` | Show details of the specified image (e.g. exposed port, command)  |

### Common `docker build` options:

| Option | Description |
| ------ | ----------- |
| `-t <TAGNAME>`  | Create a tag for the created image.                  |
| `--no-cache`    | Do not use the cached layers to build.               |
| `--pull`        | Always attempt to pull a newer version of the image. |

[Other docker build options]

Name your images as `<Docker Hub username>/<tagname>`

## Push a Dockerfile to Docker Hub

| Command                           | Description                                                              |
| --------------------------------- | ------------------------------------------------------------------------ |
| `docker login` | Login to Docker Hub                     |
| `docker image push <IMAGE NAME>` | Push an image that you have tagged and built to Docker Hub    |

## Cleanup

| Command                           | Description                                                              |
| --------------------------------- | ------------------------------------------------------------------------ |
| `docker rmi <IMAGE NAME>` | Remove the specified image and its layers.                     |
| `docker logout` | Logout of Docker Hub (not necessary)                    |
| `docker system prune` | Removes **ALL** images, volumes, containers, networks that are dangling |
| `docker system prune -a` | Removes **ALL** images, volumes, containers, networks. |


## Dockerfile Instructions

[Dockerfile Instructions Documentation]

| Instruction | Description |
| ----------- | ----------- |
| `FROM <IMAGE NAME>` | Build off the specified image. |
| `ENV <ENV VARIABLE>=<VALUE>` | Set an environment variable. |
| `WORKDIR <DIRECTORY PATH>` | `cd` into the specified directory path. |
| `COPY <LOCAL DIR PATH> <IMAGE DIR PATH>` | Copies the specified files at the local directory path to the image directory path. |
| `EXPOSE <PORT NUMBER>` | Exposes the specified port to the internal Docker network. |
| `RUN <COMMAND>` | Run a command. |
| `CMD ["<COMMAND>"]` | Run the **FINAL** command that will run every time you run a container. |

[Other docker build options]: https://docs.docker.com/engine/reference/commandline/build/
[Dockerfile Instructions Documentation]: https://docs.docker.com/engine/reference/builder/#from