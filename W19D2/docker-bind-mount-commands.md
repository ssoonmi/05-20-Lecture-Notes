# Common Docker Bind Mount Commands

Here are some commands you'll find yourself running often while working with
bind mounts. 

## Create

| Command                           | Description                                                              |
| --------------------------------- | ------------------------------------------------------------------------ |
| `docker container run --mount type="bind",source="$(pwd)",target="<DESIRED FILE PATH IN CONTAINER>" [OTHER OPTIONS] <IMAGE NAME>` | Run a container with the contents of the container's target path binded to the current directory.                     |