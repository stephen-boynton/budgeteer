import React, { useState } from 'react'
import styled from 'styled-components'
import { OverViewStatus } from '../OverViewStatus'
import { NavSection } from '../NavSection'
import { EventList } from '../EventList'
import { PRIMARY } from '../../styles'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #a11b5a;
  z-index: 1000;
`

const HistoryButton = styled.button`
  background-color: white;
  font-size: 20px;
  padding: 15px;
  margin: 20px 0;
  border: none;
  font-weight: bold;
  color: ${PRIMARY}
`

export default ({ title, data, handleSelection, allowActions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Container>
      <OverViewStatus allowActions={allowActions} title={title} amount={data.amount} total={data.total} />
      <NavSection activeLink={title} handleSelection={handleSelection} />
      <HistoryButton onClick={toggleOpen}>History</HistoryButton>
      <EventList isOpen={isOpen} toggleOpen={toggleOpen} eventList={data.history} />
    </Container>
  )
}
