import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const Container = styled.button`
	background-color: ${p => p.active ? p.activeColor : p.backgroundColor};
	border: none;
	border-radius: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px 10px;
	width: ${p => p.size === 'lg' ? '50px' : '65px'};
	height: ${p => p.size === 'lg' ? '50px' : '65px'};

	:hover {
		cursor: pointer;
		background-color: ${p => p.hoverColor};
	}

	:focus {
		background-color: ${p => p.activeColor};
	}
`;

export const StyledFontAwesome = styled(FontAwesomeIcon)`
	position: absolute;
`;
