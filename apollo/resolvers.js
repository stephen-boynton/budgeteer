import { connect } from '../database'

const getLatestBudget = async () => {
  const { collection } = await connect();
  const value = await collection.findOne(
    { "active_date": -1 }
  );
  return value;
}

export const resolvers = {
  Query: {
    async getFullBudget() {
      return getLatestBudget();
    }
  },
  Mutation: {
    async updateBudget(parent, { type, action }) {
      const { client } = await connect();
      const isAdd = action.action === 'add';

      const session = client.startSession();
      try {
        await session.withTransaction(async () => {
          const collection = client.db('test').collection('budget');

          // Important:: You must pass the session to the operations

          const data = await collection.find({}).sort({ "active_date": -1 }).limit(1).toArray();
          const [fullBudget] = data;

          const oldBudget = fullBudget[type];
          console.log(oldBudget)
          const update = {
            $set: {
              grand_total: isAdd
                ? parseFloat(fullBudget.amount) + parseFloat(action.amount)
                : parseFloat(fullBudget.amount) - parseFloat(action.amount),
              [type]: {
                total: oldBudget.total,
                amount: isAdd
                  ? parseFloat(oldBudget.amount) + parseFloat(action.amount)
                  : parseFloat(oldBudget.amount) - parseFloat(action.amount),
                history: [
                  ...oldBudget.history,
                  {
                    ...action,
                    timestamp: new Date().toISOString()
                  }
                ]
              }
            }
          }

          const value = await collection.findOneAndUpdate(
            {},
            update,
            { sort: { active_date: -1 } },
          );
          return value
        }, { session, returnOriginal: false });
        await session.endSession();
        await client.close();
      } finally {
        await session.endSession();
        await client.close();
      }
    }
  }

}