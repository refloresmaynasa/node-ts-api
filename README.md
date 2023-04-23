# API Project (Node.js and Typescript)
[![Build the Node.js project](https://github.com/refloresmaynasa/node-ts-api/actions/workflows/build.yml/badge.svg)](https://github.com/refloresmaynasa/node-ts-api/actions/workflows/build.yml)

This is a hands-on API project build with Node.js and Typescript.

## Table of contents

- Summary
- Pre-requisites
- Getting started
  - TypeScript + Node
  - Docker compose (MongoDB)
  - Set environment variables
  - Build and run the project
- Information for developers

## Summary

This hands-on API project has the following dependencies:

| Module                          | Version                         | 
| -------------------------------------------- | ------------------------------------| 
| bcryptjs | ^2.4.3|
| cors    | 2.8.5|
| dotenv  | ^16.0.3|
| express | ^4.18.2|
| jsonwebtoken  | ^9.0.0|
| mongoose  | ^7.0.4|
| multer  | ^1.4.5-lts.1|

To store data, use the NoSQL ***MongoDB*** database

## Pre-requisites

- Install [Node.js](https://nodejs.org/en/) version 18.15.0 (Used in this project)

Aditional tools:
- **Editor:** Visual Studio Code
- **Extension:** REST Client (To run REST files) 

## Getting started

- Clone the repository
``` powershell
git clone https://github.com/refloresmaynasa/node-ts-api.git
```
- Install dependencies
``` powershell
cd node-ts-api
npm install
```
### TypeScript + Node

Add Typescript to project `npm`.
``` powershell
npm install -D typescript
```

### Docker compose (MongoDB)

The project contains a `docker-compose.yml` file to up a **MongoDB** instance.
``` powershell
docker-compose up -d
```

### Set environment variables

To set the project environment variables, you must rename the `.env.example` file to `.env` and then set the correct values.

### Build and run the project
``` powershell
npm run start
```
  Navigate to `http://localhost:3002/api/products`

## Information for developers

In the solution, there are `.rest` files in the `tests` folder to invoke endpoints created in the project, and the default variables are set in the `.vscode/settings.json` file.

----
- :memo: Author: [Ricky ***refloresmaynasa***](https://github.com/refloresmaynasa)
----