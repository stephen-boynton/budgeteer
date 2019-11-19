import { ApolloServer } from 'apollo-server-micro'
import { schema } from '../../apollo/schema'
import { authentication } from '../../apollo/authenticate'

const apolloServer = new ApolloServer({
  schema,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    const user = authentication(token);
    return { user };
  }
})

export const config = {
  api: {
    bodyParser: false
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })