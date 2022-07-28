import express from 'express'

import createUserController from './controllers/createUser.controller'
import listUsersController from './controllers/listUsers.controller'
import updateUserController from './controllers/updateUser.controller'
import deleteUserController from './controllers/deleteUser.controller'
import userLoginController from './controllers/userLogin.controller'

const app = express()
app.use(express.json())

app.get("/users", listUsersController);

app.post('/users', createUserController)

app.put("/users/:id", updateUserController)

app.delete("/users/:id", deleteUserController)

app.post("/users/login", userLoginController);
    
app.listen(3001)