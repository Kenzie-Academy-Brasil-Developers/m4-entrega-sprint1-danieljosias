import userLoginService from "../services/userLogin.service";

    const userLoginController = async (request, response) => {
        const { email, password } = request.body;

        try {
            const userLogin = await userLoginService(email, password);
            if(userLogin.message === "Wrong email/password"){
                return response.status(401).json(userLogin);
            }else{
                return response.status(200).json(userLogin);
            }
        } catch (error) {
            return response.status(400).json({
                message: error.message
            })
        }
        
    };

export default userLoginController;