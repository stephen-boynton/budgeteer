import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'

import { Container, StyledFontAwesome } from './styles';

export const IconButton = ({ active, link, size = "lg", onClick, icon = faShoppingBag, iconColor = '#1ca263' }) => {
	// if (link) {
	// 	return (
	// 		<Link href={link.pathname} as={link.as || link.pathname}>
	// 			<Container active={active} size={size}>
	// 				<StyledFontAwesome icon={icon} color={iconColor} size={size} />
	// 			</Container>
	// 		</Link>
	// 	)
	// }
	return (
		<Container onClick={onClick} size={size}>
			<StyledFontAwesome icon={icon} color={iconColor} size={size} />
		</Container>
	);
};
