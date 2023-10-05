# Workshop backend
## Introduction and requirements
To start with this workshop, you first need to have docker and docker-compose installed.
Documentation for installing them can be found here : https://docs.docker.com/desktop/install/windows-install/ and https://docs.docker.com/compose/install/

## Starting the database server
In order to start the database server, open a terminal in this directory, make sure you are in workshop-backend, and type in this command : docker-compose up -d --build.
What this command does is it creates a mariadb server instance and start phpmyadmin to make sure you can monitor the databases.