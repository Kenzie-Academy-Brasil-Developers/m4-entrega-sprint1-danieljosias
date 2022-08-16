import express from 'express'
import router from './routes/users.routes'
import { startDatabase } from './database/index'

const app = express()
app.use(express.json())

app.use("/users",router)

app.listen(3000, () =>{
    console.log('running port 3000');
    startDatabase()
})