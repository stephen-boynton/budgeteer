import styled from 'styled-components';
import { PRIMARY } from '../../styles';

export const Container = styled.div`
	background-color: ${p => p.status};
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 300px;
	width: 100%;
	padding-top: 75px;
	border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
`;

export const Title = styled.h2`
	font-family: 'Source Sans Pro', sans-serif;
	font-size: 40px;
	font-weight: bold;
	color: white;
	margin: 15px 0;
`;

export const IconContainer = styled.div`
	display: flex;
	justify-content: space-around;
	width: 200px;
`;
