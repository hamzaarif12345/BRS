# Brewery Review System

## Overview
This is a web application to search Brewery by City, Type, Name using Brewery APIs (https://www.openbrewerydb.org/documentation).

Users can provied ratings and add reviews.

## Features
- Users can create profile and ratings, reviews and browse nearby breweries.
- user can search based on City, Type, Name.
- Users can refer to other peoples ratings and reviews.

## TechStack
- NodeJS - Backend
- ExpressJS - Handeling routes
- ejs - Its a templating engine
- MongoDB - Store user review and Ratings
- MySQL - Store the signup and login details.

## How to Run
- ``` git clone https://github.com/hamzaarif12345/BRS.git ```
-   3rd party api ```https://www.openbrewerydb.org/documentation ```
- Installing all dependencies
   - ``` npm i ```
- To run server in Developer mode
  - ```npm run dev```
- To run server in Production mode
  - ``` npm run prod```
- To access the web application on the browser
  - [localhost:3000](http://localhost:3000) or use .env to set the port as required
