import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import { Container, StyledFontAwesome, CtaText } from './styles';

export const IconButton = ({ ctaText, icon = faShoppingBag, iconColor = '#1ca263' }) => {
	return (
		<Container>
			<StyledFontAwesome icon={icon} color={iconColor} size="lg" />
			{ctaText && <CtaText>{ctaText}</CtaText>}
		</Container>
	);
};
