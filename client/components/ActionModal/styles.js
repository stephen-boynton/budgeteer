import Modal from 'styled-react-modal'
import styled from 'styled-components';

export const StyledModal = Modal.styled`
  width: 25rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
	background-color: white;
	
	@media (max-width: 500px) {
		width: 15rem;
		height: 15rem;
	}
`

export const Container = styled.div`
	background-color: #1ca263;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 300px;
	padding: 10px;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
`

export const Input = styled.input`
	width: 200px;
	height: 20px;
	margin: 5px 0;
	font-size: 16px;

	@media (max-width: 500px) {
		height: 30px;
		font-size: 18px;
	}
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

export const Total = styled.p`
	font-style: italic;
	color: grey;
	font-size: 16px;
	margin-bottom: 15px;
`
