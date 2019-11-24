import { connect } from '../database'
import { updateBudget } from './updateBudget'
import { hashPass, makeToken, authentication, verifyPass } from './authenticate';
import { AuthenticationError } from 'apollo-server-core';
import budgetSchema from '../database/schema.json';

const newBudget = async () => {
  const { collection } = await connect();
  const schema = {
    ...budgetSchema,
    active_date: new Date().toISOString()
  }
  await collection.insertOne(schema)
}

const getLatestBudget = async () => {
  const { collection } = await connect();

  const response = await collection.find({})
    .sort({ "active_date": -1 })
    .limit(1)
    .toArray();

  const [value] = response
  return value;
}

const saveUser = async ({ email, password }) => {
  const { client } = await connect();
  const collection = client.db('test').collection('users');
  const encryptedPass = await hashPass(password);
  await collection.insertOne({
    user: email,
    password: encryptedPass
  })
  return makeToken(email);
}

const getUser = async ({ email, password }) => {
  const { client } = await connect();
  const collection = client.db('test').collection('users');
  const userInfo = await collection.findOne({
    user: email
  });
  const isVerified = await verifyPass(password, userInfo.password)
  if (isVerified) return makeToken(email);
  throw new AuthenticationError('Incorrect email or password')
}

export const resolvers = {
  Query: {
    async getFullBudget(parent, args, ctx) {
      if (ctx.user) return getLatestBudget();
      return null;
    }
  },
  Mutation: {
    updateBudget,
    async login(parent, { email, password }) {
      return { token: await getUser({ email, password }) }
    },

    async signUp(parent, { email, password }) {
      return { token: await saveUser({ email, password }) }
    },

    async startNewBudget() {
      try {
        await newBudget();
        return { success: true }
      } catch (e) {
        console.error(e);
        return { success: false }
      }
    }
  }
}