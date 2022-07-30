import users from "../database";

const verifyIsAdm = (request,response,next) =>{
    const {userId} = request.body
    const user = users.find((element) => element.id === userId);

    if(user.isAdm){
        next()
    }else{
        response.status(401).json({message: 'Unauthorized'})
    }
}

export default verifyIsAdm