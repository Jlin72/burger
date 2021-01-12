![NPM](https://img.shields.io/npm/l/express) ![npm](https://img.shields.io/npm/v/npm) ![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-green)

# burger
## Table of contents
  1.[Description](#Description)

  2.[Deployed application link](#Deployed-application-link)

  3.[Installation](#Installation)

  4.[Usage](#Usage)

  5.[Screenshots or video](#Screenshots-or-video)

  6.[Credits](#Credits)

  7.[License](#License)
## Description 
  This repository contains all the required code for web application Eat Da Burger to work properly online.
## Deployed application link
    Link to the deployed heroku app: https://eatdaburger-jlin.herokuapp.com/
## Installation
  No installation required to run the app. Simply just click on the deployed application to link to use the app on online.

  However, if the user wants to run the app on localhost. Then please follow the next steps:
  1. Download or clone the repository.
  2. Locate the repo on your console.
  3. On your console type npm install to download all the dependencies requiered to run the app.
  4. Locate either through the console or folder the config folder, open it. Then, open connection.js.
  5. Inside connection.js there will be parameters that are related to a mySQL database. There will be a password parameter, enter your mySQL password inside the ''.
  6. Open the db folder, inside that folder you will find the schema required to start the database. Use that file and start the database. Next, if the user wants, the user can populate the database with the seeds.sql file.
  7. To run the app, enter on your command node server. This will then proceed to run the app using localhost.
## Usage
  To use the app simply enter the name of the burger you want to eat inside the text area. Then press devour on the burgers to eat table to eat the burger.
## Weaknesses
  Limitations with this app is that there is no delete button for once the burgers have been devoured by the user.
## Screenshots or video
    Screenshot of the App on the browser:
  ![App](https://raw.githubusercontent.com/Jlin72/burger/main/public/assets/img/site_screenshot.png)
  Video of the application in use: https://youtu.be/79zJGdVq-dM
## Credits
  Made by: Jhonny Lin (Github: Jlin72 https://github.com/Jlin72)
## License
  MIT License
