Base URL for Deployed API
https://backend-secretfamilyrecipe.herokuapp.com/

Endpoints

Request     URL                     Description
POST        api/auth/register       register as a new user
POST        api/auth/login          login as an existing user
POST        api/recipes/:id/user    add post for logged in user
GET         api/recipes             get all recipes for all users (needs to be logged in)
GET         api/recipes/:id/user    get posts for logged in user
GET         api/recipes/:id         get specific recipe for user
PUT         api/recipes/:id         edit specific recipe for user
DELETE      api/recipes/:id         delete specific recipe for user

Table Requirements

Users

Name        Type        Required    Unique      Notes
id          integer     yes         yes         users id (auto generated)
name        string      no          no          users name
email       string      no          yes         users email
username    string      yes         yes         users username (max 500 char)
password    string      yes         no          users password (max 500 char)

Recipes

Name        Type        Required    Unique      Notes
id          integer     yes         yes         recipes id (auto generated)
title       string      yes         no          recipes title (max 1000 char)
creator     string      no          no          creator of recipe
ingredients string      yes         no          ingredients for the recipe (max 10000 char)
directions  string      yes         no          step-by-step directions for a recipe (max 10000 char)
category    string      yes         no          category for a recipe - breakfast, lunch, dinner, dessert, ect. (max 300 char)
user_id     integer     yes         no          users id associated with recipe - foreign key
