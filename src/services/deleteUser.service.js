import database from "../database"
import users from "../database"

  const deleteUserService = async (id) => {
    try {
      const res = await database.query('DELETE FROM users WHERE id = $1 RETURNING *',[id])

      /* const userIndex = users.findIndex(element => element.id === id) */

      if(res.rows.length === 0) {
        return "User not found"
      }

      /* users.splice(userIndex, 1) */

      return "Usuário deletado"

    } catch (error) {
        throw new Error(error)
    }
    
  }

export default deleteUserService