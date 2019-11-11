import styled from 'styled-components';

export const Container = styled.div`
	background-color: #1ca263;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 300px;
	width: 100%;
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
