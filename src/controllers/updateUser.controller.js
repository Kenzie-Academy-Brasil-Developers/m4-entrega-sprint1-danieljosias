import updateUserService from "../services/updateUser.service"

  const updateUserController = async (request, response) => {
    const { id } = request.params
    const { userId,name, email } = request.body

    try {
      const updatedUser = await updateUserService(name, email, id, userId)

      if(updatedUser.message === "Missing admin permissions"){
        return response.status(401).json(updatedUser)
      }else{
        return response.status(200).json(updatedUser)
      }
      
    } catch (error) {
      return response.status(400).json(error.message)
    }
  }

export default updateUserController