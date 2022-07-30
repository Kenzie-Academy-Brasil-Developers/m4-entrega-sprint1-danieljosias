import userProfileService from "../services/userProfile.service";

  const userProfileController = (request, response) => {
    try{
      const users = userProfileService(request.body.email,request.body.password)

      if(users){
        return response.status(200).json(users)
      }
      
    }catch(error){
      if(error){
        return response.status(400).json(error.message)
      }
    }
  };

export default userProfileController;