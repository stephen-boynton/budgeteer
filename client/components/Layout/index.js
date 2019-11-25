import React, { useState } from 'react'
import styled from 'styled-components'
import { OverViewStatus } from '../OverViewStatus'
import { NavSection } from '../NavSection'
import { EventList } from '../EventList'
import { PRIMARY } from '../../styles'
import { IconButton } from '../IconButton'
import { faCog } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #a11b5a;
  z-index: 1000;
`

const SettingsContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(0,0,0,0);
  position: absolute;
  width: 100%;
  justify-content: flex-end;
`

const HistoryButton = styled.button`
  background-color: white;
  font-size: 20px;
  padding: 15px;
  margin: 20px 0;
  border: none;
  font-weight: bold;
  color: ${PRIMARY};
`

export default ({ title, data, handleSelection, allowActions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Container>
      <SettingsContainer>
        <IconButton link='/settings' icon={faCog} iconColor='white' size="2x" backgroundColor="rgba(0,0,0,0)" activeColor="rgba(0,0,0,0)" />
      </SettingsContainer>
      <OverViewStatus allowActions={allowActions} title={title} amount={data.amount} total={data.total} />
      <NavSection activeLink={title} handleSelection={handleSelection} />
      <HistoryButton onClick={toggleOpen}>History</HistoryButton>
      <EventList isOpen={isOpen} toggleOpen={toggleOpen} eventList={data.history} />
    </Container>
  )
}
