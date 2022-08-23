# React-Test-Login-Register-MySQL

## Installation

### Client

  1. `$ cd client`
  2. `$ npm install`
  3. `$ npm run dev`
  
### Server

  1. Change your mySQL database data `server/index.js`
  2. `$ cd server`
  3. `$ npm install`
  4. `$ npm rum devStart`

### Api

1. Change your mySQL database
2. `$ cd api`
3. `$ npm install`
4. `$ npm run start:dev`

## Functionalities

+ Register user with encrypted password.
+ Check to not allow the same user to register twice.
+ Verification of email and encrypted password to login.
+ Show and hide the list of registered users.
+ Show which user is logged in.

## How to use

### Client
+ http://localhost:3000/

### Server or Api
+ http://localhost:3001/user

## Used Libraries

### Front-end
+ `formik` 
+ `yup` 
+ `axios` 

### Back-end

+ `bcrypt ` 
+ `express`
+ `mysql`
+ `nodemon`

### Back-end in NestJS

+ `NestJS` 
+ `TypeORM`
+ `mysql`

## Observation

+ There are two versions of the API, one using nest and one with espress.

+ The API that uses NestJS can connect perfectly with the database that is configured. It returns all the records of the database when it is requested but as for the post and get methods, it returns status 500 which means an internal error on the server (logic error).

+ As for the API with express, it is working perfectly and the error with the API with NestJS does not occur.

+ I am submitting both for review.