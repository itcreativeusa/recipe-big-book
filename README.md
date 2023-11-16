# recipe-big-book

## Description

Recipe Big Book is a robust full-stack application for recipe discovery and sharing, catering to food enthusiasts. Users can explore diverse cuisines, contribute recipes, and utilize a user-friendly search bar for seamless exploration. Built on Node.js, Express.js, and Handlebars.js, with MySQL and Sequelize ORM for efficient data management, the platform prioritizes user security through authentication features and is deployed on the Heroku web server.

Deployed application link on GitHub
https://github.com/itcreativeusa/recipe-big-book

Deployed application link on Heroku
https://recipe-big-book-576bcce711de.herokuapp.com/

## Table of Contents

- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Mock-Up](#mock-up)
- [Credits](#credits)
- [License](#license)

## Installation

No installation required. Please visit the deployed application link on Heroku.
If users would like to run the application locally, please follow the steps below:

- Clone the repository from GitHub
- Run `npm install` to install all dependencies
- add .env file with the following information:

  - DB_NAME=your_database_name
  - DB_USER=your_username
  - DB_PW=your_password

- Run `npm start` to start the application
- Open the application in the browser at `http://localhost:3001`

## Technologies Used

- Node.js
- Express.js
- Handlebars.js
- MySQL
- Sequelize ORM
- Multer
- Heroku

## Usage

This website allows users to discover and post food recipes. Users will be able to search for recipes based on ingredients and categories. Users can also sign up, log in, and post their favorite food recipe to their profile.

## Mock-Up

Screenshot located in `./uploads/` folder.
![recipe-big-book-home](./uploads/screenshot-1.png)
![recipe-big-book-recipe-card](./uploads/screenshot-2.png)
![recipe-big-book-add-recipe](./uploads/screenshot-3.png)

## Credits

Documetation for the following npm packages were used to create this application:
https://www.npmjs.com/package/multer

Here documentation for Sequelize fearch by word
`[Op.like]: '%hat'`
https://sequelize.org/docs/v6/core-concepts/model-querying-basics/

Unsplash for the background images used in the application:
https://unsplash.com/

## License

Please refer to the LICENSE in the repo.
