import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'

import { Container, StyledFontAwesome } from './styles';

export const IconButton = ({ active, link, size = "lg", onClick, icon = faShoppingBag, iconColor = '#1ca263' }) => {
	return (
		<Container onClick={onClick} size={size}>
			<StyledFontAwesome icon={icon} color={iconColor} size={size} />
		</Container>
	);
};
