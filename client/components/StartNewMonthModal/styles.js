import Modal from 'styled-react-modal'
import styled from 'styled-components';
import { PRIMARY, RED, SECONDARY } from '../../styles/colors';

export const StyledModal = Modal.styled`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
	padding: 25px;
	width: 25rem;
`
export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-around;
	width: 200px;
	margin: 10px 0px;
`

export const Button = styled.button`
	padding: 5px;
	font-size: 16px;

	:hover {
		background-color: #c4c6c6;
	}

	@media (max-width: 500px) {
		padding: 15px;
	}
`

export const Title = styled.p`
	margin: 5px;
	font-size: 26px;
`
export const Description = styled.p`
	margin: 8px 0;
	font-size: 16px;
	line-height: 20px;
`

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
	margin: 15px 0;
`
