import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const Container = styled.button`
	background-color: white;
	border: none;
	border-radius: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px 10px;
	width: ${p => p.size === 'lg' ? '50px' : '65px'};
	height: ${p => p.size === 'lg' ? '50px' : '65px'};


	:hover {
		background-color: #c4c6c6;
	}
`;

export const StyledFontAwesome = styled(FontAwesomeIcon)`
	position: absolute;
`;

export const CtaText = styled.p`font-size: 18px;`;
