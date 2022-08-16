import database from "../database"
import users from "../database"

  const updateUserService =  async(id, name, email) => {
    try {
      const res = await database.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',[name,email,id])

      /* const userUpdated = {
        id,
        name,
        email
      }

      const userIndex = users.findIndex(element => element.id === id) */

      if(res.rows.length === 0) {
        return "User not found"
      }

      /* users[userIndex] = { ...users[userIndex], ...userUpdated }; */

      return {message: 'User updated', user: res.rows[0]} /* users[userIndex] */

    } catch (error) {
      throw new Error(error)
    }
  }

export default updateUserService