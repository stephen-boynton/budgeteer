import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const Container = styled.button`
	background-color: ${p => p.active ? '#da8628' : 'white'};
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
		background-color: #c4c6c6;
	}

	:focus {
		background-color: #da8628;
	}
`;

export const StyledFontAwesome = styled(FontAwesomeIcon)`
	position: absolute;
`;
