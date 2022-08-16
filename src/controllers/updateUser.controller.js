import database from "../database"
import updateUserService from "../services/updateUser.service"

  const updateUserController = async (request, response) => {
    const { id } = request.params
    const { name, email } = request.body

    try {
      const updatedUser = await updateUserService(id, name, email)
      return response.json(updatedUser)
      
    } catch (error) {
      return response.status(400).json(error.message)
    }
  }

export default updateUserController