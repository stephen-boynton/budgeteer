import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import { Container, StyledFontAwesome } from './styles';

export const IconButton = ({ size = "lg", onClick, icon = faShoppingBag, iconColor = '#1ca263', backgroundColor = 'white', activeColor = '#ecc496', hoverColor = '#c4c6c6' }) => {
	return (
		<Container onClick={onClick} size={size} backgroundColor={backgroundColor} activeColor={activeColor} hoverColor={hoverColor}>
			<StyledFontAwesome icon={icon} color={iconColor} size={size} />
		</Container>
	);
};
