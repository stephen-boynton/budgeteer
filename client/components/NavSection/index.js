import { faShoppingBag, faWineBottle, faLightbulb, faGasPump, faPhone, faQuestion, faHome, faShoppingCart, faBolt, faTicketAlt, faFilm } from '@fortawesome/free-solid-svg-icons';

import { IconButton } from '../IconButton'
import { Container } from './styles';

const fakeData = {
	budgets: [
		{
			section: 'groceries',
			total: 500,
			amount: 355,
			history: [{ action: 'add', amount: 10 }]
		},
		{
			section: 'gas',
			total: 120,
			amount: 89,
			history: [{ action: 'subtract', amount: 10 }]
		},
		{
			section: 'entertainment',
			total: 200,
			amount: 187,
			history: [{ action: 'add', amount: 10 }]
		},
		{
			section: 'power',
			total: 120,
			amount: 89,
			history: [{ action: 'subtract', amount: 10 }]
		},
		{
			section: 'rent',
			total: 120,
			amount: 89,
			history: [{ action: 'subtract', amount: 10 }]
		},
		{
			section: 'phone',
			total: 120,
			amount: 89,
			history: [{ action: 'subtract', amount: 10 }]
		},
		{
			section: 'unexpected',
			total: 120,
			amount: 89,
			history: [{ action: 'subtract', amount: 10 }]
		}
	]
}

const icons = {
	groceries: faShoppingCart,
	entertainment: faFilm,
	power: faBolt,
	gas: faGasPump,
	phone: faPhone,
	unexpected: faQuestion,
	rent: faHome
}

export const NavSection = ({ }) => {
	return (
		<Container>
			{fakeData.budgets.map((b, i) => <IconButton icon={icons[b.section]} size='3x' key={i} />)}
		</Container>
	);
};
