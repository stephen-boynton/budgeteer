import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import Layout from '../client/components/Layout'
import { GET_FULL_BUDGET } from '../client/gql'
// @TODO: PWA config: https://github.com/hanford/next-offline

export default () => {
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
  const { getFullBudget: fullBudget } = data;

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