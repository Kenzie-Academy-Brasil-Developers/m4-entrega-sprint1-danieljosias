import bcrypt from 'bcryptjs';
import database from '../database'

const userProfileService = async (email) => {
  const res = await database.query('SELECT * FROM users WHERE email = $1',[email])
  const {id,name,password,isadm} = res.rows[0]

  if(res.rows.length === 0) {
    return "User not found"
  }

  const isUser = {
    id: id,
    name: name,
    password: password,
    isadm: isadm
  }
  
  return isUser
}

export default userProfileService