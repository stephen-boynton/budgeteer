import React from 'react'
import styled from 'styled-components'
import { OverViewStatus } from '../OverViewStatus'
import { NavSection } from '../NavSection'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #a11b5a;
  z-index: 1000;
`

export default ({ title, data, handleSelection, allowActions }) => {
  return (
    <Container>
      <OverViewStatus allowActions={allowActions} title={title} amount={data.amount} total={data.total} />
      <NavSection activeLink={title} handleSelection={handleSelection} />
    </Container>
  )
}
