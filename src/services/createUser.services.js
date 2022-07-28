import users from '../database/index'
import { v4 as uuidv4 } from 'uuid'
import * as bcrypt from 'bcryptjs'

const createUserService = async (email,name,password) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
        email,
        name,
        password: hashedPassword,
        id: uuidv4()
    }

    users.push(newUser)

    const readUser = {
        email,
        name,
        id: newUser.id
    }
    
    return readUser
}

export default createUserService