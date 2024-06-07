# Brewery Review System

## Screenshots

![image](https://github.com/kamal01singh/brewery-review-system/assets/106004575/e343af56-82a2-47fc-8e9d-86cf259ddea7)

![image](https://github.com/kamal01singh/brewery-review-system/assets/106004575/7664bdb9-4d11-4d69-8411-09349b51563d)

![image](https://github.com/kamal01singh/brewery-review-system/assets/106004575/2d4bdcc9-1431-48b1-907d-3e9040ac0d2b)

![image](https://github.com/kamal01singh/brewery-review-system/assets/106004575/d3f5e87a-bc85-4338-918a-890982785cb5)


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
- ``` git clone https://github.com/kamal01singh/brewery-review-system.git ```
-   3rd party api ```https://www.openbrewerydb.org/documentation ```
- Installing all dependencies
   - ``` npm i ```
- To run server in Developer mode
  - ```npm run dev```
- To run server in Production mode
  - ``` npm run prod```
- To access the web application on the browser
  - [localhost:3000](http://localhost:3000) or use .env to set the port as required
