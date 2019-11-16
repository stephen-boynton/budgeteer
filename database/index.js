import { MongoClient } from 'mongodb';

export async function connect() {
  try {
    const client = await MongoClient.connect(process.env.MONGO_URL, { useNewUrlParser: true });
    const db = client.db('test');
    const collection = db.collection('budget');
    return { collection, client };
  } catch (e) {
    throw e;
  }
}
