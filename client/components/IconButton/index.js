import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { Container, StyledFontAwesome } from './styles';

export const IconButton = ({ link, size = "lg", onClick, icon = faShoppingBag, iconColor = '#1ca263', backgroundColor = 'white', activeColor = '#ecc496', hoverColor = '#c4c6c6' }) => {
	if (link) {
		return (
			<Link href={link}>
				<Container onClick={onClick} size={size} backgroundColor={backgroundColor} activeColor={activeColor} hoverColor={hoverColor}>
					<StyledFontAwesome icon={icon} color={iconColor} size={size} />
				</Container>
			</Link>
		)
	}
	return (
		<Container onClick={onClick} size={size} backgroundColor={backgroundColor} activeColor={activeColor} hoverColor={hoverColor}>
			<StyledFontAwesome icon={icon} color={iconColor} size={size} />
		</Container>
	);
};
