import React from 'react'
import styled from 'styled-components'
import { OverViewStatus } from '../client/components/OverViewStatus'
import { NavSection } from '../client/components/NavSection'
import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/react-hooks'
// @TODO: PWA config: https://github.com/hanford/next-offline

const GET_FULL_BUDGET = gql`
  query GetFullBudget {
    getFullBudget {
      grand_total
    }
  }
`

const UPDATE_BUDGET = gql`
  mutation UpdateBudget($type: String!, $action: Action!) {
    updateBudget(type: $type, action: $action){
      total,
      amount,
      history
    }
  }
`


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #a11b5a;
  z-index: 1000;
`

export default () => {
  // const {
  //   data,
  //   error
  // } = useQuery(GET_FULL_BUDGET)

  const [updateBudget, { data, error }] = useMutation(UPDATE_BUDGET)


  const onClick = () => {
    updateBudget({
      variables: {
        type: 'groceries',
        action: {
          action: 'add',
          amount: 25.15
        }
      }
    })
  }
  if (data) console.log(data);
  if (error) console.log(error);
  return (
    <Container onClick={onClick}>
      <OverViewStatus allowActions={false} title='Overview' amount={900} total={3650} />
      <NavSection activeLink={'all'} />
    </Container>
  )
}