# Common Docker Network Commands

Here are some commands you'll find yourself running often while working with
networks. 

## Create

| Command                           | Description                                                              |
| --------------------------------- | ------------------------------------------------------------------------ |
| `docker network create <name of network>` | Create a network with the given name.                          |

## List

| Command                           | Description                                                              |
| --------------------------------- | ------------------------------------------------------------------------ |
| `docker network ls` | List all networks.                          |

## Cleanup

| Command                           | Description                                                              |
| --------------------------------- | ------------------------------------------------------------------------ |
| `docker network rm <NETWORK NAME/ID>` | Removes the network (make sure there are no containers connected to it).                          |