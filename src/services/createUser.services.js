import database from '../database';
/* import { v4 as uuidv4 } from 'uuid' */
import * as bcrypt from 'bcryptjs'

const createUserService = async (email,name,password,isAdm) => {
    /* const date = new Date() */

   /*  const newUser = {
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
    } */

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const res = await database.query(
            "INSERT INTO users(email,name,password,isAdm) VALUES($1,$2,$3,$4) RETURNING *",
            [email,name,hashedPassword,isAdm]
        )

        return res.rows[0]

    } catch (error) {
        throw new Error(error)
    }
    
}

export default createUserService