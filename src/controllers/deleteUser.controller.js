import deleteUserService from "../services/deleteUser.service"
    
  const deleteUserController = async (request, response) => {
    const { id } = request.params
    const { userId } = request.body
    try {
      const deletedUser =  await deleteUserService(userId,id)
      if(deletedUser.message === "Missing admin permissions"){
        return response.status(401).json(deletedUser)
      }else{
        return response.status(200).json(deletedUser)
      }

    } catch (error) {
        return response.status(400).json(error.message)
    } 
    
  }

export default deleteUserController