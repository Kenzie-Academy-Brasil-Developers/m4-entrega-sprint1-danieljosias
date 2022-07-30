import listUsersService from "../services/listUsers.service"

  const listUsersController = (request, response) => {
    
    try{
      const users = listUsersService()
      return response.status(200).json(users)
      
    }catch(error){
      if(error){
        return response.status(400).json(error.message)
      }
    }
    
  }

export default listUsersController