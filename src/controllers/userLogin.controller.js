import userLoginService from "../services/userLogin.service";

    const userLoginController = async (request, response) => {
        const { email, password } = request.body;

        try {
            const userLogin = await userLoginService(email, password);

            return response.json(userLogin);
        } catch (error) {
            return response.status(400).json({
                message: error.message
            })
        }
        
    };

export default userLoginController;