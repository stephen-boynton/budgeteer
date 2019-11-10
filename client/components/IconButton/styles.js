import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const Container = styled.button`
	background-color: white;
	border: none;
	padding: 10px 10px;
	border-radius: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	:hover {
		background-color: #c4c6c6;
	}
`;

export const StyledFontAwesome = styled(FontAwesomeIcon)`

`;

export const CtaText = styled.p`font-size: 18px;`;
