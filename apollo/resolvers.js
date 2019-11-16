import { connect } from '../database'
import { updateBudget } from './updateBudget'

const getLatestBudget = async () => {
  const { collection } = await connect();
  const response = await collection.find({})
    .sort({ "active_date": -1 })
    .limit(1)
    .toArray();
  const [value] = response
  return value;
}

export const resolvers = {
  Query: {
    async getFullBudget() {
      return getLatestBudget();
    }
  },
  Mutation: {
    updateBudget
  }
}