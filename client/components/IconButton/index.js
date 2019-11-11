import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import { Container, StyledFontAwesome, CtaText } from './styles';

export const IconButton = ({ size = "lg", onClick, ctaText, icon = faShoppingBag, iconColor = '#1ca263' }) => {
	return (
		<Container onClick={onClick} size={size}>
			<StyledFontAwesome icon={icon} color={iconColor} size={size} />
			{ctaText && <CtaText>{ctaText}</CtaText>}
		</Container>
	);
};
