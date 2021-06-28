## Description

This is a simple NestJS service that allows you to get, update, create, and delete items in an Inventory. Items are stored in key-value pairs. The key is the product name and the value is the amount of that product that is currently in the inventory. 

To mock a database and database calls, I am using a JSON file and fs respectively. 

## Endpoints

This API uses Swagger for Documentation. You can test all the endpints below at [http://localhost:3000/api/](http://localhost:3000/api/)

### Get All Inventory Items

**URL** : `http://localhost:3000/store`

**Method** : `GET`

### Get Single Inventory Item by Item Name

**URL** : `http://localhost:3000/store/:name`

**Method** : `GET`

### Upsert Inventory Item

*Note: If the item already exists in the database, the item's amount will be updated. If the item does not exist in the database, it will create a new item in the database with the product name and amount.*

**URL** : `http://localhost:3000/store/:name`

**Method** : `PUT`

**Body** : `String that is the amount you want for the given item` 

*Note: if you are using Postman or other similar product, please use raw body section with type text.*

### Get Single Inventory Item by Item Name

**URL** : `http://localhost:3000/store/:name`

**Method** : `DELETE`

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

## Stay in touch

Thank you for taking the time to look through my project.  

