# -Inverted-Index-Api
[![Build Status](https://www.travis-ci.org/clintfidel/inverted-index-api.svg?branch=development)](https://www.travis-ci.org/clintfidel/inverted-index-api)
[![Coverage Status](https://coveralls.io/repos/github/clintfidel/inverted-index-api/badge.svg?branch=development)](https://coveralls.io/github/clintfidel/inverted-index-api?branch=development)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f6696a952169468eac1682893daaebc2)](https://www.codacy.com/app/clintfidel/inverted-index-api?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=clintfidel/inverted-index-api&amp;utm_campaign=Badge_Grade)
## Introduction
*  **`Inverted-Index-Api`** is an Aplication developed with JavaScript/Node for implementing efficient search functionality for softwares.
*  It has the following features;
  *  Create Index for a valid Json file having more than content(book) one  at the same time.
  *  Search created indexes for word tokens;
  *  Return an error message properly for invalid Json files, malformed json file or an empty json file without breaking app.
  *  Return proper message for term not found in the file content created;
  *  Handle internal errors properly without breaking the code;

## APP Dependencies

### Back End Dependencies
*  This app's functionality depends on multiple NPM packages including;
  *  **[Express](https://www.npmjs.com/package/express)** - This framework enables robust routing and building web Applications and API's(endpoints) enabling high performance of the App. 
  *  **[Body-Parser](https://www.npmjs.com/package/body-parser)** - This package parse incoming request bodies in a middleware and makes it available under *req.body* property
  *  **[dotenv](https://github.com/kennethreitz/autoenv)** - Enables loading environment variables from a .env file into process.env. for proper listening of server.

## Installation and setup
*  Create a directory of choice on `terminal`.
*  Clone this repository on that directory.
  *  Using SSH;

    >`git clone git@github.com:*********/inverted-index-api.git`

  *  Using HTTPS;

    >`git clone https://github.com/********/inverted-index-api.git`

*  Navigate to the repo's folder on your computer
  *  `cd inverted-index-api/`
*  Install the app's backend dependencies using:. 
  *  `npm install`

    >For proper usage you need to have **nodeJs** and **npm** installed on your local system.
    >For efficient and effective interaction  with endpoints, install and use the google app; **Postman**

* Run the app
  *  `npm start`
  *  Running the command above will run the app at localhost://4000.

## Tests
*  The tests have been written using Jasmine-node **[TestCase](https://github.com/mhevery/jasmine-node)** and Supertest **[TestCase](https://www.npmjs.com/package/supertest)** class.
*  They are run using the **`coverage`** tool in order to generate test coverage reports.
*  To run the tests, navigate to the project's folder(SPECIFIED DIRECTORY) and open
*  Run the following command on terminal.
  *  `gulp run-tests`
* To view coverage, Run the following command on the terminal.
  * `gulp coverage`
*  If the tests are successful, they will complete without failures or errors.
## App Usage on postman:
* Start the server using **`npm start`** 
* Navigate to postman app
* Select **`Post`** to post a request 
* Enter the url localhost://4000/api/v0/createIndex
* Under the **`body`**  select the x-www-form-urlencoded 
* create an index with a **`fileName`** and **`fileContent`**
* copy a valid Json file which should be an **`[]`** of objects containing a **`title and text`** 
* fileName contains a **fileName** e.g **validBook.json**
* fileContent contains a valid json file e.g 
```
[{
"title": "......."
"text":"............."
}]
```
* SearchIndex functions effectively after the index of the file content has been created.
* Create an index first 
* enter the url for the search using localhost://4000/api/v0/searchIndex 
* include the **`fileName`** and **`term`** to be searched
* filename contains name of created index and the **`term`** e.g 
**fileContent:validBook.json**,**term: string**
## App limitation
* Index of a file can be created one at a time(**no multiple files**)
* Cannot upload file
*  
