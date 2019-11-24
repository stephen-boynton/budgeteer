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
      history {
        operator
        note
        amount
        timestamp
      }
    }
    entertainment{
      amount
      total
      history {
        operator
        note
        amount
        timestamp
      }
    }
    power{
      amount
      total
      history {
        operator
        note
        amount
        timestamp
      }
    }
    gas{
      amount
      total
      history {
        operator
        note
        amount
        timestamp
      }
    }
    phone {
      amount
      total
      history {
        operator
        note
        amount
        timestamp
      }
    }
    unexpected{
      amount
      total
      history {
        operator
        note
        amount
        timestamp
      }
    }
    rent{
      amount
      total
      history {
        operator
        note
        amount
        timestamp
      }
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