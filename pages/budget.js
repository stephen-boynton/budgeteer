import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import Layout from '../client/components/Layout'
import { GET_FULL_BUDGET } from '../client/gql'
import { auth } from '../client/utils/auth'
// @TODO: PWA config: https://github.com/hanford/next-offline

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

  if (!data) return (<div><h1>Loading</h1></div>);
  if (error) return console.log(error);

  const isOverview = title === 'overview'
  const { getFullBudget: fullBudget = {} } = data;

  if (isOverview) {
    selectedData = {
      amount: fullBudget.grand_amount,
      total: fullBudget.grand_total
    }
  } else {
    selectedData = {
      amount: fullBudget[title].amount,
      total: fullBudget[title].total
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
