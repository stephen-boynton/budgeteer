import React, { useState } from 'react'
import styled from 'styled-components';
import Layout from '../client/components/Layout'
import { auth } from '../client/utils/auth'
import { PRIMARY, SECONDARY } from '../client/styles'
import { IconButton } from '../client/components/IconButton';
import { faBackward, faBackspace, faArrowLeft, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { StartNewMonthModal } from '../client/components/StartNewMonthModal';
import { useMutation } from '@apollo/react-hooks';
import { START_NEW_BUDGET, GET_FULL_BUDGET } from '../client/gql';

const Container = styled.div`
	background-color: ${PRIMARY};
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	width: 100vw;
`;

const Title = styled.h2`
	font-family: 'Source Sans Pro', sans-serif;
	font-size: 40px;
	font-weight: bold;
	color: white;
	margin: 15px 0;
`;

const SettingItemsContainer = styled.ul`
  list-style: none;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
`

const SettingItem = styled.li`
  margin: 10px 0;
`

const SettingButton = styled.button`
  color: white;
  font-size: 18px;
  background-color: ${PRIMARY};
  padding: 20px;
  border: 2px solid white;
  width: 200px;
  font-weight: bold;
`

const Settings = () => {
  const [isStartNewMontModalOpen, setStartNewMonthModalOpen] = useState(false);
  const [startNewMonth] = useMutation(START_NEW_BUDGET, {
    ignoreResults: true,
    refetchQueries: [{ query: GET_FULL_BUDGET }]
  });

  const createToggle = (isBool, setBool) => () => setBool(!isBool);

  const toggleStartNewMonthModal = createToggle(isStartNewMontModalOpen, setStartNewMonthModalOpen);

  return (
    <Container>
      <Title>Settings</Title>
      <SettingItemsContainer>
        <SettingItem>
          <SettingButton onClick={toggleStartNewMonthModal}>Start New Month</SettingButton>
        </SettingItem>
        <SettingItem>
          <SettingButton>User Account</SettingButton>
        </SettingItem>
        <SettingItem>
          <SettingButton>Update Budget Template</SettingButton>
        </SettingItem>
      </SettingItemsContainer>
      <IconButton link='/budget' icon={faArrowLeft} />
      <StartNewMonthModal isOpen={isStartNewMontModalOpen} startNewMonth={startNewMonth} toggleOpen={toggleStartNewMonthModal} />
    </Container>
  )
}

Settings.getInitialProps = async (ctx) => {
  const token = auth(ctx);
  return { token }
}

export default Settings
