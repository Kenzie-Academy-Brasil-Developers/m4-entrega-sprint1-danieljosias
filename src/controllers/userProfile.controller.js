import userProfileService from "../services/userProfile.service";

  const userProfileController = async (request, response) => {
    const { email } = request.body

    try{
      const users = await userProfileService(email)
      return response.json(users)
      
    }catch(error){
      if(error){
        return response.status(400).json(error.message)
      }
    }
  };

export default userProfileController;