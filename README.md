# Elgo API Documentation

## Endpoints :

List of available endpoints:

- `GET /categories`
- `POST /posts`
- `GET /posts`
- `GET /posts/:id`
- `DELETE /posts/:id`

## 1. GET /categories

### Description

- Get all the categories data

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

## 2. POST /posts

### Description

- Create a new post data

### Request

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

## 3. GET /posts

Description:

- Get all posts from database

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

## 4. GET /posts/:id

Description:

- Get post by id

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

## 5. DELETE /posts/:id

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

_404 - Not Found_

```json
{
  "message": "Movie not found"
}
```

## Global Error

### Response

_500 - Internal Server Error_

```json
{
  "message": "Internal server error"
}
```
