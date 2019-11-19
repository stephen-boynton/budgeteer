import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const authentication = (token) => {
  if (!token) return null;
  const verified = jwt.verify(token, process.env.AUTH_STRING || '');
  return verified.email;
}

export const makeToken = (email) => {
  const token = jwt.sign({ email }, process.env.AUTH_STRING || '');
  return token;
}

export const hashPass = async (pass) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(pass, salt);
  return hash;
}

export const verifyPass = async (pass, dbPass) => {
  return bcrypt.compare(pass, dbPass)
}
