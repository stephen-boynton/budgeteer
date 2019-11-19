import gql from 'graphql-tag';

export const GET_FULL_BUDGET = gql`
  query GetFullBudget {
    getFullBudget {
    active_date
    grand_total 
    grand_amount
    groceries {
      amount
      total
    }
    entertainment{
      amount
      total
    }
    power{
      amount
      total
    }
    gas{
      amount
      total
    }
    phone {
      amount
      total
    }
    unexpected{
      amount
      total
    }
    rent{
      amount
      total
    }
    }
  }
`

export const LOGIN = gql`
  mutation Login($email: String, $password: String){
    login(email: $email, password: $password){
      token
    }
  }
`

const UPDATE_BUDGET = gql`
  mutation UpdateBudget($type: String!, $action: Action!) {
    updateBudget(type: $type, action: $action){
      amount
    }
  }
`