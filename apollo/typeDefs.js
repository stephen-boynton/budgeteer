import gql from 'graphql-tag'

export const typeDefs = gql`
  type FullBudget {
    active_date: String
    grand_total: Float
    groceries: Budget
    entertainment: Budget
    power: Budget
    gas: Budget
    unexpected: Budget
    rent: Budget
  }

  input Action {
    action: String!
    amount: Float!
  }

  type History {
    action: String!
    amount: Float!,
    timestamp: String!
  }

  type Budget {
    total: Float!
    amount: Float!
    history: [History!]!
  }

  type Query {
    getFullBudget: FullBudget!
  }

  type Mutation {
    updateBudget(type: String!, action: Action!): Budget
  }
  `
