import database from "../database"

  const updateUserService =  async(name,email,id,userId) => {
    try {
      if(userId !== id){
        return {message: "Missing admin permissions"}
      }
      
      const res = await database.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',[name,email,id])

      if(res.rows.length === 0) {
        return "User not found"
      }

      return res.rows[0]

    } catch (error) {
      throw new Error(error)
    }
  }

export default updateUserService