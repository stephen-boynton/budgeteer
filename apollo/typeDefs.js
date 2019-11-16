import gql from 'graphql-tag'

export const typeDefs = gql`
  type FullBudget {
    active_date: String
    grand_total: Float
    grand_amount: Float
    groceries: Budget
    entertainment: Budget
    power: Budget
    phone: Budget
    gas: Budget
    unexpected: Budget
    rent: Budget
  }

  input Action {
    operator: String
    amount: Float
    note: String
  }

  type History {
    operator: String
    amount: Float,
    note: String,
    timestamp: String
  }

  type Budget {
    total: Float
    amount: Float
    history: [History]!
  }

  type Query {
    getFullBudget: FullBudget
  }

  type Mutation {
    updateBudget(type: String!, action: Action!): Budget
  }
  `
