import Modal from 'styled-react-modal'
import styled from 'styled-components';
import { PRIMARY, RED, SECONDARY } from '../../styles/colors';

export const StyledModal = Modal.styled`
  display: flex;
  align-items: center;
  background-color: white;
  height: 75vh;
  width: 60vw;
  padding: 25px;
  background-color: ${SECONDARY};
`

export const EventListContainer = styled.ul`
  list-style: none;
  height: 100%;
  overflow: scroll;
  width: 100%;
`

export const EventListItem = styled.li`
  margin: 20px 0;
  color: white;
  font-size: 16px;
  /* width: 100%; */
  padding: 10px 10px;
  /* border-radius: 20% 20%; */
  background-color: ${p => p.operator === 'add' ? PRIMARY : RED};
  /* background: ${
  p => p.operator === 'add'
    ? 'linear-gradient(90deg, rgba(28, 162, 99, 1) 0%, rgba(28, 162, 99, 0) 100%);'
    : 'linear-gradient(90deg, rgba(208,47,95,1) 0%, rgba(208,47,95,0) 100%);'
  }; */
`

export const Amount = styled.p`
  font-size: 20px;
  margin: 10px 0;
  font-weight: bold;
`
export const DateTime = styled.span`
  font-style: italic;
  margin: 10px;
  font-size: 16px;
  font-weight: lighter;
`

export const Description = styled.p`
  font-size: 18px;
  padding-left: 10px;
`

export const Category = styled.p`
  font-size: 18px;
  padding-left: 10px;
  margin: 10px 0;
`
