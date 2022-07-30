import users from '../database/index'
import { v4 as uuidv4 } from 'uuid'
import * as bcrypt from 'bcryptjs'

const createUserService = async (email,name,password,isAdm) => {

    const hashedPassword = await bcrypt.hash(password, 10);
    const date = new Date()

    const newUser = {
        email,
        name,
        password: hashedPassword,
        id: uuidv4(),
        isAdm,
    }

    users.push(newUser)

    const readUser = {
        email,
        name,
        id: newUser.id,
        isAdm,
        createdOn: date,
        updatedOn: date
    }
    
    return readUser
}

export default createUserService