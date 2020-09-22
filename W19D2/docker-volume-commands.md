# Common Docker Volume Commands

Here are some commands you'll find yourself running often while working with
volumes. 

## Create

| Command                           | Description                                                              |
| --------------------------------- | ------------------------------------------------------------------------ |
| `docker image inspect <IMAGE NAME>` | Inspect the image information to see where the path to the data is normally stored in its containers.        |
| `docker container run -v name_of_volume:<PATH TO DATA IN IMAGE> [OTHER OPTIONS] <IMAGE NAME>` | Run a container with a volume.                     |

## List

| Command                           | Description                                                              |
| --------------------------------- | ------------------------------------------------------------------------ |
| `docker volume ls` | List all networks.                          |

## Cleanup

| Command                           | Description                                                              |
| --------------------------------- | ------------------------------------------------------------------------ |
| `docker volume rm <VOLUME NAME>` | Removes the volume.                          |