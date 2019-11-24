import React, { useRef, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { StyledModal, Button, ButtonContainer, Title, Description, StyledForm } from "./styles"
import { START_NEW_BUDGET } from '../../gql'

export const StartNewMonthModal = ({ isOpen, toggleOpen, startNewMonth }) => {
  const [isChecked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked(!isChecked);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    startNewMonth();
    toggleChecked();
    toggleOpen();
  };

  return (
    <StyledModal isOpen={isOpen} onBackgroundClick={toggleOpen} >
      <Title>Start New Month</Title>
      <Description>This will conclude the current month's budget, and start a new one.</Description>
      <Description>Are you sure?</Description>
      <StyledForm>
        <input onChange={toggleChecked} type="checkbox" id="sure" name="sure" />
        <label for="sure">Yes, I'm Sure</label>
      </StyledForm>
      <ButtonContainer>
        <Button disabled={!isChecked} type="submit" onClick={handleSubmit}>Submit</Button>
        <Button onClick={toggleOpen}>Cancel</Button>
      </ButtonContainer>
    </StyledModal>
  )
}

