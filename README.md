# Primely SIS

Primely is an admin dashboard for a student information system

## Introduction

> A full stack web application built for the ALC 2.0 intermediate web development track challenge. It meets the basic requisites of a Node web api that handles CRUD functionalities from a client.

### Prequistes

Should have latest version of node and npm installed.
Certain aspects of server-side code depends on features in node v8.4 and above

### Getting Started

```js
// Clone repo
git clone 'insert-git-repo-url-here'
// Install server node_modules
yarn add
// Running in dev mode requires a key.js file to configure variables
// Make a key.js file in server/config like this
module.exports = {
    key : 'your-secret-key',
    username : 'your-dev-username',
    password : 'your-password-username'
}
// switch to client-side
cd client
// Install client node_modules
yarn add
// switch back to server-side
cd ..
// start up
npm run dev
```

#### Built With

* Node / express - Server framework
* Mongodb / Mongoose - Database
* React / CRA - client UI framework
* Redux / redux-saga - State management / UI interaction
* React router v4 - Client Routing
* SemanticUI (react) - Styling UI
* JWT /jsonwebtoken - Authentication
* JSONSchema / ajv - Validation
* Git / Heroku - Deployment

#### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

#### Acknowledgments

* Took a course earlier on react by Stephen Grinder which helped me a lot in the client-side CRUD flow and making api requests
* Had to watch many youtube vids and read articles about authenticating with jwt
* I was only able to implement a simple authentication strategy on login with limitations
