import Modal from 'styled-react-modal'
import styled from 'styled-components';

export const StyledModal = Modal.styled`
  width: 15rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`

export const Container = styled.div`
	background-color: #1ca263;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 300px;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
`

export const Input = styled.input`
	width: 100px;
	height: 18px;
	margin: 5px 0;
`

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100px;
`

export const Button = styled.button`
	padding: 5px;
`

export const Title = styled.p`
	margin: 5px;
`

export const Total = styled.p`
	font-style: italic;
	color: grey;
	font-size: 13px;
`
