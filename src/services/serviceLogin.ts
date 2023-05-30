import bcrypt from 'bcryptjs';
import jwtUtils from '../utils/jwtUtils';
import UserModel from '../database/models/user.model';

async function login(username: string, password: string): Promise<string> {
  const userModel = await UserModel.findOne({ where: { username } });
  if (!userModel || !bcrypt.compareSync(password, userModel.dataValues.password)) {
    throw new Error('Username or password invalid');
  } 
  return jwtUtils.sing({ id: userModel.dataValues.id, username: userModel.dataValues.password });
}

export default {
  login,
};