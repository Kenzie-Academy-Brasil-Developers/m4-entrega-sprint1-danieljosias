import createUserService from "../services/createUser.services";

  const createUserController = async (request, response) => {
    const { email, name, password, isAdm } = request.body;

    try {
      const user = await createUserService(email, name, password, isAdm);
      return response.status(201).json(user);
      
    } catch (error) {
        return response.status(400).json({
          message: error.message
        })
    }
    
  };

export default createUserController;