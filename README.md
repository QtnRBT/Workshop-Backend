# Workshop backend

## Introduction and requirements

To start with this workshop, you first need to have docker and docker-compose installed.
Documentation for installing them can be found here : https://docs.docker.com/desktop/install/windows-install/ and https://docs.docker.com/compose/install/.
Once you have docker installed, you need to install the packages of this very project, in order for it to start properly. The package.json file being already present, all you need to do is type `npm install` in your terminal.

## Starting the database server

In order to start the database server, open a terminal in this directory, make sure you are in workshop-backend, and type in this command : `docker-compose up -d --build`.
What this command does is it creates a mariadb server instance and start phpmyadmin to make sure you can monitor the databases.
Once started, you can visit `http://localhost:8080` and login as `root` with the `admin` password.

## Starting the API server

To start the API, simply type `npm start` after having installed the packages. You should be good to go now.

## Applying base state to database

To get this workshop started, i've created the base schema of the database under `prisma/schema.prisma`. This file is our entrypoint to defining what our database should look like.
Notice 3 parts in this file :

- the generator : is used to tell prisma which method of compiling to use, we won't touch this part.
- the datasource : is the part which tells prisma where to find and put the data. Right now, you can see we are using MySQL as our data provider, and the url defines which server to use, it is located in the `.env` file.

To apply the changes to our new database server, proceed as follows :

- make sure the database server (docker) is started.
- make sure you have installed all the dependencies with npm
- execute the command `npx prisma db push`.

This will push the current state (schema) to our database server.
Now, go back to phpMyAdmin and notice there is a new database called `workshop`, which contains the `Category` table.

## Managing data

Now that we have created our database and table, we want to add data to it.
Before starting to code anything, let's understand the structure of the data.
Run `npx prisma studio` and notice a new internet tab opening. This is the equivalent to phpMyAdmin, but for Prisma.
In this dashboard, we can add / remove and manage data.
Try creating a "Bagues" category from here.

## With API

Now, try and create data with the current API setup.
Head to `src/endpoints/categories.ts` and `src/index.ts` to learn more.

## Your turn to play

Now that you have added data to the category table, try and create a new model for products and creating a CRUD for it.
Note that you'll have to edit the Category model in order to create a relationship between Product and Category.

## Conclusion

Congrats, you have now created a small-scaled version of our final API.
In this workshop, we've gone through the concepts of servers, dockerization, structured data storing, data managing and APIs.