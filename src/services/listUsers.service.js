import database from "../database"
/* import users from "../database" */

  const listUsersService =  async () => {
    try {
      const res = await database.query('SELECT * FROM users');
      return res.rows
    } catch (error) {
      throw new Error({
        message: message.error
      })
    }
    /* const listUsers = users.map(({email,name,password,id,isAdm,updateOn,createdOn})=>{
      return {
        email,name,password,id,isAdm,updateOn,createdOn
      }
    })
    return listUsers */
  }

export default listUsersService