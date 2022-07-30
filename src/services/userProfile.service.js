import bcrypt from 'bcryptjs';
import users from '../database'

const userProfileService = (email) => {
  const isUser = users.find(user=> user.email === email)

  const actualUser = {
    name: isUser.name,
    email: isUser.email,
    id: isUser.id,
    password: isUser.password,
    isAdm: isUser.isAdm
  }
  
  return actualUser
}

export default userProfileService