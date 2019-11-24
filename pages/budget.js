import React, { useState } from 'react'
import {
  __,
  apply,
  assoc,
  allPass,
  complement,
  entries,
  equals,
  filter,
  first,
  flatten,
  get,
  isObject,
  juxt,
  last,
  map,
  pipe,
  sortBy,
  tap
} from 'lodash/fp'
import { useQuery } from '@apollo/react-hooks'
import Layout from '../client/components/Layout'
import { GET_FULL_BUDGET } from '../client/gql'
import { auth } from '../client/utils/auth'
import { LoadingScreen } from '../client/components/LoadingScreen'

const notEqual = complement(equals)

const createGrandHistory = pipe(
  entries,
  filter(pipe(
    last,
    isObject
  )),
  map(pipe(
    juxt([first, pipe(last, get('history'))]),
    ([category, history]) => map(assoc('category', category), history)
  )),
  flatten,
  sortBy(p => p.timestamp)
)

const Budgeteer = () => {
  const [title, setTitle] = useState('overview');
  let selectedData = {
    amount: 0,
    total: 0
  };

  const {
    data,
    error
  } = useQuery(GET_FULL_BUDGET)

  const handleSelection = (type) => (e) => {
    e.preventDefault();
    return setTitle(type)
  }

  if (!data) return (<LoadingScreen />);
  if (error) return console.log(error);

  const isOverview = title === 'overview'
  const { getFullBudget: fullBudget } = data;

  if (isOverview) {
    selectedData = {
      amount: fullBudget.grand_amount,
      total: fullBudget.grand_total,
      history: createGrandHistory(fullBudget)
    }
  } else {
    selectedData = {
      amount: fullBudget[title].amount,
      total: fullBudget[title].total,
      history: fullBudget[title].history
    }
  }

  return (
    <Layout
      title={title}
      data={selectedData}
      handleSelection={handleSelection}
      allowActions={!isOverview}
    />
  )
}

Budgeteer.getInitialProps = async (ctx) => {
  const token = auth(ctx);
  return { token }
}

export default Budgeteer
