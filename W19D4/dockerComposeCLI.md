# Docker Compose CLI

Docker Compose basically takes over the role of the Docker CLI by talking to the Docker server API in the background for you.

## List of Main CLI Commands

| Command                     | Description                                                                  |
| --------------------------- | ---------------------------------------------------------------------------- |
| `docker-compose --help`     | List all Docker-Compose commands and options available.                      |
| `docker-compose up`         | Set up your volumes, networks, and start the specified containers.           |
| `docker-compose up --build` | Build images before setting up volumes and networks to start the containers. |
| `docker-compose down`       | Stop and remove all containers and networks.                                 |
| `docker-compose down -v`    | Stop and remove all volumes, containers, and networks.                       |

No more removing containers by hand! Docker Compose allows us to use simple single line commands. 
