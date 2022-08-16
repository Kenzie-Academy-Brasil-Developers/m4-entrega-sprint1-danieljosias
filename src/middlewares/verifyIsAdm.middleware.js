import database from "../database/index";
import users from "../database";

const verifyIsAdm = async (request,response,next) =>{
    const {userId} = request.body
    try {
        const res = await database.query(`SELECT * FROM users WHERE id = $1`,[userId])

        if(res.rows.length > 0){
            next()
        }

    } catch (error) {
        return response.status(401).json({message: 'Unauthorized'})
    }
}

export default verifyIsAdm