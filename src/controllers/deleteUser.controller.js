import deleteUserService from "../services/deleteUser.service"
    
  const deleteUserController = async (request, response) => {
    const { id } = request.params

    try {
      const deletedUser =  await deleteUserService(id)
      return response.json(deletedUser)

    } catch (error) {
        return response.status(400).json(error.message)
    } 
    
  }

export default deleteUserController