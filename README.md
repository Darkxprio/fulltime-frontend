# Description

Project developed with React, Typescript, Redux, Tailwind and Axios.
I use the API from Github to catch the commits made on this repository and the backend repository of this same project and receive the information to show it.

## Features

This project provides the following features:

- A backend API for tracking commits made on a GitHub repository.
- A frontend website that displays the commit history of a GitHub repository.

# Installation

## Cloning the Repository

At first, you have to clone the repository in the directory to you prefer, open the terminal and write/copy this code.

```bash
$ git clone https://github.com/Darkxprio/fulltime-frontend.git
```

## Installing

Now you have to get inside of the directory.

```bash
$ cd fulltime-frontend
```

Install yarn to download all the modules of the project.

```bash
$ yarn install
```

## Running the app

Run the code bellow to start the app.

```bash
# development
$ yarn start
```

## Authentication

Usually when you run the app, your browser opens up with the url of the app. But if you wanna check if the app is running and you're not running in your computer another app go to the next url in your browser.

http://localhost:3000/

Note: If you have another apps running, try with the port 3001, 3002, 3003, 3004... etc.

## Notes

- The app is listening the port 4000 because the backend has the same port, if you made changes in the backend port, you have to do it here too, you have to go to 'src/Axios/config.js' and change the number of the port.
- The project is developed with Yarn Version 1.22.19, try to have it or a most recent version to run the project, you can download it from https://classic.yarnpkg.com/en/docs/install#windows-stable
