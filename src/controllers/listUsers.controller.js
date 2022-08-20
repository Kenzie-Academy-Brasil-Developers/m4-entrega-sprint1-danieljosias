import listUsersService from "../services/listUsers.service"

  const listUsersController = async (request, response) => {
    
    try{
      const users = await listUsersService()
      return response.status(200).json({
        users: users
    })
      
    }catch(error){
      if(error){
        return response.status(400).json(error.message)
      }
    }
    
  }

export default listUsersController