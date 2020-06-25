|Base URL for Deployed API| https://backend-secretfamilyrecipe.herokuapp.com/

|Endpoints|

| Request | URL                  | Description                                           |
|---------|----------------------|-------------------------------------------------------|
| POST    | api/auth/register    | register as a new user                                |
| POST    | api/auth/login       | login as an existing user                             |
| POST    | api/recipes/:id/user | add recipe post for logged in user                           |
| GET     | api/recipes          | get all recipes for all users (needs to be logged in) |
| GET     | api/recipes/:id/user | get recipe posts for logged in user                          |
| GET     | api/recipes/:id      | get specific recipe for user                          |
| PUT     | api/recipes/:id      | edit specific recipe for user                         |
| DELETE  | api/recipes/:id      | delete specific recipe for user                       |