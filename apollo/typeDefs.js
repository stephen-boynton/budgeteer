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

  type Token {
    token: String
  }

  type Mutation {
    updateBudget(type: String!, action: Action!): Budget
    login(email: String, password: String): Token
    signUp(email: String, password: String): Token
  }
  `
