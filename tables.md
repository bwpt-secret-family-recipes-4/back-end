Table Requirements

Users

| Name     | Type    | Required | Unique | Notes                         |
|----------|---------|----------|--------|-------------------------------|
| id       | integer | yes      | yes    | users id (auto generated)     |
| name     | string  | no       | no     | users                         |
| email    | string  | no       | yes    | users email                   |
| username | string  | yes      | yes    | users username (max 500 char) |
| password | string  | yes      | no     | users password (max 500 char) |

Recipes

| Name        | Type    | Required | Unique | Notes                                                                 |
|-------------|---------|----------|--------|-----------------------------------------------------------------------|
| id          | integer | yes      | yes    | recipes id (auto generated)                                           |
| title       | string  | yes      | no     | recipes title (max 1000 char)                                         |
| creator     | string  | no       | no     | creator of recipe                                                     |
| ingredients | string  | yes      | no     | ingredients for the recipe (max 10000 char)                           |
| directions  | string  | yes      | no     | step-by-step directions for a recipe (max 10000 char)                 |
| category    | string  | yes      | no     | category for a recipe - breakfast, lunch, dinner, ect. (max 300 char) |
| user_id     | integer | yes      | no     | users id tied to recipe - foreign key                                 |
