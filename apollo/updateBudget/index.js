import { add, subtract, apply } from 'lodash/fp'
import { connect } from '../../database';
import { AuthenticationError } from 'apollo-server-core';

const pAdd = apply(add);
const pSubtract = apply(subtract);

export async function updateBudget(parent, { type, action }, { user }) {
  if (!user) throw new AuthenticationError('must be logged in');

  const { client } = await connect();
  const isAdd = action.operator === 'add';

  const session = client.startSession();

  try {
    let result;
    await session.withTransaction(async () => {
      const collection = client.db('test').collection('budget');

      const data = await collection.find({})
        .sort({ "active_date": -1 })
        .limit(1)
        .toArray();

      const [fullBudget] = data;

      const oldBudget = fullBudget[type];

      const update = {
        $set: {
          grand_amount: isAdd
            ? pAdd([fullBudget.grand_amount, action.amount])
            : pSubtract([fullBudget.grand_amount, action.amount]),
          [type]: {
            total: oldBudget.total,
            amount: isAdd
              ? pAdd([oldBudget.amount, action.amount])
              : pSubtract([oldBudget.amount, action.amount]),
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

      const value = await collection.findOneAndUpdate({}, update, { sort: { active_date: -1 }, returnOriginal: false });
      await session.endSession();
      await client.close();
      result = value.value[type]
    }, {
      session
    });
    return result;
  } finally {
    await session.endSession();
    await client.close();
  }
}