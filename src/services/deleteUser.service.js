import database from "../database"

  const deleteUserService = async (userId,id) => {
    try {
      if(userId !== id){
        return {message: "Missing admin permissions"}
      }
      const res = await database.query('DELETE FROM users WHERE id = $1 RETURNING *',[userId])

      if(res.rows.length === 0) {
        return "User not found"
      }

      return {message: "User deleted with success"}

    } catch (error) {
        throw new Error(error)
    }
    
  }

export default deleteUserService