import users from "../database"

  const listUsersService = () => {
    const listUsers = users.map(({email,name,password,id,isAdm,updateOn,createdOn})=>{
      return {
        email,name,password,id,isAdm,updateOn,createdOn
      }
    })
    return listUsers
  }

export default listUsersService