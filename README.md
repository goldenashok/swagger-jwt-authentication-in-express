# swagger-jwt-authentication-in-express
Implemented Swagger with JWT token globally in express api

Implemented Below Feature
- Cors with whitelist option
- openapi
- swagger for get, post, put, delete
- swagger for JWT token
- dotenv feature
- JWT (json web token)
- nodemon feature


swagger screen shot
![image](https://github.com/goldenashok/swagger-jwt-authentication-in-express/assets/13637127/01ad7148-f8d4-4c48-879d-d3d4acc59483)


Swagger Authentication Screen ( Only give token without give Bearen keyword)
![image](https://github.com/goldenashok/swagger-jwt-authentication-in-express/assets/13637127/c48eabd5-6707-46bc-a5a7-38d25d3ef3f1)

http://localhost:3000
![image](https://github.com/goldenashok/swagger-jwt-authentication-in-express/assets/13637127/13b5b13a-d999-4c2a-a8b7-c62bde0eed82)

For login [Method : POST] http://localhost:3000/login

Body Data {"username": "ashok"}
![image](https://github.com/goldenashok/swagger-jwt-authentication-in-express/assets/13637127/3f019838-8e85-4235-8c66-42f35f190ce5)


Calling other API with Authorization token http://localhost:4000/protect

Need to pass Authorization token in the header link below image
![image](https://github.com/goldenashok/swagger-jwt-authentication-in-express/assets/13637127/605755a6-4d91-4f5d-8384-b79aee9937e8)


