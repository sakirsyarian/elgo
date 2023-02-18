# Elgo API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `GET /categories`
- `POST /posts`
- `GET /posts`
- `GET /posts/:id`
- `DELETE /posts/:id`

## 1. GET /register

### Description

- Create a new user data

### Request

body

```json
{
  "email": "string (required)",
  "password": "string (required)"
}
```

### Response

_200 - Ok_

```json
{
  "status": "string",
  "data": {
    "id": "integer",
    "email": "string"
  }
}
```

_400 - Bad Request_

```json
{
  "message": ["Email cannot be null", "Password cannot be null"]
}
```

or

```json
{
  "message": ["Email cannot be empty", "Password cannot be empty"]
}
```

or

```json
{
  "message": ["Password must be between 5 and 20 characters"]
}
```

or

```json
{
  "message": ["email must be unique"]
}
```

## 2. GET /login

### Description

- Enter into the system

### Request

body

```json
{
  "email": "string (required)",
  "password": "string (required)"
}
```

### Response

_200 - Ok_

```json
{
  "status": "string",
  "access_token": "string",
  "data": {
    "id": "integer",
    "email": "string"
  }
}
```

_401 - Unauthorized_

```json
{
  "message": "Invalid email/password"
}
```

## 3. GET /categories

### Description

- Get all the categories data

### Request

headers

```json
{
  "access_token": "string (required)"
}
```

### Response

_200 - Ok_

```json
{
  "status": "string",
  "data": [
    {
      "id": "integer",
      "name": "string",
      "createdAt": "date",
      "updatedAt": "date"
    },
    ...,
  ]
}
```

## 4. POST /posts

### Description

- Create a new post data

### Request

headers

```json
{
  "access_token": "string (required)"
}
```

body

```json
{
  "title": "string (required)",
  "content": "string (required)",
  "imgUrl": "string",
  "CategoryId": "integer",
  "AuthorId": "integer"
}
```

### Response

_201 - Created_

```json
{
  "status": "string",
  "data": {
    "id": "integer",
    "title": "string",
    "content": "string",
    "imgUrl": "string",
    "CategoryId": "integer",
    "AuthorId": "integer",
    "updatedAt": "date",
    "createdAt": "date"
  }
}
```

_400 - Bad Request_

```json
{
  "message": ["Title cannot be null", "Content cannot be null"]
}
```

or

```json
{
  "message": ["Title cannot be empty", "Content cannot be empty"]
}
```

## 5. GET /posts

Description:

- Get all posts from database

### Request

headers

```json
{
  "access_token": "string (required)"
}
```

### Response

_200 - OK_

```json
{
  "status": "ok",
  "data": [
    {
      "id": "integer",
      "title": "string",
      "content": "string",
      "imgUrl": "string",
      "CategoryId": "integer",
      "AuthorId": "integer",
      "createdAt": "date",
      "updatedAt": "date"
    },
    ...,
  ]
}
```

## 6. GET /posts/:id

Description:

- Get post by id

### Request

headers

```json
{
  "access_token": "string (required)"
}
```

params

```json
{
  "id": "integer (required)"
}
```

### Response

_200 - OK_

```json
{
  "status": "string",
  "data": {
    "id": "integer",
    "title": "string",
    "content": "string",
    "imgUrl": "string",
    "CategoryId": "integer",
    "AuthorId": "integer",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

_404 - Not Found_

```json
{
  "message": "Post not found"
}
```

## 7. DELETE /posts/:id

Description:

- Delete post by id

### Request

params

```json
{
  "id": "integer (required)"
}
```

### Response

_200 - OK_

```json
{
  "message": "<entity name> success to delete"
}
```

_403 - Forbidden_

```json
{
  "message": "You are not authorized to access this page"
}
```

_404 - Not Found_

```json
{
  "message": "Movie not found"
}
```

## Global Error

### Response

_401 - Unauthorized_

```json
{
  "message": "Invalid token"
}
```

_500 - Internal Server Error_

```json
{
  "message": "Internal server error"
}
```
