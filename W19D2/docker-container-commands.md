# Common Docker Container Commands

Here are some commands you'll find yourself running often while working with
containers. 

| Command                           | Description                                                              |
| --------------------------------- | ------------------------------------------------------------------------ |
| `docker --help`                   | List all Docker commands and options available.                          |

### Starting

| Command                           | Description                                                              |
| --------------------------------- | ------------------------------------------------------------------------ |
| `docker container run <OPTIONS> <IMAGENAME:TAGNUMBER> <COMMAND>` | Run an image in a container (see more below). |
| `docker container start <CONTAINERNAME>` | Starting a container that is currently stopped. |

Here are a few flags commonly used with the `run` command.

| Flag                              | Description                                                              |
| --------------------------------- | ------------------------------------------------------------------------ |
| `--name` | Give the container a pretty name that you can use in other commands (see below). |
| `--rm` | Automatically remove the container when it exits. |
| `--mount source=<VOLUMENAME>,target=<PATH-IN-CONTAINER>` | Connect a volume |
| `--net` | Connect a custom network |
| `-d` | Use "detached" mode so the container runs in the background rather than taking over your terminal window. |
| `-p` | Map a machine's port to a port in the container (repeat as needed). |
| `-it` | Run a command in a container in interactive mode (similar to `exec -it` below). }

Here are some examples.

* `docker container run --name web -p 8080:80 -d nginx`
* `docker container run -it --rm alpine sh`
* `docker container run -it --rm ubuntu bash`

### Accessing

| Command                           | Description                                                              |
| --------------------------------- | ------------------------------------------------------------------------ |
| `docker container exec <CONTAINERNAME> <COMMMAND>` | Execute a command in a container that is already running. |
| `docker container exec -it <CONTAINERNAME> bash` | Connect to a container with shell - commonly,`bash` (shown here) or `sh`. (Use `ctrl+d` or type `exit` to disconnect.) |

### Listing

| Command                           | Description                                                              |
| --------------------------------- | ------------------------------------------------------------------------ |
| `docker ps` or `docker container ls` | List all running containers.                                          |
| `docker ps -a` or `docker container ls -a` | List all containers.                                            |
| `docker ps -a -q`                 | List the ids of all containers (used to stop all containers - see below). |

### Monitoring

| Command                           | Description                                                              |
| --------------------------------- | ------------------------------------------------------------------------ |
| `docker stats`                    | Get live performance data. (Use `ctrl+c` to disconnect.)                 |
| `docker container inspect <CONTAINERNAME>`  | Return json with metadata about the specified container.                 |
| `docker container top <CONTAINERNAME>`      | Display the running processes of the specified container.                |

### Clean up

| Command                           | Description                                                              |
| --------------------------------- | ------------------------------------------------------------------------ |
| `docker container stop <CONTAINERNAME>`     | Stop the running processes in the specified container.         |
| `docker container stop $(docker ps -a -q)`  | Stop all containers.                                           |
| `docker container prune`                    | Remove all stopped containers.                                 |
| `docker container rm <CONTAINERNAME>`       | Remove one or more stopped containers.                         |
| `docker container rm $(docker ps -a -q)`       | Remove all containers.                         |
| `docker container rm -f <CONTAINERNAME>`    | Remove a running container by forcefully killing its processes (should rarely be used). |

Here's an analogy to help you understand when to use `docker container rm -f`.

* `docker container rm` is like selecting **Shut Down**in a menu on your 
  machine. It is a "soft" stop and remove which give the computer time to clean 
  up whatever is running.
* `docker container rm -f ` is like pulling the plug on the wall (for desktops) 
  or removing the battery (on laptops or mobile devices). It is a "hard" stop 
  and remove with no opportunity to save or clean up. It is necessary if you
  end up with a runaway process (or infinite loop).

## More about the `run` command

Optionally, you can use 
`docker container run <OPTIONS> <IMAGENAME:TAGNUMBER> <COMMAND>` to run an image 
with specified option flags, a version (tagnumber), and a command. Check
out the [Docker container run documentation][run-docs] for a list of options and 
flags.

## Order matters

Note that all flags (i.e. `-it`) need to come **before** non-flags; otherwise,
the flags after the non-flags are ignored or applied to the last non-flag item.

* GOOD: `docker container run -it alpine sh`
  (the `-it` docker command flags are BEFORE non-flags)
* BAD: `docker container run alpine sh -it`
  (the `-it` docker command flags are AFTER non-flags)
* GOOD: `docker container run alpine ls -l`
  (no docker flags; rather, this flag is part of the `<COMMAND>`, 
   specifically `ls -l`)

## For future reference

Feel free to bookmark the official [Docker Cheatsheet][docker-cheat].


[run-docs]: https://docs.docker.com/engine/reference/commandline/container_run/
[docker-cheat]: https://www.docker.com/sites/default/files/Docker_CheatSheet_08.09.2016_0.pdf