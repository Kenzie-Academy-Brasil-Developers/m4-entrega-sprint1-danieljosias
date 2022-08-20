import database from "../database/index";

const verifyIsAdm = async (request,response,next) =>{
    //body da requisição(insomnia)(atual) 
    const { userId } = request.body

    try {
        //banco de dados(beekeper)(antiga)
        const users = await database.query(`SELECT users.isadm FROM users WHERE id = $1`,[userId]) 

        if(users.rows[0].isadm === true){
            next()
        }else{
            return response.status(401).json({message: 'Unauthorized'})
        }

    } catch (error) {
        return response.status(401).json({message: 'Unauthorized'})
    }
}

export default verifyIsAdm